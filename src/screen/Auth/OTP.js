import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function OTP() {
    return (
        <ScrollView style={styles.MainView}>
            <View >
                <Image source={{ uri: "https://i.pinimg.com/564x/d6/bd/b1/d6bdb1214bdd24d1644b9265ec928c21.jpg" }} style={styles.Image} />
            </View>
            <View style={styles.TextView}>
                <Text style={styles.NumberView}>Verify Your Number</Text>
            </View>
            <View style={styles.TextFieldView}>
                <TextInput style={styles.TextFieldText} placeholder='' />
                <TextInput style={styles.TextFieldText} placeholder='' />
                <TextInput style={styles.TextFieldText} placeholder='' />
                <TextInput style={styles.TextFieldText} placeholder='' />
            </View>
            <TouchableOpacity style={styles.SendOTPView}>
                <Text style={styles.SendOTPText}>Send OTP</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.OTPView}>Resend OTP</Text>

            </View>
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
        height: windoHeight / 3,
        marginTop: 100
    },
    TextView: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    NumberView: {
        fontSize: 19,
        color: "black",
        fontWeight: "600"
    },
    OTPView: {
        fontSize: 15,
        marginVertical: 10,
        textAlign: "center",
        color: "black",
        fontWeight: "700"
    },
    TextFieldText: {
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 18,
        marginVertical: 10,
        paddingHorizontal: 10
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
    },
    TextFieldView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20
    }
})
export default OTP