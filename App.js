/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LocaionPermission from './src/screen/Auth/LocationPermission';
import BoardingScreen from './src/screen/BoardingScreen';
import Home from './src/screen/Home/Home';
import ShopDetails from './src/screen/Home/ShopDetails';
import ShowAllFoodShops from './src/screen/Home/ShowAllFoodShops';
import ShowAllGrocery from './src/screen/Home/ShowAllGrocery';
import Login from './src/screen/LogIn';
import OTP from './src/screen/OTP';
import ProductDesc from './src/screen/ProductDesc';


const App = () => {

  return (
    // <BoardingScreen />
    // <Login />
    // <OTP />
    // <ProductDesc />
    <Home/>
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
