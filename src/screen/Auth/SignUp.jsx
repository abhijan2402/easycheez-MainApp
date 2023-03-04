import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions,ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react'
import { createNewUser } from '../../services/auth/createNewUser';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;


const SignUp = ({navigation}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    
    return (
        <ScrollView style={styles.Background}>
            <Text style={styles.SubHead}>Sign Up</Text>
            <Image 
                source={require('../../assets/Auth/SignUp.jpg')} 
                style={styles.image}
            />
            <View style={styles.inputView}>
                <TextInput 
                    onChangeText={email=>setEmail(email)} 
                    style={styles.Box}  
                    placeholderTextColor={"black"} 
                    placeholder={'Email'}
                />
                <TextInput 
                    onChangeText={password=>setPassword(password)} 
                    style={styles.Box} 
                    placeholderTextColor={"black"} 
                    placeholder={'Password'}
                />
                <TextInput 
                    onChangeText={confirmPass=>setConfirmPass(confirmPass)} 
                    style={styles.Box} 
                    placeholderTextColor={"black"} 
                    placeholder={'Confirm Password'}
                />
                <TouchableOpacity 
                    style={styles.Btn} 
                    onPress={async()=>{
                        const res=await createNewUser(email,password,confirmPass);
                        if(res)
                            console.log(res)
                    }}
                >
                    <Text style={styles.BtnTxt}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.Last}>
                    <Text style={styles.LastTxt}>Already Have an Account ?</Text>
                    <Text style={styles.LastSubTxt} onPress={()=>{navigation.navigate('SignIn')}}>Log In</Text> 
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    Background:{
        backgroundColor:"white"
    },
    Head:{
        alignSelf:"center",marginTop:20
    },
    SubHead:{
        color:"black",
        fontSize:30,
        fontWeight:'900',
        textAlign:"center",
        padding:10
    },
    image:{
        height: windoHeight/2,
        width: windoWidth,
    },
    Box:{
        height: 45,
        width: windoWidth-60,
        borderRadius:10,
        borderColor:"#808080",
        borderWidth:1,
        marginVertical: 5,
        color:"black",
        fontWeight:"bold",
        paddingLeft:10
    },
    Btn:{
        height: 45,
        width: windoWidth-60,
        backgroundColor: '#FFA500',
        borderRadius: 10,
        marginBottom: 10,
        marginTop:10
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
    LastSubTxt:{
        color:"blue",
        fontWeight:"700",
        marginLeft:5
    },
    inputView:{
        alignItems:"center",
    }
})