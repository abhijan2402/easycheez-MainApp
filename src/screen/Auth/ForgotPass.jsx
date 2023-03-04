import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions,ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const ForgotPass = ({navigation}) => {
    const [email,setEmail]=useState('')
    const sendPasswordResetLink=async()=>{
        if(email===''){
            alert("Enter Email please");
            return
        }
        try {
            auth().sendPasswordResetEmail(email)
            .then(() => {
               alert("link send to yout gmail");
            })
            .catch((e)=>{
                console.log(e)
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView style={styles.Scroll}>
            <Text style={styles.SubHead}>Forgot Password</Text>
            <Image source={require('../../assets/Auth/ForgotPass.png')} style={styles.image}/>
            <View style={{alignItems:"center"}}>
                <TextInput 
                    style={styles.Box} 
                    placeholder={'Email'}
                    placeholderTextColor={"black"}
                    onChangeText={email=>setEmail(email)}
                />
                <TouchableOpacity style={styles.Btn} onPress={sendPasswordResetLink}>
                    <Text style={styles.BtnTxt}>Send Link</Text>
                </TouchableOpacity>
                <View style={styles.Last}>
                    <Text style={styles.LastTxt}>Back to</Text>
                    <Text style={styles.SubLastTxt} onPress={()=>{navigation.navigate('SignIn')}}>Log In</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ForgotPass

const styles = StyleSheet.create({
    Scroll:{
        backgroundColor:"white"
    },
    Head:{
        alignSelf:"center",
        marginTop:30
    },
    SubHead:{
        color:"black",
        fontSize:30,
        fontWeight:'900',
        textAlign:"center",
        padding:10
    },
    image:{
        marginTop:20,
        height: windoHeight/2,
        width: windoWidth,
    },
    Box:{
        height: 45,
        width: windoWidth-60,
        borderRadius:10,
        borderColor:"#808080",
        borderWidth:1,
        margin:10,
        fontWeight:"bold",
        paddingLeft:10,
        color:"black"
    },
    Btn:{
        height: 45,
        width: windoWidth-60,
        backgroundColor: '#FFA500',
        borderRadius: 10,
        marginBottom: 10,
    },
    BtnTxt:{
        textAlign: 'center',
         marginTop: 13,
         color: 'white',
         fontSize: 15,
         fontWeight: 'bold'
    },
    Last:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    LastTxt:{
        fontWeight:"700",
        color:"black"
    },
    SubLastTxt:{
        color:"blue",
        fontWeight:"700",
        marginLeft:5
    }
})