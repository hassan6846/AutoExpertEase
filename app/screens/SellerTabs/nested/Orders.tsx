import { View, Text,ScrollView,StyleSheet} from 'react-native'
import React from 'react'
//library
import {Icon,Avatar} from "@rneui/themed"
//utils
import ThemeProviderColors from '../../../provider/ThemeProvider'
import { AvatarSrc } from '../../../constants/ImagesConstants'

const Orders = () => {
  return (
    <ScrollView style={styles.container}>
            <View style={styles.bookingCard}>
        {/* Container */}
        <View>
        <View style={styles.orderTxtDetails}>
          <Text style={styles.orderText}>Tracking Id :#3801231</Text>
          <Text style={styles.orderText}>11-Apr-2024 7:59</Text>
          <Text style={styles.orderText}>
            Paid <Icon type='material' name='payment' size={12} color="green" />
          </Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.avatarsContainer}>
          {/* Sample avatars */}
          {[...Array(10)].map((_, index) => (
            <Avatar key={index} size={60} containerStyle={styles.avatarContainer} source={{ uri: AvatarSrc }} />
          ))}
        </ScrollView>
        <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
            <Icon type="material" name="schedule" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Pickup Time: 08:00 AM</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="phone" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Buyer Contact:92333239192</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="pin-drop" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Order Date: 11-Apr-2024</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="date-range" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Estimate Date: 13-Apr-2024</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="location-on" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Pickup Location: 135-c iqbal town lahore</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="directions-car" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Car Number Plate: ABC-123</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="timelapse" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Rental Duration :2 Days.</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="attach-money" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Your Earnings: $100</Text>
          </View>

        </View>
        </View>

      </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  bookingCard:{
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff"
  },orderTxtDetails:{
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between",
  },detailText:{
    marginLeft: 5,
    fontSize: 12,
    color: ThemeProviderColors.Light.FontSubHeading,
  },orderText:{
    fontSize: 12,
    fontWeight: "bold",
    color: ThemeProviderColors.Light.FontSubHeading,
  },detailItem:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },detailsContainer:{
    marginTop: 10,
  },avatarContainer:{
    borderRadius: 5,
    marginRight: 5,
  },avatarsContainer:{
    flexDirection: 'row',
    marginTop: 10,
  }
})

export default Orders