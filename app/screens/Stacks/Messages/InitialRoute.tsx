import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NoInbox from '../../../components/NoInbox/NoInbox'

const Messages = () => {
  return (
    <View style={Styles.MessageContainer}>
    <NoInbox/>
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