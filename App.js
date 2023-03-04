/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Account from './src/screen/Account/Account';
import Cart from './src/screen/Home/Cart';
import Home from './src/screen/Home/Home';
import ShowAllFoodShops from './src/screen/Home/ShowAllFoodShops';
import ShowAllGrocery from './src/screen/Home/ShowAllGrocery';
import Package from './src/screen/Package/Package';
import Payment from './src/screen/Payment/Payment';
import ShopDetails from './src/screen/Home/ShopDetails';
import ProductDesc from './src/screen/Home/ProductDesc';
import SignIn from './src/screen/Auth/SignIn'
import SignUp from './src/screen/Auth/SignUp';
import ForgotPass from './src/screen/Auth/ForgotPass';
import MainNavigation from './src/Navigation/MainNavigation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
          {
            user===null?
            <>
              <Stack.Screen name='SignIn' component={SignIn} />
              <Stack.Screen name='SignUp' component={SignUp} />
              <Stack.Screen name='ForgotPass' component={ForgotPass} />
            </>:
            <Stack.Screen name='MainNavigation' component={MainNavigation} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
