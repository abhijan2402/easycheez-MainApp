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
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Payment() {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Payment</Text>
      </View>
      <View>
        <Text style={styles.AddText}>Address</Text>
        <View style={styles.AddValView}>
          <Text style={styles.AddTextVal}>Flat no P,Jaipur 302039</Text>
          <TouchableOpacity style={styles.AddChangeBtn}>
            <Text style={styles.AddChangeBtnText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.AddText}>Payment Option</Text>
        <View style={styles.PayLogoView}>
          <Image
            source={{
              uri: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png',
            }}
            style={styles.LogoPay}
          />
          <Text style={styles.PayLogoText}>PhonePay</Text>
        </View>
        <View style={styles.PayLogoView}>
          <Image
            source={{
              uri: 'https://www.citypng.com/public/uploads/preview/paytm-circle-logo-hd-png-11664329993zq3dvoml08.png',
            }}
            style={{width: 40, height: 40}}
          />
          <Text style={styles.PayLogoText}>Paytm</Text>
        </View>
      </View>
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
  AddText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  AddValView: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  AddChangeBtn: {
    width: windoWidth / 3,
    borderWidth: 1,
    borderColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFA500',
  },
  AddChangeBtnText: {
    color: 'white',
    marginVertical: 5,
  },
  AddTextVal: {
    width: windoWidth / 1.8,
  },
  LogoPay: {
    width: 30,
    height: 30,
  },
  PayLogoView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 7,
  },
  PayLogoText: {
    fontSize: 15,
    color: 'black',
    marginHorizontal: 15,
    fontWeight: '700',
  },
});
export default Payment;
