import { View } from 'react-native'
import React from 'react'
//Library
import VideoPlayer from "expo-video-player"
import { ResizeMode } from 'expo-av'
import {Text,Avatar,ListItem} from "@rneui/themed"
//components
import VideoCard from '../../../../../../components/VideoCard/VideoCard'
import ThemeProviderColors from '../../../../../../provider/ThemeProvider'
import { AvatarSrc } from '../../../../../../constants/ImagesConstants'

const VideoView = ({ navigation }: { navigation: any }) => {
  return (
    <View>
     <VideoPlayer
    timeVisible={true}
    
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
    source: {
      uri: 'https://www.youtube.com/watch?v=-wtIMTCHWuI',
    },
  }}
/>
{/* Video Details */}
<ListItem>
   <View style={{alignItems:"center"}}>
   <Avatar size={50} avatarStyle={{borderRadius:30}} source={{uri:AvatarSrc}}/>
   <Text style={{fontSize:11,marginTop:5}}>Pak Wheels</Text>
   </View>
  <ListItem.Content>
    <ListItem.Title style={{fontSize:16}}>How To Drive A Manual Transmission + Rev Match + Heel Toe Downshift (POV Tutorial)
    </ListItem.Title>
    <ListItem.Subtitle style={{fontSize:12,marginTop:10,color:ThemeProviderColors.Light.FontSubHeading}}>2 Weeks &bull; 0 Views</ListItem.Subtitle>
 
  </ListItem.Content>
  <ListItem.Chevron/>
</ListItem>
{/* Category Bar */}
<Text style={{fontSize:15,fontWeight:"bold",color:ThemeProviderColors.Light.FontHeading,backgroundColor:"#fff",paddingHorizontal:10}}>View More</Text>
<VideoCard navigation={navigation.navigate("viewvideo")}/>
<VideoCard navigation={navigation.navigate("viewvideo")}/>
<VideoCard navigation={navigation.navigate("viewvideo")}/>
<VideoCard navigation={navigation.navigate("viewvideo")}/>

    </View>
  )
}

export default VideoView