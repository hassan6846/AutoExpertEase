//modules
import { View, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useState } from "react"
import ThemeProviderColors from "../../../../provider/ThemeProvider"//color provider
import { Text, Button, Avatar,Chip } from "@rneui/themed"
import { Image } from "expo-image"
import { FlatList } from "react-native-gesture-handler"

// Get width
const getwidth = Dimensions.get("screen").width
const GetHeight = Dimensions.get("screen").height

//utils or props

const CartPage = ({ navigation }: { navigation: any }) => {
    const [CartEmpty, SetCartEmpty] = useState(false)
    return (
        CartEmpty ? (
            // If Cart id empty...
            <View style={CartStyle.EmptyCartContainer}>
                <Image
                    style={CartStyle.ImageStyle}
                    source="https://res.cloudinary.com/diml3oeaw/image/upload/v1709499780/AutoExpertEase/Assets/Shop/ollkleznme9hzlj5zxoj.png"
                    contentFit="contain"
                    transition={1000}
                />

                <Text h4 style={{ textAlign: "center", marginTop: 10 }}>No Item Found</Text>
                <Text style={{ textAlign: "center", marginTop: 12, marginBottom: 10, color: ThemeProviderColors.Light.FontSubHeading }}>You haven't added Products in your Cart</Text>
                <View style={{ display: "flex", alignItems: "center" }}>
                    <Button

                        buttonStyle={{ paddingLeft: 40, paddingRight: 40, }}
                        color={ThemeProviderColors.Light.Primary}
                        title="Browse Products" />
                </View>
            </View>

        )
            //   if not empty...
            : (
                <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total Items </Text>
                        <Text style={{ fontWeight: "bold", color: "#6F7577" }}>Clear</Text>
                    </View>
                    {/* Cart Card Component */}
                    <View style={{ paddingHorizontal: 10,display:"flex",flexDirection:"row" }}>
                        <Avatar containerStyle={{ height: GetHeight / 8, width: getwidth / 3.5 }} overlayContainerStyle={{ borderRadius: 5 }} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709877092/AutoExpertEase/vfjk9tvvg4vlkvqzaqfc.webp" }} />
                        <View style={{ flexShrink: 1, marginLeft: 10 }}>
                            <Text style={{flexWrap:"wrap",display:"flex",fontSize:15,fontWeight:"600"}} numberOfLines={3}>Car Interior Fragrance Enhancer With lid and Cover</Text>
                           
                        </View>
                    </View>
                </ScrollView>
            )
    )
}
const CartStyle = StyleSheet.create({
    EmptyCartContainer: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    // ImageStyle
    ImageStyle: {
        height: GetHeight / 4,

    }
})
export default CartPage