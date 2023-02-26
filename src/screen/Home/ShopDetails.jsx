import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TextInput,
    Image,
    Pressable,
    TouchableOpacity
} from 'react-native';
import { shopItem } from '../../data/ShopItemDeails';
import IconInputBox from '../components/IconInputBox';
import ShopDetailsCard from '../components/ShopDetailCard';
import ShopDetailHeader from '../components/ShopDetailHeader';
const {width,height}=Dimensions.get('window');

const ShopDetails=()=>{

    return(
        <ScrollView style={styles.container}>
            <ShopDetailHeader/>
            <IconInputBox iconImage={require('../../assets/search.png')} title="Search" />
            <Text style={{color:"black",fontWeight:"700",paddingHorizontal:20,paddingVertical:10}}>
                Minimum order value:150/-RS
            </Text>  
            <View style={{flexDirection: 'row',flexWrap: 'wrap',}}>
                {
                    shopItem.map((item,index)=>(
                        <ShopDetailsCard key={index} item={item} />
                    ))
                }
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    customInput: {
        width: width - 30,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1.5,
        borderColor: "#808080",
        fontWeight: "bold",
        color: "black",
        alignSelf:"center"
    },
})

export default ShopDetails;