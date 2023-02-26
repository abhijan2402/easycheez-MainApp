import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { shopItem } from '../../data/ShopItemDeails';
const {width,height}=Dimensions.get('window');

const ShopDetailsCard=({item})=>{

    return(
        <View style={styles.container}>
            <Image
                source={item.image}
                style={{width:'100%',height:100,resizeMode:"stretch",borderRadius:10}}
            />
            <Text style={{color:"black",fontWeight:"bold",marginTop:10,fontSize:10,textAlign:"left",width:'100%',paddingHorizontal:10}}>
                {item.name}
            </Text>
            <Text style={{color:"black",fontWeight:"600",textAlign:"left",width:'100%',fontSize:10,paddingHorizontal:10}}>
                {item.quantity}
            </Text>
            <View style={styles.itemdetailStyle}>
                <View style={{height:40,width:"45%",alignItems:"center",justifyContent: 'center',}}>
                    <Text style={{color:"black",fontWeight:"bold",fontSize:8}}>
                        MRP Rs {item.price}
                    </Text>
                </View>
                <View style={{height:40,borderWidth:1,borderColor:"#E8D6BD",}}/>
                <TouchableOpacity style={{height:40,width:"45%",alignItems:"center",justifyContent: 'center',}}>
                    <Text style={{color:"#2C75B8",fontWeight:"bold",fontSize:10,}}>
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:width/2.3,
        margin:10,
        borderRadius:10,
        alignItems: 'center',
        elevation:5,
        justifyContent:"space-evenly",
    },
    itemdetailStyle:{
        flexDirection:"row",
        width:"100%",
        height:40,
        borderWidth:1.5,
        borderColor:"#E8D6BD",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-between"
    }
})

export default ShopDetailsCard;