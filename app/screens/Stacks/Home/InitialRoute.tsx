import { Pressable, ScrollView, StyleSheet, View, } from 'react-native'
import React from 'react'

//utils libraries
import { Text, Avatar, Icon } from '@rneui/themed'
import { DrvingVideoImage, pakImage, pakleasson, Sedan } from '../../../constants/ImagesConstants'
import ThemeProviderColors from '../../../provider/ThemeProvider'

const Home = ({ navigation }: { navigation: any }) => {

  const serviceArray = [
    {
      title: "Rent Cars",
      icon: "car-rental",
      route: "allcars"
    },
    {
      title: "AutoHelp",
      icon: "electric-car",
      route: "Support"
    }, {
      title: "Auto Repair",
      icon: "electric-car",
      route: "Service"
    }, {
      title: "Learn Drive",
      icon: "school",
      route: "allvideos"
    }
  ]

  return (
    <ScrollView style={Style.container}>
      <Text style={Style.headingText}>Expolore Services</Text>
      {/* Service Array */}
      <View style={Style.ServiceContainer}>

        {
          serviceArray.map((index, key) => (

            <Pressable onPress={() => navigation.navigate(index.route)} key={key} style={{ backgroundColor: "#fff", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingVertical: 10, paddingHorizontal: 5, borderRadius: 5, elevation: 2 }}>
              <Icon name={index.icon} type='material' />
              <Text style={{ fontSize: 9 }}>{index.title}</Text>
            </Pressable>

          ))
        }



      </View>
      {/* Service Array Ends */}

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
        <Text onPress={() => navigation.navigate('allcars')} style={{ fontSize: 15, fontWeight: "bold", color: ThemeProviderColors.Light.Primary }}>See more</Text>
      </View>
      {/* Horizontal Scroll map some vechiles here */}
      <ScrollView style={{ flex: 1, marginBottom: 50 }} contentContainerStyle={{ columnGap: 10 }} showsHorizontalScrollIndicator={false} horizontal={true}>
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

      {/* Experts Drivers.. */}

      {/* Experts Drivers. */}
    </ScrollView>
  )
}
const Style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",


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

  }, ServiceContainer: {
    borderRadius: 5,
    elevation: 5,
    backgroundColor: "#fff",
    width: "100%",
    flexWrap: "wrap",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: 'center',
    flexDirection: 'row'
  }
})
export default Home