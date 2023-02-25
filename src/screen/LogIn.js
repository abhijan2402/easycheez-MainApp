import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Login() {
    return (
        <ScrollView style={styles.MainView}>
            <View >
                <Image source={{ uri: "https://media.istockphoto.com/id/1225779547/vector/people-keeping-healthy-diet.jpg?s=612x612&w=0&k=20&c=HDnAlcR98KRV1T4Z4D5-gNvbwRAaT9zzR--JSYgzzfI=" }} style={styles.Image} />
            </View>
            <View style={styles.TextView}>
                <Text style={styles.NumberView}>Enter your WhatsApp Number</Text>
                <Text style={styles.OTPView}>You will receive an OTP verification to validate your number</Text>
            </View>
            <View style={styles.TextFieldView}>
                <TextInput style={styles.TextFieldText} placeholder='Enter your First Name' />
                <TextInput style={styles.TextFieldText} placeholder='+91' />
            </View>
            <TouchableOpacity style={styles.SendOTPView}>
                <Text style={styles.SendOTPText}>Send OTP</Text>
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
        fontSize: 14,
        marginVertical: 10,
        textAlign: "center"
    },
    TextFieldText: {
        borderWidth: 1,
        borderRadius: 9,
        marginHorizontal: 25,
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
    }

})
export default Login