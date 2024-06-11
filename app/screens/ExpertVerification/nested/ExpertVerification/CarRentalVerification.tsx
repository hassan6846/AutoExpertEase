import { View, StyleSheet } from 'react-native'
import React from 'react'

//Library
import {Text} from "@rneui/themed"

//compoenents
import CustomButton from '../../../../components/ButtonProps/ButtonProps'
import InputComponent from '../../../../components/InputComponent/InputComponent'
const CarRentalVerification = () => {
  return (
    <View>
      <Text>CarRentalVerification</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
  }
})
export default CarRentalVerification