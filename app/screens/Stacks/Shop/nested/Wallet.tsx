import { View, StyleSheet } from 'react-native'
import React from 'react'
import {Text} from "@rneui/themed"
const Wallet = () => {
  return (
    <View style={Styles.container}>
      <Text h3>Wallet</Text>
    </View>
  )
}
const Styles= StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignContent:'center'
}
})
export default Wallet