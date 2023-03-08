import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AccountNavigation = () => {
  return (
    <>
    <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Account' component={Account}/>
        <Stack.Screen name='Orders' component={Orders}/>
        <Stack.Screen name='Subscription' component={Subscription}/>
    </Stack.Navigator>
</>
  )
}

export default AccountNavigation

const styles = StyleSheet.create({})