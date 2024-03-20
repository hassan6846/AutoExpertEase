import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'

import { Text, Button } from "@rneui/themed"
import { } from "@gorhom/bottom-sheet"
import { getHeight } from '../../../utils/GetDimension'
import ThemeProviderColors from '../../../provider/ThemeProvider'

const ExpertPayments = () => {
  return (
    <View style={Style.container}>
      <Text style={{ fontSize: getHeight / 40, fontWeight: "bold" }}>Current Balance</Text>
      <Text style={{ fontSize: getHeight / 12, fontWeight: "bold" }}>500</Text>
      <Button title="Top-up-Account" color={ThemeProviderColors.Light.Primary} containerStyle={{ width: "60%", borderRadius: 8 }} />
      <Pressable style={{ marginTop: 20 }}><Text style={{ fontSize: getHeight / 60, fontWeight: "bold" }}>Withdraw Cash</Text></Pressable>
    </View>
  )
}
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default ExpertPayments