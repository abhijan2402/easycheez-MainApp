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

const ShopDetailsCard=({item,discount,discountValue,buttonText})=>{

    return(
        <View style={styles.container}>
            {
                discount &&
                <View style={styles.discount_card}>
                    <Text style={{fontWeight:"bold",color:"white"}}>{discountValue}% off</Text>
                </View>
            }
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
                       {buttonText}
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
        borderWidth:1,
        borderColor:"#E8D6BD"
    },
    itemdetailStyle:{
        flexDirection:"row",
        width:"100%",
        height:40,
        borderTopWidth:1.5,
        borderColor:"#E8D6BD",
        alignItems:"center",
        justifyContent:"space-between"
    },
    discount_card:{
        backgroundColor:"#61C039",
        position:"absolute",
        zIndex:5000,
        borderTopLeftRadius:8,
        height:30,
        width:70,
        alignItems:"center",
        justifyContent: 'center',
        left:0,
        top:0
      }
})

export default ShopDetailsCard;