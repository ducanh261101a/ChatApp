import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import images from '../../untils/images';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebase';
import LoginSlide from '../LoginScreens/LoginSlide';
import {userInformation} from '../../redux/selectors';
import {useDispatch, useSelector} from 'react-redux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const Register = () => {
    if (!username) {
      setError('Vui lòng nhập email!');
      return;
    }

    if (!pass) {
      setError('Vui lòng nhập mật khẩu!');
      return;
    }

    if (pass.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }

    if (username.length > 0 && pass.length > 5) {
      console.log('abcd');
      createUserWithEmailAndPassword(auth, username, pass)
        .then(userCredential => {
          console.log('co vao day', userCredential);
          dispatch(
            LoginSlide.actions.addInfo({
              email: userCredential.email,
              idToken: userCredential.idToken,
            }),
          );
        })
        .catch(err => setError(err));
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleBack}>
          <SvgXml style={styles.leftIcon} xml={images.leftArrow} />
        </TouchableOpacity>
        <Text style={{fontSize: 18}}>Đăng ký tài khoản</Text>
        <View style={{width: 50}} />
      </View>

      <View style={{width: WIDTH, height: HEIGHT, alignItems: 'center'}}>
        <View style={{height: 30}} />
        <View
          style={{
            width: 300,
          }}>
          <Text style={{marginBottom: 4, fontSize: 16}}>Email:</Text>
          <TextInput
            placeholder="Vui lòng nhập Email"
            style={styles.textInput}
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View
          style={{
            width: 300,
            marginVertical: 10,
          }}>
          <Text style={{marginBottom: 4, fontSize: 16}}>Mật khẩu:</Text>
          <TextInput
            placeholder="Vui lòng nhập mật khẩu"
            style={styles.textInput}
            value={pass}
            onChangeText={text => setPass(text)}
          />
        </View>

        {error ? (
          <View
            style={{
              width: '100%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'red',
                textAlign: 'center',
                width: '88%',
              }}>
              {error}
            </Text>
          </View>
        ) : null}

        <View style={{width: 300}}>
          <TouchableOpacity
            style={[styles.btn, {marginTop: 10}]}
            onPress={() => Register()}>
            <Text style={styles.textBtn}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: WIDTH,
    height: 50,
    backgroundColor: '#0EA5C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcon: {
    width: 50,
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  btn: {
    backgroundColor: '#074684',
    width: '100%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textBtn: {
    color: '#fff',
    fontSize: 16,
  },
});
