import { View, StyleSheet, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { Camera, CameraType } from "expo-camera"
import { getHeight, getWidth } from '../../../utils/GetDimension'
import ThemeProviderColors from '../../../provider/ThemeProvider'
import { Icon,Text } from '@rneui/themed'

const ScanCnic = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [cnicImage,SetcnicImage]=useState("")
  const cameraRef=useRef(null)
//capture
const handleCapture=async()=>{
alert("hello")
}
  return (
    <View style={Style.CnicContainer}> 
      <Camera 
      ref={cameraRef}
      needsOffscreenAlphaCompositing
        focusDepth={1}
        focusable={true}
        autoFocus={true}
        type={CameraType.back} //always use back camera
        style={Style.CameraContainer}
      >
     
       
        {/* Frame Overlay */}
        <View>
        <View style={Style.frameOverlay}>
     

        </View>
       
        </View>

        <Pressable onPress={()=>handleCapture()} style={Style.CaptureBtn}>
      <Icon name='qr-code' color="#fff" type='materail'/>
        </Pressable>
      </Camera>
    </View>
  )
}

const Style = StyleSheet.create({
  CnicContainer: {
    flex: 1,

  },
  CameraContainer:{
    flex: 1 ,
    justifyContent:"space-around",
    alignItems: "center",
  },
  CaptureBtn:{
    backgroundColor:ThemeProviderColors.Light.Primary,
    height:60,
    width:60,
    justifyContent:"center",
    borderRadius:30,
   
  },
  frameOverlay: {
width:getWidth,
height:getHeight/3.4,
    borderWidth: 2,
    borderColor: 'white',

    borderRadius: 10,
 
    zIndex: 1, // Ensure the frame is above the camera view
    opacity: 0.5, // Adjust transparency as needed
  },
  heading:{
    marginTop:30,
    paddingHorizontal:20,
    color:"#fff",
textAlign:"center"
  }
})

export default ScanCnic
