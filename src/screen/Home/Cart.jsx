import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HomeAddresViewer from '../components/AddressHome';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Cart({navigation}) {
  return (
    <ScrollView
      style={{
        width: windoWidth,
        height: windoHeight,
        backgroundColor: 'white',
      }}>
      <HomeAddresViewer/>
      {/* <View style={styles.Header}>
        <Text style={styles.HeaderText}>Cart</Text>
      </View> */}
      <View style={{height: windoHeight / 1.2777}}>
        <View style={styles.ProView}>
          <Image
            source={{
              uri: 'https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg',
            }}
            style={styles.ProImage}
          />
          <View style={{width: windoWidth / 2.7}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginHorizontal: 6,
              }}>
              Fortune kacchi ghani Oil
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginVertical: 8,
                marginHorizontal: 6,
              }}>
              Price - 149/-
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 10,
              borderWidth:1,
              borderRadius:6,
              borderColor:"#FFA500"
            }}>
            <View
              style={[
                styles.SubView
              ]}>
              <Text style={styles.SubViewText}>-</Text>
            </View>
            <View style={[styles.SubView,{borderLeftWidth:1, borderRightWidth:1,borderColor:"#FFA500",}]}>
              <Text style={styles.SubViewText}>1</Text>
            </View>
            <View
              style={[
                styles.SubView,
                // {borderTopRightRadius: 6, borderBottomEndRadius: 6},
              ]}>
              <Text style={styles.SubViewText}>+</Text>
            </View>
          </View>
        </View>
        <View style={styles.ProView}>
          <Image
            source={{
              uri: 'https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg',
            }}
            style={styles.ProImage}
          />
          <View style={{width: windoWidth / 2.7}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginHorizontal: 6,
              }}>
              Fortune kacchi ghani Oil
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginVertical: 8,
                marginHorizontal: 6,
              }}>
              Price - 149/-
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 10,
              borderWidth:1,
              borderRadius:6,
              borderColor:"#FFA500"
            }}>
            <View
              style={[
                styles.SubView,
                // {borderTopLeftRadius: 6, borderBottomLeftRadius: 6},
              ]}>
              <Text style={styles.SubViewText}>-</Text>
            </View>
            <View style={[styles.SubView,{borderLeftWidth:1, borderRightWidth:1,borderColor:"#FFA500",}]}>
              <Text style={styles.SubViewText}>1</Text>
            </View>
            <View
              style={[
                styles.SubView,
                // {borderTopRightRadius: 6, borderBottomEndRadius: 6},
              ]}>
              <Text style={styles.SubViewText}>+</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.BtmPriceView}>
        <View style={[styles.BtnView, {paddingLeft: 10}]}>
          <Text style={styles.PriceText}>Item Price -100</Text>
          <Text style={styles.PriceText}>Shipping Price -10</Text>
          <Text style={styles.PriceText}>Total Price -110</Text>
        </View>
        <View
          style={[
            styles.BtnView,
            {alignItems: 'center', justifyContent: 'flex-end'},
          ]}>
          <TouchableOpacity style={styles.ConBtnView}>
            <Text style={styles.ConBtnViewText} onPress={()=>{navigation.navigate('Payment')}}>Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom:20}}></View>
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
    width: windoWidth / 2.8,
    height: 100,
    alignItems: 'center',
  },
  ProView: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor:"#FFA500",
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    marginTop:10
  },
  SubView: {
    // borderWidth: 1,
    // borderRadius: 5,
    width: windoWidth / 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubViewText: {
    fontSize: 18,
    color:"black"
  },
  BtmPriceView: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth:1
    // position: 'absolute',
    // bottom: 10,
  },
  BtnView: {
    width: windoWidth / 2,
    // borderWidth: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  ConBtnView: {
    borderRadius: 7,
    padding: 8,
    paddingHorizontal: 30,
    backgroundColor: '#FFA500',
  },
  ConBtnViewText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  PriceText: {
    fontSize: 15,
    color: 'black',
    marginVertical: 2,
    fontWeight: '600',
  },
});
export default Cart;
