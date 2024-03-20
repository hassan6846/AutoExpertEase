import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import {useFocusEffect} from "@react-navigation/native"
import showAlert from '../../../utils/ShowAlert'

const ExpertHailingPage = () => {
  useFocusEffect(
    React.useCallback(() => {
  
    }, [])
  );
  return (
    <View style={style.container}>
    
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  }
})
export default ExpertHailingPage