import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, Avatar, Icon } from "@rneui/themed";
import { AvatarSrc, easypaisa, JazzCash, DefaultImageSrc } from '../../../../constants/ImagesConstants';

const ProductViewPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [AvatarSrc, easypaisa, JazzCash, DefaultImageSrc]; // Array of image URLs

  const FeaturesArray = [
    {
      name: 'Free Delivery',
      value: true,
      icon: "local-shipping",
      color: "#007787",
      backgroundColor: "#f6f6f6",
    },
    {
      name: 'Secure Transfer',
      value: true,
      icon: "payments",
      color: "#3F0686",
      backgroundColor: "#f6f6f6",
    },
    {
      name: 'Non Refundable',
      value: true,
      icon: "sync-disabled",
      color: "#3F0686",
      backgroundColor: "#f6f6f6",
    },
    {
      name: 'Return Warranty',
      value: true,
      icon: "verified-user",
      color: "#3F0686",
      backgroundColor: "#f6f6f6",
    }
  ];

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.scrollViewContent}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
          <Avatar avatarStyle={{ borderRadius: 5 }} containerStyle={{ height: 250, width: "90%", marginBottom: 5 }} source={{ uri: images[selectedIndex] }} />
        </View>
        <View style={Styles.ImageRow}>
          {images.map((image, index) => (
            <Avatar
              key={index}
              size={60}
              avatarStyle={StyleSheet.flatten([
                { borderRadius: 5 },
                { borderColor: selectedIndex === index ? "#E04E2F": 'transparent', borderWidth: 2 }
              ])}
              source={{ uri: image }}
              onPress={() => setSelectedIndex(index)}
            />
          ))}
        </View>
        <Text style={{ paddingHorizontal: 20, marginTop: 5, color: "#302F33", fontWeight: "100", fontSize: 20 }}>
          BDK Polypro Car Seat Covers Full Set in Charcoal
        </Text>
        <View style={{ flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 10, backgroundColor: "#f6f6f6", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
            Automotive Seat cover
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 10 }}>
          <Text style={{ marginRight: 5, color: "#302F33", fontWeight: "400", fontSize: 18 }}>PKR 200</Text>
          <Text style={{ fontSize: 12, fontWeight: "100", textDecorationLine: "line-through", color: "#97ADB6" }}>$270</Text>
        </View>
        <View>
          <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10,justifyContent:"center",columnGap:10 }}>
            {FeaturesArray.map((feature, index) => (
              <View key={index} style={{ backgroundColor: feature.backgroundColor, flexDirection: 'column', alignItems: 'center',  borderRadius: 5,paddingHorizontal:5,paddingVertical:8}}>
                <Icon containerStyle={{ marginRight: 3 }}  name={feature.icon} />
                <Text style={{ fontSize: 10, fontWeight: "100"}}>{feature.name}</Text>
              </View>
            ))}
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 14 }}>Description</Text>
            <Text style={{ color: "#97ADB6", fontWeight: "100" }}>
              An exclusive creation from Tiny Steps illustration for our site, these Retro Swimmers is a perfect add to your home decor. Getting inspiration by vintage fashion, from the 20's to the 50's, these graceful couple of swimmers with minimal traces is another great work Printed in uncoated natural paper, 300 gsm
            </Text>
          </View>
        </View>
      </ScrollView>
      <Button color="#E04E2F" title="Add to Cart" containerStyle={Styles.button} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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