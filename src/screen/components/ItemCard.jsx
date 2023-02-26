import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
const {width,height}=Dimensions.get('window');

const ItemCard=({imagePath,title})=>{

    return(
        <View style={{backgroundColor:"white",width:width/2.3,margin:10,borderRadius:10,alignItems: 'center',elevation:5,justifyContent:"space-evenly"}}>
            <Image
                source={imagePath}
                style={{width:'100%',height:100,resizeMode:"stretch",borderRadius:10}}
            />
            <Text style={{color:"black",fontWeight:"600",marginVertical:10}}>{title}</Text>
        </View>
    )
}   
export default ItemCard;