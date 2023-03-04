import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function BoardingScreen() {
    return (
        <ScrollView style={styles.MainView}>
            <View >
                <Image source={require('../../assets/Boarding.png')}
                    resizeMode="cover"
                    style={styles.Image} />
            </View>
            <View style={styles.BgView}>
                <View>
                    {/* <Text style={styles.Easy}>EAZY</Text>
                    <Text style={styles.Cheez}>CHEEZ</Text> */}
                    <Image source={require('../../assets/EasyCheez.png')}
                        resizeMode="cover"
                        style={styles.Image1} />
                    {/* <Image source={{uri:""}}/> */}
                </View>
                <Text style={styles.BelowText}>order from nearby store</Text>
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
        height: windoHeight / 2.5,
        marginTop: 100,
    },
    Image1: {
        width: windoWidth / 1.7,
        height: windoHeight / 7,
        // marginTop: 100,
    },
    BelowText: {
        fontSize: 19,
        color: "black",
        marginVertical: 20
    },
    BgView: {
        height: windoHeight / 2.1,
        backgroundColor: "#FFA500",
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    Easy: {
        fontSize: 45,
        color: "white",
        fontWeight: "800"
    },
    Cheez: {
        fontSize: 45,
        color: "white",
        fontWeight: "800"
    }
})
export default BoardingScreen