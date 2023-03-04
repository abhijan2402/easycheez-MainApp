import { View, Text,StyleSheet,style,Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screen/Home/Home'
import Account from '../screen/Account/Account'
import ProductDesc from '../screen/Home/ProductDesc'
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
       <Tab.Screen name="Profile" component={Home} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='home'  color={focused ? '#FFA500' : 'black'} size={22}/>
           
          </View>
        )
      }}/>

<Tab.Screen name='ProductDesc' component={ProductDesc} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          
            <Ionicons name='fast-food-outline' color={focused ? '#FFA500' : 'black'} size={22}/>
           
          </View>
        )
      }}
        />

      <Tab.Screen name="ShopDetails" component={ShopDetails} options={{
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