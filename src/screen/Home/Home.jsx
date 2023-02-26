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
import image1 from '../../assets/search.png'
import ItemCard from '../components/ItemCard';
import { HomeFoodData } from '../../data/homeFoodData';
import IconInputBox from '../components/IconInputBox';

const Home=()=>{

    return(
        <ScrollView style={styles.container}>
            <HomeAddresViewer/>
            <IconInputBox iconImage={require('../../assets/search.png')} title="Search" />
            <HomeSwiper/>
            <View style={{flexDirection: 'row',justifyContent:"space-around",marginVertical:10}}>
                <ShopTypeButton title="Grocery" titleColor={"white"} buttonBackground="#61C039" buttonImage={require("../../assets/grocery-button-image.png")} />
                <ShopTypeButton title="Food" titleColor={"black"} buttonBackground="#8CEAFF" buttonImage={require("../../assets/food-button-image.png")} />
            </View>
            <View style={{flexDirection: 'row',flexWrap: 'wrap',}}>
                {
                    HomeGroceryData.map((item,index)=>(
                        index>3?
                        null:
                        <ItemCard key={index} imagePath={item.path} title={item.title} />
                    ))
                }
            </View>
            <Text style={{color:"#61C039",fontWeight:"600",textAlign:"center",margin:10}}>
                Show More
            </Text>
            <View style={{flexDirection: 'row',flexWrap: 'wrap',}}>
                {
                    HomeFoodData.map((item,index)=>(
                        index>3?
                        null:
                        <ItemCard key={index} imagePath={item.path} title={item.title} />
                    ))
                }
            </View>
            <Text style={{color:"#FFA500",fontWeight:"600",textAlign:"center",margin:10}}>
                Show More
            </Text>
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

export default Home;