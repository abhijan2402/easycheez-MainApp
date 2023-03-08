import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screen/Home/Home';
import ShowAllFoodShops from '../screen/Home/ShowAllFoodShops';
import ShowAllGrocery from '../screen/Home/ShowAllGrocery';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
   <>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ShowAllGrocery' component={ShowAllGrocery}/>
            <Stack.Screen name='ShowAllFoodShops' component={ShowAllFoodShops}/>
           
        </Stack.Navigator>
    </>
)}
export default HomeNavigation

const styles = StyleSheet.create({})