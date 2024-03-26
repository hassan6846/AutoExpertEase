import React, { useEffect } from 'react';
import { View, StyleSheet,Pressable } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import Svg, { Path } from 'react-native-svg';
import { Icon } from '@rneui/themed'

const ScanFace = () => {
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access camera was denied');
            }
        })();
    }, []);

    return (
        <View style={styles.container}>

            <Camera
zoom={0.3}
                type={CameraType.front}
                style={{ flex: 1,justifyContent:"center",alignItems:"center" }}
            >
             

                <Svg width="60%" height="60%" viewBox="0 0 69 97">
                    <Path
                            d="M34.271 96.6987C14.6562 96.6987 0 71.4624 0 48.8975V34.8618C0 15.9639 15.374 0.588867 34.271 0.588867C53.1685 0.588867 68.5425 15.9639 68.5425 34.8618V48.8975C68.5425 71.4624 53.8862 96.6987 34.271 96.6987ZM34.271 2.58887C16.4766 2.58887 2 17.0664 2 34.8618V48.8975C2 75.1118 19.0376 94.6987 34.271 94.6987C49.5044 94.6987 66.5425 75.1118 66.5425 48.8975V34.8618C66.5425 17.0664 52.0659 2.58887 34.271 2.58887Z"
                            fill="white" // Fills the area outside the border with black
                    />
                </Svg>


   <Pressable  style={{backgroundColor:"red",paddingHorizontal:20,paddingVertical:20,borderRadius:30}}>
    <Icon size={20} name="face" type="material"/>
   </Pressable>



            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    masked: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default ScanFace;
