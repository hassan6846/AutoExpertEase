import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Messages = () => {
  return (
    <View style={Styles.MessageContainer}>
      <Text>Messages</Text>
    </View>
  )
}
//stylesheet
const Styles = StyleSheet.create({
  MessageContainer: {
    flex: 1,
   backgroundColor: "#fff"
  }
})
  
export default Messages