import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, Avatar, Icon } from "@rneui/themed";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const ProductViewPage = () => {
  const FeaturesArray = [
    {
      name: 'Free National Delivery',
      value: true,
      icon: "local-shipping",
      color: "#007787",
      backgroundColor: "#87B8BB",
    }
    ,
    {
      name: 'Cash on Delivery',
      value: true,
      icon: "payments",
      color: "#3F0686",
      backgroundColor: "#B293C3",

    },
    {
      name: 'Non Refundable',
      value: true,
      icon: "sync-disabled",
      color: "#3F0686",
      backgroundColor: "#B293C3",

    }, {
      name: '1year Warranty',
      value: true,
      icon: "verified-user",
      color: "#3F0686",
      backgroundColor: "#B293C3",
    }


  ]
  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.scrollViewContent}>
        {/* Your Scrollable  content  */}
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
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
          <>
            <Text h3 style={{ marginRight: 5 }}>$200</Text>
            <Text style={{ fontSize: 12, fontWeight: "200", textDecorationLine: "line-through" }}>$270</Text>
          </>
          <>
            <Text style={{ fontSize: 10, fontWeight: "bold", marginLeft: 5, textDecorationLine: "underline", color: ThemeProviderColors.Light.Primary }}>4.3(380)</Text>
          </>
        </View>
        {/* Price Ends */}
        <View >



          <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10 }}>
            {FeaturesArray.map((feature, index) => (
              <View key={index} style={{ backgroundColor: feature.backgroundColor, flexDirection: 'row', alignItems: 'center', marginRight: 5, marginBottom: 5, paddingVertical: 10, paddingHorizontal: 5, borderRadius: 5 }}>
                {/* Render Icon component here */}
                <Icon containerStyle={{ marginRight: 5 }} name={feature.icon} />
                <Text style={{ fontSize: 14 }}>{feature.name}</Text>
              </View>
            ))}
          </View>
          {/* Description for products */}



          <View style={{paddingHorizontal:10,marginTop:10}}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Description</Text>
            <Text style={{fontSize:12,marginBottom:10,marginTop:5}}>Height:420mm x Width:287mm</Text>
            <Text>An exclusive creation from Tiny Steps illustration for our site, these Retro Swimmers is a perfect add to your home decor. Getting inspiration by vintage fashion, from the 20's to the 50's, these graceful couple of swimmers with minimal traces is another great work Printed in uncoated natural paper, 300 gsm</Text>
          </View>
          {/* End of Description */}
        </View>
        {/* Wrapper to Add Product Features */}

        {/* Product Features Wrapper ends... */}
      </ScrollView>
      <Button color={ThemeProviderColors.Light.Primary} title="Add to Cart" containerStyle={Styles.button} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  scrollView: {
    flex: 1,

  },
  scrollViewContent: {
    paddingBottom: 60, // Adjust based on the button's height
  },
  button: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 30,
  },
  ImageRow: {
    columnGap: 5,
    justifyContent: "center",

    flexDirection: "row"
  }
});

export default ProductViewPage;
