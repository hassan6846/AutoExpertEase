import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Text } from "@rneui/themed"
import { NoMessages } from '../../constants/ImagesConstants'
import { getHeight } from '../../utils/GetDimension'

const NoPromotions = () => {
  return (
    <View style={{ flex: 1 ,display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Image   style={Styles.ImageStyle} source={{uri:NoMessages}} resizeMode="contain" />
      <Text style={Styles.TextStyle}>Oops's Stay Tuned for Future Updates.</Text>
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

export default NoPromotions
