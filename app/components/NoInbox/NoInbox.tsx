import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Text } from "@rneui/themed"
import { NoInboxImg } from '../../constants/ImagesConstants'
import { getHeight } from '../../utils/GetDimension'

const NoInbox = () => {
  return (
    <View style={{ flex: 1 ,display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Image   style={Styles.ImageStyle} source={{uri:NoInboxImg}} resizeMode="contain" />
      <Text style={Styles.TextStyle}>You Haven't Sent or Received Any Messages</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  ImageStyle: {
    height: getHeight / 6,
    width: "100%",

  },
  TextStyle:{
    fontSize:12,
    marginTop: 30,
    color: "#97ADB6",

  }
})

export default NoInbox
