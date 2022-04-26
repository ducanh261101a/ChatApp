import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {auth} from '../../config/firebase';
import {signOut} from 'firebase/auth';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <FontAwesome
  //         name="search"
  //         size={24}
  //         color={'#C5C5C7'}
  //         style={{marginLeft: 15}}
  //       />
  //     ),
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{
  //           width: 40,
  //           height: 40,
  //           marginRight: 15,
  //         }}
  //         onPress={signOut}>
  //         <Text>Đăng xuất</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  const signOut = () => {
    auth
      .signOut()
      .then(() => console.log('dang xuat thanh cong'))
      .catch(err => console.log(err));
  };

  return (
    <View style={{width: WIDTH, height: HEIGHT, alignItems: 'center'}}>
      <View style={styles.header}>
        <View style={styles.leftView}>
          <FontAwesome
            name="search"
            size={24}
            color={'#C5C5C7'}
            style={{marginLeft: 15}}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Trang chủ</Text>
        <TouchableOpacity onPress={signOut}>
          <FontAwesome
            name="sign-out"
            size={24}
            color={'#C5C5C7'}
            style={{marginRight: 15}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen')}
          style={styles.chatButton}>
          <Entypo name="chat" size={24} color={'#FAFAFA'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT - 100,
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
  header: {
    width: WIDTH,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
