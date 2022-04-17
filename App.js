import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const Stack = createNativeStackNavigator();

import SplashScreen from './src/navigators/SplashScreens/SplashScreen';
import LoginScreen from './src/navigators/LoginScreens/LoginScreen';
import HomeScreen from './src/navigators/HomeScreens/HomeScreen';
import RegisterScreen from './src/navigators/RegisterScreens/RegisterScreen';
import FogotPassScreen from './src/navigators/FogotPasswordScreens/FogotPassScreen';
import ChatScreen from './src/navigators/ChatScreen/ChatScreen';

import {onAuthStateChanged} from 'firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from './src/config/firebase';
import {useEffect, useState} from 'react';
import LoginSlide from './src/navigators/LoginScreens/LoginSlide';
import {userInformation} from './src/redux/selectors';

function HomeStack() {
  return (
    <Stack.Navigator defaultScreenOptions={HomeScreen}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      defaultScreenOptions={SplashScreen}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassScreen" component={FogotPassScreen} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const userInfo = useSelector(userInformation);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async authenticatedUser => {
      authenticatedUser
        ? setUser({
            email: authenticatedUser.email,
            idToken: authenticatedUser.idToken,
            displayName: authenticatedUser.displayName,
          })
        : setUser(null);
      dispatch(LoginSlide.actions.addInfo(user));
      setLoading(false);
      console.log('co vao', authenticatedUser);
    });
    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
