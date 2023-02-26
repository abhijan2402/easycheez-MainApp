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
const {width,height}=Dimensions.get('window');
import ItemCard from '../components/ItemCard';
import { HomeFoodData } from '../../data/homeFoodData';
import IconInputBox from '../components/IconInputBox';

const ShowAllFoodShops=()=>{

    return(
        <View style={styles.container}>
            <ScrollView >
                <HomeAddresViewer/>
                <IconInputBox iconImage={require('../../assets/search.png')} title="Search" />
                <View style={{flexDirection: 'row',flexWrap: 'wrap',marginVertical:10}}>
                    {
                        HomeFoodData.map((item,index)=>(
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

export default ShowAllFoodShops;