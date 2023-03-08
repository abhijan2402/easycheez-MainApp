import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import auth from '@react-native-firebase/auth';

function Account() {
  return (
    <View
      style={{
        width: windoWidth,
        height: windoHeight,
        backgroundColor: 'white',
      }}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Account</Text>
      </View>
      {/* <Header title="Account" /> */}
      <View style={styles.MainView}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
          }}
          style={styles.Image}
        />
        <Text style={styles.NameText}>Abhishek</Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            marginLeft: 20,
            marginVertical: 10,
          }}>
          Options
        </Text>
        <View style={[styles.OptiionView, {marginTop: 25}]}>
          <Image
            source={require("../../assets/profile/order.png")}
            style={styles.LogoImage}
          />
          <Text style={styles.OptionText}>Orders</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2989/2989988.png',
            }}
            style={styles.LogoImage}
          />
        </View>
        <View style={styles.OptiionView}>
          <Image
            source={require("../../assets/profile/location.png")}
            style={styles.LogoImage}
          />
          <Text style={styles.OptionText}>Address</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2989/2989988.png',
            }}
            style={styles.LogoImage}
          />
        </View>
        <View style={styles.OptiionView}>
          <Image
            source={require("../../assets/profile/help.png")}
            style={styles.LogoImage}
          />
          <Text style={styles.OptionText}>Help</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2989/2989988.png',
            }}
            style={styles.LogoImage}
          />
        </View>
        <View style={styles.OptiionView}>
          <Image
            source={require("../../assets/profile/faq.png")}
            style={styles.LogoImage}
          />
          <Text style={styles.OptionText}>Subscription</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2989/2989988.png',
            }}
            style={styles.LogoImage}
          />
        </View>
        {/* <Button 
          title='Logout' 
          onPress={()=>
            auth()
            .signOut()
            .then(() => console.log('User signed out!'))
          }
        /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    width: windoWidth,
    height: windoHeight / 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 23,
    color: 'black',
    fontWeight: '700',
  },
  Image: {
    width: 70,
    height: 70,
  },
  LogoImage: {
    width: 35,
    height: 35,
  },
  MainView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  NameText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginHorizontal: 20,
  },
  OptiionView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  OptionText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    // borderWidth: 1,
    width: windoWidth / 1.6,
    paddingHorizontal: 15,
  },
});
export default Account;
