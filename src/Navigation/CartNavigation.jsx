import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cart from '../screen/Home/Cart';
import Payment from '../screen/Payment/Payment'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const CartNavigation = () => {
  return (
    <>
    <Stack.Navigator initialRouteName='Cart' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Payment' component={Payment}/>
        
    </Stack.Navigator>
</>
  )
}

export default CartNavigation

const styles = StyleSheet.create({})