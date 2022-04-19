import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {auth} from '../../config/firebase';
import {signOut} from 'firebase/auth';

const HomeScreen = () => {
  const catImageUrl =
    'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d';
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color={'#C5C5C7'}
          style={{marginLeft: 15}}
        />
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            marginRight: 15,
          }}
          onPress={signOut}>
          <Text>Đăng xuất</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const signOut = () => {
    auth
      .signOut()
      .then(() => console.log('dang xuat thanh cong'))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ChatScreen')}
        style={styles.chatButton}>
        <Entypo name="chat" size={24} color={'#FAFAFA'} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
  },
  chatButton: {
    backgroundColor: '#f57c00',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f57c00',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
});
