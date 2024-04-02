import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

//utils libraries

import { Text, Avatar, Icon } from '@rneui/themed'
import { DrvingVideoImage, pakImage, pakleasson, Sedan } from '../../../constants/ImagesConstants'
import ThemeProviderColors from '../../../provider/ThemeProvider'
import { getHeight, getWidth } from '../../../utils/GetDimension'
const Home = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView style={Style.container}>




      <Text style={Style.headingText}>Driving School</Text>
      {/* Map Video Recomendations here */}
      <ScrollView contentContainerStyle={{ columnGap: 10 }} horizontal={true}>



        <Pressable

          style={{

            height: 160,

          }}
          onPress={() => navigation.navigate("viewvideo")}
        >
          <View
            style={{
              width: '100%',
              position: 'relative',
              height: '100%',

            }}
          >
            <Avatar
              containerStyle={{
                width: '100%',
                position: 'relative',
                height: '100%',

              }}
              avatarStyle={{
                objectFit: 'cover',
                aspectRatio: 2,
                borderRadius: 5
              }}
              source={{ uri: DrvingVideoImage }}
            />
            {/* Icon positioned above the Avatar */}
            <Icon
              containerStyle={{
                position: 'absolute',
                top: '30%',
                left: '40%',
                transform: [{ translateX: -15 }, { translateY: -15 }],
              }}
              name='play-arrow'
              type='material'
              size={90}
              color='white' // Example color for the icon

            />
          </View>
        </Pressable>

        <Pressable
          style={{

            height: 160,

          }}
          onPress={() => {
            // Handle onPress event
          }}
        >
          <View
            style={{
              width: '100%',
              position: 'relative',
              height: '100%',

            }}
          >
            <Avatar
              containerStyle={{
                width: '100%',
                position: 'relative',
                height: '100%',

              }}
              avatarStyle={{
                objectFit: 'cover',
                aspectRatio: 2,
                borderRadius: 5
              }}
              source={{ uri: pakImage }}
            />
            {/* Icon positioned above the Avatar */}
            <Icon
              containerStyle={{
                position: 'absolute',
                top: '30%',
                left: '40%',
                transform: [{ translateX: -15 }, { translateY: -15 }],
              }}
              name='play-arrow'
              type='material'
              size={90}
              color='white' // Example color for the icon

            />
          </View>
        </Pressable>

        <Pressable
          style={{

            height: 160,

          }}
          onPress={() => {
            // Handle onPress event
          }}
        >
          <View
            style={{
              width: '100%',
              position: 'relative',
              height: '100%',

            }}
          >
            <Avatar
              containerStyle={{
                width: '100%',
                position: 'relative',
                height: '100%',

              }}
              avatarStyle={{
                objectFit: 'cover',
                aspectRatio: 2,
                borderRadius: 5
              }}
              source={{ uri: pakleasson }}
            />
            {/* Icon positioned above the Avatar */}
            <Icon
              containerStyle={{
                position: 'absolute',
                top: '30%',
                left: '40%',
                transform: [{ translateX: -15 }, { translateY: -15 }],
              }}
              name='play-arrow'
              type='material'
              size={90}
              color='white' // Example color for the icon

            />
          </View>
        </Pressable>

      </ScrollView>
      {/* End of the  Map Video Recomendations here */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={Style.headingText}>Browse Rental Vehicle</Text>
        <Text onPress={() => navigation.navigate('rentalcars')} style={{ fontSize: 15, fontWeight: "bold", color: ThemeProviderColors.Light.Primary }}>See more</Text>
      </View>
      {/* Horizontal Scroll map some vechiles here */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ columnGap: 10 }} showsHorizontalScrollIndicator={false} horizontal={true}>
        {/* car Card */}
        <View style={Style.BookingWrapper}>
          <Avatar containerStyle={{ width: "100%", height: 120, borderRadius: 5 }} avatarStyle={{ objectFit: "contain", width: 170 }} source={{ uri: Sedan }} />
          {/* Feature Container */}
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 2 }}>
            <Text style={{ fontWeight: "bold", marginLeft: 5, fontSize: 12 }}>Toyota Yaris</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 5 }}>Rs 5600/<Text style={{ color: "#97ADB6", fontSize: 10, alignSelf: 'center' }}>day</Text></Text>

          </View>
          <Text style={{ fontSize: 11, fontWeight: "300", color: "#97ADB6", marginLeft: 5 }}>Without Driver</Text>
          {/* Properties */}
          <View style={{ flex: 1, marginTop: 5, justifyContent: "flex-start", flexDirection: 'row', columnGap: 5 }}>
            <View style={{ borderRadius: 3, flexDirection: "row", alignItems: "center", backgroundColor: ThemeProviderColors.Light.Primary, paddingHorizontal: 2, paddingVertical: 2 }}>
              <Icon color="#fff" size={17} name='airline-seat-recline-normal' type='material' />
              <Text style={{ fontSize: 10, color: "#fff" }}>4</Text>
            </View>

            <View style={{ borderRadius: 3, flexDirection: "row", alignItems: "center", backgroundColor: ThemeProviderColors.Light.Primary, paddingHorizontal: 2, paddingVertical: 2 }}>
              <Icon color="#fff" size={17} name='ac-unit' type='material' />
              <Text style={{ fontSize: 10, color: "#fff" }}>Yes</Text>
            </View>



          </View>
        </View>



        {/* car Card */}
      </ScrollView>
    </ScrollView>
  )
}
const Style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  headingText: {
    marginTop: 10,
    fontSize: 18, fontWeight: "bold",
    marginBottom: 10,
  },
  // Booking card
  BookingWrapper: {
    borderRadius: 5,
    backgroundColor: "#F8FAFC",

  }
})
export default Home