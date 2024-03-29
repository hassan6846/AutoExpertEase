import { View,ScrollView } from 'react-native'
import React from 'react'
//library
import {Text} from "@rneui/themed"
import {} from "@gorhom/bottom-sheet"
//sdks
import {Video} from "expo-av"
const ViewVideos = () => {
  return (
    <View>
     <Video 
     
     useNativeControls={true}
    shouldPlay={true}
     style={{height:300,width:"100%"}}
     source={{uri:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}}/>
    </View>
  )
}

export default ViewVideos