import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Text, Chip } from "@rneui/themed"
import { AvatarSrc } from '../../../../constants/ImagesConstants'
import { } from "@gorhom/bottom-sheet"
import ThemeProviderColors from '../../../../provider/ThemeProvider'
const ProductViewPage = () => {
  return (
    <ScrollView style={Styles.ProductViewCont}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <Avatar avatarStyle={{ borderRadius: 5 }} containerStyle={{ height: 250, width: "90%", marginBottom: 5 }} source={{ uri: AvatarSrc }} />
      </View>
      {/* Row for horizontal product View */}
      <View style={Styles.ImageRow}>
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
      </View>
      {/* Row for horizontal product View */}
      {/* Text Details */}
      <Text h4 style={{ paddingHorizontal: 20, marginTop: 5 }}>BDK Polypro Car Seat Covers Full
        Set in Charcoal</Text>
      {/* Category Start */}
      <View style={{ flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", marginRight: 5 }}>Category :</Text>
        <Text style={{ fontSize: 10, backgroundColor: "gray", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, color: "#fff" }}>Automotive Seat cover</Text>
      </View>
      {/* Category ends */}
      {/* Price Start */}
      <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20}}>
     <>
     <Text h3 style={{marginRight:5}}>$200</Text>
      <Text style={{fontSize:12,fontWeight:"200",textDecorationLine:"line-through"}}>$270</Text>
     </>
     <>
     <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,textDecorationLine:"underline",color:ThemeProviderColors.Light.Primary}}>4.3(380)</Text>
     </>
      </View>
      {/* Price Ends */}
      <Text  style={{paddingHorizontal:20,fontSize:12,marginTop:10,fontWeight:"bold"}}>Product Details</Text>
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  ProductViewCont: {
    flex: 1,

    backgroundColor: "#fff"
  }, ImageRow: {
    columnGap: 5,
    justifyContent: "center",

    flexDirection: "row"
  }
})
export default ProductViewPage