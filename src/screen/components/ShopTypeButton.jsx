import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
const {width,height}=Dimensions.get('window');

const ShopTypeButton=({title,titleColor,buttonBackground,buttonImage})=>{

    return(
        <TouchableOpacity style={[styles.container,{backgroundColor:buttonBackground}]}>
            <Image
                style={{width:20,height:20,resizeMode:"contain"}}
                source={buttonImage}
            />
            <Text style={{fontWeight:"bold",color:titleColor}}>{title}</Text>
        </TouchableOpacity>
    )
}   
const styles=StyleSheet.create({
    container:{
        width:width/3,
        padding:10,
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})

export default ShopTypeButton;