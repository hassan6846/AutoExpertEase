import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
//library
import { Avatar, Input, Text } from "@rneui/themed"
import { } from "@gorhom/bottom-sheet"
//sdks
import { Video } from "expo-av"
import { getHeight } from '../../../../utils/GetDimension'
import { AvatarSrc } from '../../../../constants/ImagesConstants'

const ViewVideos = () => {
  return (
    <KeyboardAvoidingView style={Styles.container}>
      <Video

        useNativeControls={true}
        shouldPlay={true}
        style={{ height: 300, width: "100%" }}
        source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }} />


      {/* Video TItle Card */}
      <View style={{ backgroundColor: "orange", width: "100%", height: "auto" }}>
        <Text style={{ fontSize: 18, paddingHorizontal: 17 }}>Sean 'Diddy' Combs' Alleged 'Drug Mule' Taken Into Custody Following House Raids (Bodycam Footage)</Text>
      </View>
      <View style={{ backgroundColor: "#e5e5e5", width: "100%", height: getHeight / 15, paddingHorizontal: 20, justifyContent: 'center' }}>
        <View style={{ width: "100%", backgroundColor: "orange", height: "90%", borderRadius: 5, alignItems: "center", paddingHorizontal: 10, flexDirection: "row" }}>
          <Avatar source={{ uri: AvatarSrc }} size={30} avatarStyle={{ borderRadius: 60 }} />
          <View style={{ width: "100%", marginLeft: 5 }}>
            <Text style={{ color: "white", fontSize: 15, marginRight: 2 }}> Comments 97</Text>
            <View style={{ backgroundColor: "#e5e5e5", width: "70%", paddingHorizontal: 2, paddingVertical: 4, borderRadius: 5 }}>
              <Text style={{ marginLeft: 2, fontSize: 12 }}>Add a comment</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Map All Video Recomendation below */}

      <ScrollView style={{ backgroundColor: "red", flex: 1 }}>

        <View>
          <View style={{ height: getHeight / 4, backgroundColor: "cyan", marginBottom: 5 }}>
            <Avatar source={{ uri: AvatarSrc }} avatarStyle={{ borderRadius: 5, height: "100%", width: '100%' }} containerStyle={{ width: "100%", height: "100%", borderRadius: 5 }} />
          </View>
          {/* Text and avatar */}
          <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
            <Avatar avatarStyle={{ borderRadius: 60 }} source={{ uri: AvatarSrc }} />
            <View style={{ paddingHorizontal: 10 }}>
              <Text>Sean 'Diddy' Combs' Alleged 'Drug Mule' Taken Into Cust</Text>
              <Text style={{ fontSize: 10 }}>WalterWhite</Text>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>287k Views</Text>
            </View>
          </View>
          {/* Text and avatar */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

})
export default ViewVideos