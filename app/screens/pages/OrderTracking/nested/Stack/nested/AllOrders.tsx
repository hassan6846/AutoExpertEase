import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Icon } from '@rneui/themed'
import ThemeProviderColors from '../../../../../../provider/ThemeProvider'
import { AvatarSrc } from '../../../../../../constants/ImagesConstants'

const AllOrders = ({navigation}:{navigation:any}) => {
  return (
    <ScrollView style={Styles.OrderWrapper}>
      {/* Card for orders */}
      <View style={Styles.HistoryCard}>
        <View style={Styles.OrderTxtDetails}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: ThemeProviderColors.Light.FontSubHeading }}>Order Id :#3801231</Text>
          <Text style={{ fontSize: 12, color: ThemeProviderColors.Light.FontSubHeading }}>11-Apr-2024 7:59</Text>
          <Text style={{ color: "green", fontSize: 12 }}>Processing <Icon type='material' name='schedule' size={10} color="green" /></Text>
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
          <Text onPress={()=>navigation.navigate('OrderDetail')} style={{ backgroundColor: ThemeProviderColors.Light.Primary, color: "#fff", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6, fontSize: 12 }}>View Details</Text>
        </View>
      </View>
      {/* Ends */}
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  OrderWrapper: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    padding:10,
  }, HistoryCard: {
    marginTop: 10,
    padding: 10,
    borderRadius:5,
    backgroundColor: "#fff"
  }, OrderTxtDetails: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between"
  }
})
export default AllOrders