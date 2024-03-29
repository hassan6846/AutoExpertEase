import { Pressable, ScrollView, StyleSheet,View } from 'react-native'
import React from 'react'

//utils libraries

import { Text, Avatar, Icon } from '@rneui/base'
import { DrvingVideoImage,pakImage,pakleasson } from '../../../constants/ImagesConstants'
const Home = ({navigation}:{navigation:any}) => {
  return (
    <ScrollView style={Style.container}>




      <Text style={Style.headingText}>Driving School</Text>
      {/* Map Video Recomendations here */}
      <ScrollView contentContainerStyle={{columnGap:10}} horizontal={true}>



    <Pressable
  
      style={{
     
        height: 160,
     
      }}
      onPress={() =>navigation.navigate("viewvideo")}
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
          aspectRatio:2,
          borderRadius:5
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
          aspectRatio:2,
          borderRadius:5
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
          aspectRatio:2,
          borderRadius:5
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
    fontSize: 18, fontWeight: "bold",
    marginBottom:10,
  }

})
export default Home