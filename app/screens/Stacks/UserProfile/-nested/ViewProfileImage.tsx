import React from 'react';
import { View, StyleSheet, Dimensions,ScrollView } from 'react-native';
import { Image } from "expo-image"; 
import { AvatarSrc } from '../../../../constants/ImagesConstants';


const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get("window").height
export default function ViewProfileImage() {
    return (
        <ScrollView
        pinchGestureEnabled={true}
         contentContainerStyle={Styles.ImageContainer}>

            <Image
                contentFit="cover"
                allowDownscaling={true}
                focusable={true}
                style={Styles.ViewImage}
                source={{ uri: AvatarSrc }}
                transition={1000}
                />
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    ImageContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewImage: {
        width: getWidth,
        height: getHeight / 2,
    },
});
