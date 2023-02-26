import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper'
import { SwiperData } from '../../data/SwiperData';

const {width,height}=Dimensions.get('window');


const HomeSwiper=()=>{

    return(
        <Swiper  
            containerStyle={styles.mainSwiperView} 
            showsButtons={false}
            loop={false}
            activeDotStyle={{width:15,height:8,marginBottom:-15}}
            dotStyle={{marginBottom:-15}}
            activeDotColor={"white"}
            dotColor={"white"}
        >
            {
                SwiperData.map((item)=>(
                    <View key={item.id} style={[styles.cardStyles,{backgroundColor:item.backGround}]}>
                        <Image 
                            style={{width:item.title?'70%':'100%',height:'100%',resizeMode:"contain",marginRight:10,alignSelf:"flex-start"}}
                            source={item.path}
                        />
                        {item.title?<Text style={styles.cardText}>{item.title}</Text>:null}
                    </View>
                ))
            }
        </Swiper>
    )
}
const styles=StyleSheet.create({
    mainSwiperView: {
        height:height/4,
        margin: 10,
        backgroundColor:"white",
    },
    cardStyles: {
        flex:1,     
        alignItems: 'center',
        flexDirection:"row",
        borderRadius:10,
        marginHorizontal:5
    },
    cardText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      width:100,
      position:"absolute",
      right:20
    }
})

export default HomeSwiper;