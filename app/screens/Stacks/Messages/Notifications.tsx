import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import NoPromotions from '../../../components/No Promotions/NoPromotion'

const Notifications = () => {
  return (
    <View style={Styles.NotifyContainer}>
 <NoPromotions/>
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