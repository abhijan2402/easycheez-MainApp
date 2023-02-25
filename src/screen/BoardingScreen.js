import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function BoardingScreen() {
    return (
        <ScrollView style={styles.MainView}>
            <View >
                <Image source={{ uri: "hpt0uDrWGhMHN6Zhe7MA0GnjOFIyUFrfxBzpYvuKugfCBHABzrCMDo1HL8M2s9p0vYjLD6HvA9HOhC8ZQUlk6fndqCbMgItO0JwRXszx6OyjDmxXlm7DKFy5VDY16OWwlyYxMbg5s1ej0JPPtcBPh8Z9nh5nNqUkCzMkBFjI5ra9Zyc1~jOB89OGETuOE4kryT4pCrVT-WEtg~mcs0MoYGkDk2yGz84tlQVev9x2ND7flGP9Garl-43fEDV9jmpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" }} style={styles.Image} />
            </View>
            <View style={styles.BgView}>
                <View>
                    <Text style={styles.Easy}>EAZY</Text>
                    <Text style={styles.Cheez}>CHEEZ</Text>
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
        marginTop: 100
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