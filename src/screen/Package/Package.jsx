import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ShopDetailsCard from '../components/ShopDetailCard';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Package() {
  const [item,setItem]=useState([
    {
      id:1,
      name:"Mammoth Combo(Veggie Pizza + Potato...",
      quantity:"",
      price:200,
      image:{uri: 'https://www.online2all.com/wp-content/uploads/2021/03/maligai-22-e1614843055841.jpg',}
    },
    {
      id:1,
      name:"Mammoth Combo(Veggie Pizza + Potato...",
      quantity:"",
      price:200,
      image:{uri: 'https://www.online2all.com/wp-content/uploads/2021/03/maligai-22-e1614843055841.jpg',}
    },
  ])
  return (
    <ScrollView style={{backgroundColor: 'white',}}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Packages</Text>
      </View>
      <View style={{flex:1,flexDirection: 'row',}}>
        <ShopDetailsCard item={item[0]} discount={true} discountValue={20} buttonText={"Add to cart"} />
        <ShopDetailsCard item={item[1]} discount={true} discountValue={20} buttonText={"Add to cart"} />
      </View>
      {/* <View style={styles.MainView}>
        <View style={styles.PackProView}>
          <Image
            source={{
              uri: 'https://www.online2all.com/wp-content/uploads/2021/03/maligai-22-e1614843055841.jpg',
            }}
            style={styles.ProImage}
          />
          <View style={styles.ProdPrice}>
            <Text style={styles.OfferPrice}>OfferPrice - 200</Text>
            <TouchableOpacity style={styles.AddTCButtom}>
              <Text style={styles.ATCText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.PackProView}>
          <Image
            source={{
              uri: 'http://cdn.shopify.com/s/files/1/0558/7415/8770/products/1.jpg?v=1652677479',
            }}
            style={styles.ProImage}
          />
          <View style={styles.ProdPrice}>
            <Text style={styles.OfferPrice}>OfferPrice - 200</Text>
            <TouchableOpacity style={styles.AddTCButtom}>
              <Text style={styles.ATCText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: windoWidth,
    height: windoHeight / 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 23,
    color: 'black',
    fontWeight: '700',
  },
  ProImage: {
    width: windoWidth / 2.5,
    height: 150,
    borderRadius: 9,
    alignSelf: 'center',
    marginVertical: 10,
  },
  PackProView: {
    borderWidth: 1,
    borderRadius: 9,
    width: windoWidth / 2.3,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  ProdPrice: {
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  AddTCButtom: {
    backgroundColor: '#FFA500',
    marginHorizontal: 10,
    marginVertical: 15,
    width: windoWidth / 3,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 8,
  },
  ATCText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
  },
  OfferPrice: {
    fontSize: 15,
    color: 'black',
    fontWeight: '700',
    marginTop: 5,
  },
});
export default Package;
