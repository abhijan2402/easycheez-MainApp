import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

const {width,height}=Dimensions.get('window');


const HomeAddresViewer=()=>{

    return(
        <View style={styles.locationDelivery}>
            <Image 
                style={{width:30,height:30,resizeMode:"contain",marginRight:10}}
                source={require('../../assets/location_marker.png')}
            />
            <View style={{alignItems:"flex-start"}}>
                <View style={{flexDirection:"row",justifyContent: 'center',alignItems: 'center',}}>
                    <Text style={{color:"#808080",fontWeight:"900",}}>DELIVER TO</Text>
                    <Image 
                        style={{width:15,height:15,resizeMode:"contain",marginHorizontal:5}}
                        source={require('../../assets/down_arrow.png')}
                    />
                </View>
                <Text style={{color:"black",fontWeight:"500",}}>
                    Rammurthy Nagar,Banglore
                </Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    locationDelivery:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        width:width,
        justifyContent:"flex-start",
        padding:15,
    }
})

export default HomeAddresViewer;