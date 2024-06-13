import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useFocusEffect, useNavigation } from "@react-navigation/native"


const ExpertHailingPage = ({ navigation }: { navigation: any }) => {
  const navigator = useNavigation()

  return (
    <View style={style.container}>

    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})
export default ExpertHailingPage