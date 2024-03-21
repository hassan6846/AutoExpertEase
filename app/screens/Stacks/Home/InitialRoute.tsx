import { ScrollView,StyleSheet } from 'react-native'
import React from 'react'

//utils libraries
import {Skeleton} from "@rneui/themed"
import {Video} from "expo-av"
import { Text } from '@rneui/base'
const Home = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
<Video     style={{height:300,borderWidth:1,borderColor:"black"}} source={{uri:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}/>
  <Text>Wtf</Text>
    </ScrollView>
  )
}
const Style=StyleSheet.create({

})
export default Home