import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
const {width,height}=Dimensions.get('window');

const ShopDetailHeader=()=>{

    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/ItemCardImages/food_1.png')}
                style={{width:width-40,height:200,resizeMode:"stretch",borderRadius:10}}
            />
            <View style={styles.headerImage}>
                <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>
                    Stocked Grocer
                </Text>
                <View>
                    <Text style={{color:"black",fontWeight:"700",}}>
                        Shipping : 20/-Rs
                    </Text>
                    <Text style={{color:"black",fontWeight:"700",}}>
                        DeliveryTime : 1 hour
                    </Text>
                </View>
            </View>
        </View>    
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        alignItems:"center",
        marginTop:20
    },
    headerImage:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:width-40,
        margin: 10,
    }
})

export default ShopDetailHeader;