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
import Account from './src/screen/Account/Account';
import Cart from './src/screen/Home/Cart';
import Home from './src/screen/Home/Home';
import ShowAllFoodShops from './src/screen/Home/ShowAllFoodShops';
import ShowAllGrocery from './src/screen/Home/ShowAllGrocery';
import Package from './src/screen/Package/Package';
import Payment from './src/screen/Payment/Payment';
import ShopDetails from './src/screen/Home/ShopDetails';
import ProductDesc from './src/screen/Home/ProductDesc';


const App = () => {

  return (
   <>
      {/* <ProductDesc /> */}
      {/* <ShowAllFoodShops /> */}
      {/* <ShowAllGrocery /> */}
      <Package />
      {/* <Payment /> */}
      {/* <Account /> */}
      {/* <Cart /> */}
      {/* <ShopDetails /> */}
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
