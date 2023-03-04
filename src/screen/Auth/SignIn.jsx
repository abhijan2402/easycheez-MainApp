import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth';
import { login } from '../../services/auth/login';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;

function SignIn({navigation}) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  return (
    <ScrollView style={styles.Scroll}>
      <Text style={styles.Subhead}>
        Sign In
      </Text>
      <Image 
        source={require('../../assets/Auth/SignIn.jpeg')} 
        style={styles.image}
      />
      <View style={styles.inputView}>
        <TextInput 
          onChangeText={email=>setEmail(email)} 
          style={styles.Box} 
          placeholder={'Email'} 
          placeholderTextColor={"black"} 
        /> 
        <TextInput 
          onChangeText={password=>setPassword(password)}
          style={styles.Box} 
          placeholder={'Password'} 
          placeholderTextColor={"black"} 
        />
        <Text style={styles.SubForgot} onPress={()=>{navigation.navigate('ForgotPass')}}>
          Forgot Password ?
        </Text>
        <TouchableOpacity 
          style={styles.MainButton} 
          onPress={async()=>{
            const res=await login(email,password);
            if(res)
              console.log(res);
          }}
        >
          <Text style={styles.BtnTxt} >
            Login
          </Text>
        </TouchableOpacity>
        <View style={styles.Last}>
          <Text style={styles.LastTxt}>Don't Have an Account ?</Text>
          <Text style={styles.SubLastTxt} onPress={()=>{navigation.navigate('SignUp')}}>Create Account</Text>
        </View>
      </View>
      
    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  Scroll:{
    backgroundColor:"white",
    // alignSelf:"center"
  },
  Head:{
    alignSelf:"center",
    marginTop:30
  },
  Subhead:{
    color:"black",
    fontSize:30,
    fontWeight:'900',
    textAlign:"center",
    padding:10
  },
  image:{
    marginTop:50,
    height: windoHeight/4,
    width: windoWidth,
  },
  Box:{
    height: 45,
    width: windoWidth-60,
    marginTop: 10,
    borderRadius:10,
    borderColor:"#808080",
    borderWidth:1,
    color:"black",
    paddingLeft:10,
    fontWeight:"bold"
  },
  Forgot:{
    alignSelf:"center",
    marginTop:10
  },
  SubForgot:{
    color:"black",
    fontWeight:"700",
    marginVertical:10
  },
  MainButton:{
    height: 45,
    width: windoWidth-60,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnTxt:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Last:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    marginTop:10
  },
  LastTxt:{
    fontWeight:"700",
    color:"black"
  },
  SubLastTxt:{
    color:"blue",
    fontWeight:"700",
    marginLeft:5
  },
  inputView:{
    alignItems:"center",
    margin: 30,
  }
})
