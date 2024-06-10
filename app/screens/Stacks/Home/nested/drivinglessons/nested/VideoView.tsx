import { View } from 'react-native'
import React from 'react'
//Library
import VideoPlayer from "expo-video-player"
import { ResizeMode } from 'expo-av'
//Utils

const VideoView = () => {
  return (
    <View>
     <VideoPlayer
    
     style={{
      height:200
     }}
    fullscreen={{
      
      inFullscreen:true
    }}
    defaultControlsVisible={true}
  videoProps={{
  
    shouldPlay: true,
    resizeMode: ResizeMode.CONTAIN,
    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }}
/>
    </View>
  )
}

export default VideoView