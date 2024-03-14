import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={Styles.NotifyContainer}>
      <Text>Notifications</Text>
    </View>
  )
}
//styles
const Styles = StyleSheet.create({
  NotifyContainer: {
    flex: 1,
   backgroundColor: "#fff"
  }
})
  
export default Notifications