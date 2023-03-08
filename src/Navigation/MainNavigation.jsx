import { View, Text,StyleSheet,style,Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigation from '../Navigation/HomeNavigation';
import Package from '../screen/Package/Package';
import CartNavigation from './CartNavigation';
import Account from '../screen/Account/Account'
import Cart from '../screen/Home/Cart'
import ShopDetails from '../screen/Home/ShopDetails'

import Ionicons from 'react-native-vector-icons/Ionicons'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return ( 
      <Tab.Navigator
      screenOptions={{
        headerShown:false,tabBarShowLabel: false,showIcon: false,
            tabBarStyle:[ {backgroundColor:"#ffffff",borderTopWidth:1,borderTopColor:"#808080",height:54,},],
          }}
      >
       <Tab.Screen name="HomeNavigation" component={HomeNavigation} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='home'  color={focused ? '#FFA500' : 'black'} size={22}/>
           
          </View>
        )
      }}/>

<Tab.Screen name='Package' component={Package} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          
            <Ionicons name='fast-food-outline' color={focused ? '#FFA500' : 'black'} size={22}/>
           
          </View>
        )
      }}
        />

      <Tab.Screen name="CartNavigation" component={CartNavigation} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='cart-outline' color={focused ? '#FFA500' : 'black'} size={22}/>
   
          </View>
        )
      }}
      />

       

        <Tab.Screen name="Account" component={Account} options={{
           tabBarIcon:({focused})=>(
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Ionicons name='person' color={focused ? '#FFA500' : '#808080'} size={22}/>
              </View>
            )
           }}
        /> 
    </Tab.Navigator>
  )
}
export default MainNavigation