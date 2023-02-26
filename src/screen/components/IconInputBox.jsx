import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    TextInput
} from 'react-native';
const {width,height}=Dimensions.get('window');

const IconInputBox=({title,iconImage})=>{

    return(
        <View style={[
                { flexDirection: 'row', alignItems: "center" },
                styles.customInput
            ]}
            >
                <Image 
                    style={{width:25,height:25,resizeMode:"contain",marginHorizontal:5}}
                    source={iconImage}
                />
                <TextInput  
                    style={{ fontWeight: "bold", fontSize: 15, color: "black", paddingLeft: 5, }}
                    placeholder={title}
                    placeholderTextColor={"grey"}
                    autoCapitalize={true}
                />
            </View>  
    )
}
const styles=StyleSheet.create({
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

export default IconInputBox;