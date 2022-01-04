import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const Login = () => {
    if (username == '001201025724' && pass == '123456') {
      navigation.navigate('HomeScreen');
    } else {
      setError('Số CMND/CCCD hoặc mật khẩu không chính xác! Vui lòng thử lại!');
    }
  };

  const FogotPass = () => {
    navigation.navigate('FogotPass');
  };

  const Register = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <View style={styles.logo}>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                width: 130,
                height: 130,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#ccc',
              }}>
              <Image
                source={require('../../assets/logo1.png')}
                style={styles.imgLogo}
              />
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                width: 300,
              }}>
              <Text style={{marginBottom: 4, fontSize: 16}}>Số CMND/CCCD:</Text>
              <TextInput
                placeholder="Vui lòng nhập CMND/CCCD"
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
                onPress={Login}>
                <Text style={styles.textBtn}>Đăng nhập</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 300,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  marginVertical: 10,
                }}
              />
              <TouchableOpacity style={styles.btn} onPress={Register}>
                <Text style={styles.textBtn}>Đăng ký tài khoản mới</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{marginTop: 10}} onPress={FogotPass}>
                <Text
                  style={{
                    fontStyle: 'italic',
                    textDecorationLine: 'underline',
                  }}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width,
              position: 'absolute',
              bottom: 0,
              height: 26,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.btnTongDai}>
              <Text style={styles.textTongDai}>
                Tổng đài hỗ trợ:{' '}
                <Text style={{color: 'red', textDecorationLine: 'underline'}}>
                  19006888
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 120,
    height: 120,
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  btn: {
    backgroundColor: 'red',
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
  textTongDai: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  btnTongDai: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
