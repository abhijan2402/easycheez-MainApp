import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function ProductDesc() {
    return (
        <ScrollView style={styles.MainView}>
            <View >
                <Image source={{ uri: "https://www.jiomart.com/images/product/original/490000041/aashirvaad-whole-wheat-atta-10-kg-product-images-o490000041-p490000041-0-202207051337.jpg" }} style={styles.Image} />
            </View>
            <View style={styles.TextView}>
                <Text style={styles.NumberView}>Stocked Grocer</Text>
                <Text style={styles.OTPView}>Aashirvaad Atta -Whole Wheat -10kg Pouch</Text>
            </View>

            <TouchableOpacity style={styles.SendOTPView}>
                <Text style={styles.SendOTPText}>Add to Cart</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainView: {
        backgroundColor: "white",
        height: windoHeight,
        width: windoWidth
    },
    Image: {
        width: windoWidth,
        height: windoHeight / 1.9,
        marginTop: 70
    },
    TextView: {
        justifyContent: "center",
        alignItems: "flex-start",
        paddingVertical: 20,
        marginHorizontal: 30
    },
    NumberView: {
        fontSize: 20,
        color: "black",
        fontWeight: "800"
    },
    OTPView: {
        fontSize: 17,
        marginVertical: 10,
        color: "black"
        // textAlign: "center"
    },
    SendOTPView: {
        marginHorizontal: 25,
        backgroundColor: "#FFA500",
        paddingVertical: 10,
        borderRadius: 9,
        alignItems: "center",
        marginVertical: 15
    },
    SendOTPText: {
        color: "white",
        fontSize: 17,
        fontWeight: "700"
    }

})
export default ProductDesc