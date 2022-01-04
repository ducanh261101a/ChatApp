import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
      navigation.navigate('LoginScreen');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Image
          source={require('../../assets/logo1.png')}
          style={{width: 250, height: 250}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
