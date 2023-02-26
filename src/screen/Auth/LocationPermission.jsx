import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Pressable,
    Image
} from 'react-native';

const {width,height}=Dimensions.get('window');


const LocaionPermission=()=>{

    return(
        <View style={styles.container}>
            <Image
                source={require("../../assets/location.png")}
                style={{width:width-40,height:width,resizeMode:"contain"}}
            />
            <Text style={[styles.fontBasiStyle,{fontWeight:"bold",fontSize:25}]}>
                Allow your location
            </Text>
            <Text style={[styles.fontBasiStyle,{fontWeight:"500",fontSize:15,margin:20,width:width/1.5,textAlign:"center"}]}>
                We will need your location to give you better experience.
            </Text>
            <TouchableOpacity style={styles.buttonBody}>
                <Text style={{fontWeight:"bold",color:"white",fontSize:15}}>Allow</Text>
            </TouchableOpacity>
            <Pressable>
                <Text style={styles.notNowText}>
                    Not Now
                </Text>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:"white"
    },
    fontBasiStyle:{
        color:"black",
    },
    buttonBody:{
        backgroundColor:"#FFA500",
        width:width-50,
        padding:14,
        borderRadius:10,
        alignItems:"center",
        justifyContent: 'center',
        margin:15
    },
    notNowText:{
        fontWeight:"600",
        color:"#2C75B8",
        borderBottomWidth:2,
        borderBottomColor:"#2C75B8",
        textAlign:"center"
    }
})

export default LocaionPermission;