import { View, Text,StyleSheet,ScrollView, } from 'react-native'
import React from 'react'

//Avatar
import {Avatar,Icon, LinearProgress} from  "@rneui/themed"
import ThemeProviderColors from '../../../../../../provider/ThemeProvider'
import { AvatarSrc } from '../../../../../../constants/ImagesConstants'

const OrdersDetail = () => {
  return (
    <ScrollView style={Styles.OrderDetailWrapper}>
   <View style={Styles.HistoryCard}>
        <View style={Styles.OrderTxtDetails}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: ThemeProviderColors.Light.FontSubHeading }}>Order Id :#3801231</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: ThemeProviderColors.Light.FontSubHeading }}>Expected Delivery 5may-6may</Text>
          <Text style={{ color: "green", fontSize: 12 }}>pending <Icon type='material' name='done' size={10} color="green" /></Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', columnGap: 5 }}>
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
          <Avatar size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />

        </ScrollView>
        {/* Ends */}
        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10, }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Rs 489.00</Text>
          <Text style={{ color: "green", fontSize: 12 }}>Payment Method Cash on Delivery <Icon type='material' name='payments' size={10} color="green" /></Text>
        </View>
   
      </View>
    </ScrollView>
  )
}
const Styles=StyleSheet.create({
  OrderDetailWrapper:{
    flex:1,

  },
  HistoryCard:{
    marginTop: 10,
    borderRadius:5,
    padding: 10,
    backgroundColor: "#fff"
  },
  OrderTxtDetails:{
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between"
  }
})
export default OrdersDetail