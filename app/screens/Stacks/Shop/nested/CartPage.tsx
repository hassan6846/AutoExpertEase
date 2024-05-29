import { View, StyleSheet, Dimensions, ScrollView, Pressable } from "react-native";
import { useState } from "react";

// utils
import ThemeProviderColors from "../../../../provider/ThemeProvider"; 
import { Text, Button, Avatar, Icon,} from "@rneui/themed";
//sdks
import { Image } from "expo-image";

// Get width
const getwidth = Dimensions.get("screen").width;
const GetHeight = Dimensions.get("screen").height;

const CartPage = ({ navigation }: { navigation: any }) => {
  const [CartEmpty, SetCartEmpty] = useState(false); // State for Cart page being empty or not
  const [showPaymentMethod, SetshowPaymentMethod] = useState(true); // State for Checkout Payment

  return CartEmpty ? (
    // If Cart is empty... dont touch this please
    <View style={CartStyle.EmptyCartContainer}>
      <Image
        style={CartStyle.ImageStyle}
        source={{
          uri:
            "https://res.cloudinary.com/diml3oeaw/image/upload/v1709499780/AutoExpertEase/Assets/Shop/ollkleznme9hzlj5zxoj.png",
        }}
        contentFit="contain"
        transition={1000}
      />
      <Text h4 style={{ textAlign: "center", marginTop: 10 }}>
        No Item Found
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 12,
          marginBottom: 10,
          color: ThemeProviderColors.Light.FontSubHeading,
        }}
      >
        You haven't added Products in your Cart
      </Text>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Button
          buttonStyle={{ paddingLeft: 40, paddingRight: 40 }}
          color={ThemeProviderColors.Light.Primary}
          title="Browse Products"
        />
      </View>
    </View>
  ) : (
    // If not empty...
    <View style={{ flex: 1 }}>
      <ScrollView style={{backgroundColor:"#fff"}} contentContainerStyle={{ padding: 20,backgroundColor:"#fff"}}>
        
{/* ALl Cards  ScrollView Please Map All The cart from redux here*/}

<ScrollView style={{flex:1,backgroundColor:"#fff"}}>

      <View style={{ paddingHorizontal: 10, flexDirection: "row", rowGap: 5, marginBottom: 5 }}>
                        <Avatar containerStyle={{ height: GetHeight / 8, width: getwidth / 3.5 }} overlayContainerStyle={{ borderRadius: 5 }} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709877092/AutoExpertEase/vfjk9tvvg4vlkvqzaqfc.webp" }} />

                        <View style={{ flexShrink: 1, marginLeft: 10, justifyContent: "space-between" }}>
                            <Text style={{ flexWrap: "wrap", display: "flex", fontSize: 15, fontWeight: "600" }} numberOfLines={3}>Car Interior Fragrance Enhancer With lid and Cover</Text>
                            {/* Cateogry Chip Wrap Start */}
                            <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", columnGap: 4, rowGap: 3, marginTop: 5 }}>
                                <Text style={{ paddingHorizontal: 10, backgroundColor: "#F3F3F3", color: "gray", fontSize: 12, borderRadius: 10, }}>Interior</Text>
                                <Text style={{ paddingHorizontal: 10, backgroundColor: "#F3F3F3", color: "gray", fontSize: 12, borderRadius: 10 }}>Exterior</Text>
                                <Text style={{ paddingHorizontal: 10, backgroundColor: "#F3F3F3", color: "gray", fontSize: 12, borderRadius: 10 }}>Walter</Text>
                            </View>
                            {/*   Cateogry Chip Wrap Ends */}
                            {/* Container for Price and action Start*/}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8, justifyContent: "space-between" }}>
                                {/* Text */}
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 6 }}>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", }}>15000Rs</Text>
                                    <Text style={{ textDecorationLine: "line-through", fontSize: 10, color: "gray" }}>180230</Text>
                                </View>
                                {/* Text Ends */}
                                {/* Action Button Start */}
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                                    <Pressable style={{ padding: 3, borderRadius: 20, borderColor: "black", borderWidth: 1 }}><Icon type="material" name="remove" /></Pressable>
                                    <Text style={{ marginRight: 5 }} h4> 1</Text>
                                    <Pressable style={{ padding: 3, borderRadius: 20, borderColor: "black", borderWidth: 1 }}><Icon type="material" name="add" /></Pressable>
                                </View>
                                {/*  End Action Button  */}
                            </View>
                            {/*End  Container for Price and action */}
                        </View>
                    </View>
                    

                    </ScrollView>

            

{/* ALl Cards */}
      </ScrollView>
      {/* Checkout Button */}
<View style={{alignSelf: "center",width:"100%",justifyContent:"flex-end",backgroundColor:"#fff",paddingHorizontal:20,paddingVertical:10,elevation:5}}>

{/* Delivery TImeBanner */}
<View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:10,paddingVertical:20}}>
    <Icon size={30} type="material" name="local-shipping"/>
<View>
<Text style={{marginLeft:5,fontSize:10}}>Esmimated Delivery Time</Text>
<Text h4 style={{marginLeft:5}}>Just 2-3 Working Day</Text>
</View>
</View>

{/* Sub total Starts */}
    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
        <Text>SubTotal</Text>
        <Text>Rs.1580</Text>
        </View>
        {/* Sub total ends */}
        {/* Delivery Fee */}
    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
        <Text>SubTotal</Text>
        <Text>Rs.1580</Text>
    </View>
{/* Delivery Fee ends */}
    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
    <Text>Platform Fee</Text>
        <Text>9.99</Text>
    </View>
    {/* Total Amount */}
    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
    <Text>Total Amount</Text>
        <Text>Rs 15709</Text>

    </View>
    
      <Button
        title="Checkout"
        buttonStyle={{ marginTop: 5 ,}}
    
        color={ThemeProviderColors.Light.Primary}
      />
      
</View>
    </View>
  );
};

const CartStyle = StyleSheet.create({
  EmptyCartContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  ImageStyle: {
    height: GetHeight / 4,
  },
});

export default CartPage;
