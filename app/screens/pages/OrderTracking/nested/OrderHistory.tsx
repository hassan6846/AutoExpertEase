// Only Delived and Canceled orders will be shown here...

import { View, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
//library
import { Text, Icon, Avatar } from "@rneui/themed"

import { avatarSizes } from '@rneui/base/dist/Avatar/Avatar'
import { AvatarSrc } from '../../../../constants/ImagesConstants'
import ThemeProviderColors from '../../../../provider/ThemeProvider'
const OrderHistory = () => {
  return (
    <ScrollView style={Styles.History}>
      {/* Card for orders */}
      <View style={Styles.HistoryCard}>
        <View style={Styles.OrderTxtDetails}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: ThemeProviderColors.Light.FontSubHeading }}>Order Id :#3801231</Text>
          <Text style={{ fontSize: 12, color: ThemeProviderColors.Light.FontSubHeading }}>11-Apr-2024 7:59</Text>
          <Text style={{ color: "green", fontSize: 12 }}>Completed <Icon type='material' name='done' size={10} color="green" /></Text>
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
          <Text style={{ backgroundColor: ThemeProviderColors.Light.Primary, color: "#fff", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6, fontSize: 12 }}>Reorder Items</Text>
        </View>
      </View>
      {/* Ends */}
      {/* Ends */}
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  History: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#f9f9f9"
  },
  OrderTxtDetails: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between"

  },
  HistoryCard: {
    marginTop: 10,
    borderRadius:5,
    padding: 10,
    backgroundColor: "#fff"
  }
})
export default OrderHistory