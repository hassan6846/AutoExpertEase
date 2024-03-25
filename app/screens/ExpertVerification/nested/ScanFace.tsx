import { View, StyleSheet } from 'react-native'
import React from 'react'


//libraries

import MaskedView from "@react-native-masked-view/masked-view"
import { FaceDetectionResult, Camera, CameraType } from "expo-camera"
import { Text } from "@rneui/themed"

const ScanFace = () => {
    return (
        <View style={Styles.Container}>

        </View>
    )
}
////styles
const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },
    masked: {
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
        borderWidth: 1,
        borderColor: "#e5e5e5",
        position: "absolute",
        top: 0,
        left: 0,
    }
})

export default ScanFace