import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';
import {signOut} from 'firebase/auth';
import {auth, database} from '../../config/firebase';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      console.log('querySnapshot unsusbscribe');
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    // setMessages([...messages, ...messages]);
    const {_id, createdAt, text, user} = messages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  const handleLeft = () => {
    navigation.goBack();
  };

  return (
    <View style={{width: WIDTH, height: HEIGHT, alignItems: 'center'}}>
      <View style={styles.header}>
        <View style={styles.leftView}>
          <TouchableOpacity onPress={handleLeft}>
            <FontAwesome
              name="arrow-left"
              size={24}
              color={'#C5C5C7'}
              style={{marginLeft: 15}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nhắn tin</Text>
        <View style={{width: 30}}></View>
      </View>
      <View style={{width: WIDTH, height: HEIGHT - 60}}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={false}
          showUserAvatar={false}
          onSend={messages => onSend(messages)}
          messagesContainerStyle={{
            backgroundColor: '#fff',
          }}
          textInputStyle={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
          user={{
            _id: auth?.currentUser?.email,
            avatar: 'https://i.pravatar.cc/300',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: WIDTH,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
