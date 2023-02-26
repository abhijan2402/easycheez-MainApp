import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import HomeAddresViewer from '../components/AddressHome';
import Swiper from 'react-native-swiper'
import HomeSwiper from '../components/HomeSwiper';
import ShopTypeButton from '../components/ShopTypeButton';
import { HomeGroceryData } from '../../data/homeGroceryData';
const {width,height}=Dimensions.get('window');
import ItemCard from '../components/ItemCard';
import IconInputBox from '../components/IconInputBox';

const ShowAllGrocery=()=>{

    return(
        <View style={styles.container}>
            <ScrollView >
                <HomeAddresViewer/>
                <IconInputBox iconImage={require('../../assets/search.png')} title="Search" />
                <View style={{flexDirection: 'row',flexWrap: 'wrap',marginVertical:10}}>
                    {
                        HomeGroceryData.map((item,index)=>(
                            <ItemCard key={index} imagePath={item.path} title={item.title} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
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

export default ShowAllGrocery;