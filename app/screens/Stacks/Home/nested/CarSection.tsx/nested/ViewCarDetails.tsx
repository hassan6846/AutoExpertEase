import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// Library
import { Avatar, ListItem, Text, Button } from "@rneui/themed"

import ThemeProviderColors from '../../../../../../provider/ThemeProvider'
import { Icon } from '@rneui/base'
// utils

const ViewCarDetails = ({ navigation }: { navigation: any }) => {
  // Handle Clicks for Change Image,
  const [selectedBannerIndex, SetselectedBannerIndex] = useState(0)
  // Handle Click Banner dispatch
  const handleImageClick = (index:any) => {
    SetselectedBannerIndex(index);
  };

  const BannerUrls = [
    "https://shorturl.at/ZK76B",
    "https://shorturl.at/ITkrj"
  ]

  ////// Ends here for photo Change...

//Handle Book Button..
const HandleNext=async()=>{
  navigation.navigate('bookingsteps')
}

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Car Banner */}
        <View style={styles.bannerContainer}>
          <Avatar 
            containerStyle={styles.bannerAvatar} 
            avatarStyle={styles.bannerAvatarStyle} 
            source={{ uri: BannerUrls[selectedBannerIndex] }} 
            size={300} 
          />
          <View style={styles.bannerDots}>
            {BannerUrls.map((url, index) => (
              <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
                <View
                  style={[
                    styles.dot,
                    index === selectedBannerIndex && styles.activeDot
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* End of The Car Photo Banner */}

        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.carTitle}>Audi R8 Performance</ListItem.Title>
            <ListItem.Subtitle style={styles.carSubtitle}>Car Score :90/100</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <View style={styles.priceContainer}>
          <Text style={{color:"#F54335",fontSize:18}}>PKR 4000/day</Text>
         
        </View>

        {/* About Owner */}
        <View style={{padding:10}}>
          <ListItem>
            <Avatar size={50} avatarStyle={styles.ownerAvatar} source={{ uri: "https://shorturl.at/NsJpp" }} />
            <ListItem.Content >
              <ListItem.Title>Call Taxi</ListItem.Title>
              <ListItem.Subtitle>1 Car</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
        {/* About Owner Ends */}

        {/* Delivery Availability ListItem */}
        <ListItem bottomDivider topDivider>
          <Icon name='location-on' type='material' />
          <ListItem.Content>
            <ListItem.Title>Pick up Availability</ListItem.Title>
            <ListItem.Subtitle>Lahore Only</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        {/* ListItem Availability ends */}

        {/* Buyer Protection */}
        <ListItem bottomDivider topDivider>
          <Icon name='verified-user' type='material' />
          <ListItem.Content>
            <ListItem.Title>Choice Service</ListItem.Title>
            <ListItem.Subtitle>Buyer & Seller Protection</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        {/* Buyer Protection Ends */}

        <View style={styles.assuranceContainer}>
          <Text style={styles.assuranceTitle}>Platform Assurance</Text>

          {/* Safe Payments */}
          <ListItem>
            <Icon name='payments' type='material' />
            <ListItem.Content>
              <ListItem.Title style={styles.assuranceItemTitle}>Safe Payments</ListItem.Title>
              <ListItem.Subtitle>Payment Methods used by many international buyers</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          {/* Security & Privacy */}
          <ListItem>
            <Icon name='lock' type='material' />
            <ListItem.Content>
              <ListItem.Title style={styles.assuranceItemTitle}>Security & Privacy</ListItem.Title>
              <ListItem.Subtitle>We respect your privacy so your personal details are safe and secure</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          {/* Buyer Protection */}
          <ListItem>
            <Icon name='thumb-up' type='material' />
            <ListItem.Content>
              <ListItem.Title style={styles.assuranceItemTitle}>Buyer Protection</ListItem.Title>
              <ListItem.Subtitle style={styles.assuranceItemSubtitle}>Get your money back if your order isn't being processed by the estimated date or you're not satisfied</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
      {/* Fixed Button */}
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity onPress={HandleNext} style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollContainer: {
    paddingBottom: 100, // Adjust to give space for the fixed button
  },
  bannerContainer: {
    display: 'flex', 
    alignItems: 'center', 
    position: "relative"
  },
  bannerAvatar: {
    width: "100%", 
    height: 300 
  },
  bannerAvatarStyle: {
    objectFit: "cover" 
  },
  bannerDots: {
    width: "100%", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: 'center', 
    flexDirection: "row", 
    columnGap: -5, 
    position: 'absolute', 
    bottom: 5 
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 15,
    backgroundColor: ThemeProviderColors.Light.Primary,
  },
  carTitle: {
    fontSize: 18
  },
  carSubtitle: {
    fontSize: 12
  },
  priceContainer: {
    paddingHorizontal: 20,
   paddingVertical:20,
    backgroundColor: "#fff",
    flexDirection:'row',
    alignItems:'center',
columnGap:4,
  },
  ownerAvatar: {
    borderRadius: 60
  },
  assuranceContainer: {
    backgroundColor: "#fff",
    marginTop: 10
  },
  assuranceTitle: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 10
  },
  assuranceItemTitle: {
    fontSize: 13
  },
  assuranceItemSubtitle: {
    fontWeight: "100"
  },
  fixedButtonContainer: {
    backgroundColor:"#fff",
    position: 'absolute',
    bottom: -1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: ThemeProviderColors.Light.Primary,
    padding: 15,
    borderRadius: 10,
    width:"80%",
  
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:"center",
    fontWeight: 'bold'
  }
});

export default ViewCarDetails;
