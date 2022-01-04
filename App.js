import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
const Stack = createNativeStackNavigator();

import SplashScreen from './src/navigators/SplashScreens/SplashScreen';
import LoginScreen from './src/navigators/LoginScreens/LoginScreen';
import HomeScreen from './src/navigators/HomeScreens/HomeScreen';
import RegisterScreen from './src/navigators/RegisterScreens/RegisterScreen';
import FogotPassScreen from './src/navigators/FogotPasswordScreens/FogotPassScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="FogotPass" component={FogotPassScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
