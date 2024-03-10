//modules
import { View, StyleSheet, Dimensions, ScrollView, Pressable } from "react-native"
import { useState } from "react"
import ThemeProviderColors from "../../../../provider/ThemeProvider"//color provider
import { Text, Button, Avatar, Icon, BottomSheet, ListItem } from "@rneui/themed"
import { Image } from "expo-image"


// Get width
const getwidth = Dimensions.get("screen").width
const GetHeight = Dimensions.get("screen").height

//utils or props

const CartPage = ({ navigation }: { navigation: any }) => {
    const [CartEmpty, SetCartEmpty] = useState(false) //State for Cart page being empty or not
    const [showPaymentMethod, SetshowPaymentMethod] = useState(true) //state for Checkout Payment
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
                <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20, flexDirection: "column" }}>
                    {/* BottomSheet  Payment Checkout*/}
                    <BottomSheet backdropStyle={{ backgroundColor: "rgba(59, 59, 59, 0.404)" }} onBackdropPress={() => SetshowPaymentMethod(false)} isVisible={showPaymentMethod}>
                        <View style={{ backgroundColor: "#fff", height: 'auto', borderTopStartRadius: 10, borderTopRightRadius: 10 }}>

                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'rgb(229,229,229)' : '#fff',
                                }, {
                                    display: "flex",
                                    flexDirection: 'row',
                                    padding: 10
                                }

                            ]}>
                                <Icon reverse reverseColor="#007787" style={{ marginRight: 7 }} name="payments" type="material" color="#E6F2F3" />
                                <ListItem.Content>
                                    <ListItem.Title>Cash on Delivery</ListItem.Title>
                                </ListItem.Content>

                            </Pressable>
                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'rgb(229,229,229)' : '#fff',
                                }, {
                                    display: "flex",
                                    flexDirection: 'row',
                                    padding: 10
                                }

                            ]}>
                                <Icon reverse reverseColor="#3F0686" style={{ marginRight: 7 }} name="credit-card" type="material" color="#D6CAE5" />
                                <ListItem.Content>
                                    <ListItem.Title>Online Payment</ListItem.Title>
                                </ListItem.Content>

                            </Pressable>
                        </View>
                    </BottomSheet>
                    {/* Bottom Sheet */}
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total Items </Text>
                        {/* Clear icon Start */}
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontWeight: "bold", color: "#6F7577" }}> Clear </Text>
                            {""}
                            <Icon color="#6F7577" type="evilicon" name="trash" />
                        </View>
                        {/* Clear Icon Ends */}
                    </View>
                    {/* Cart Card Component */}
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



                    {/*Order Details  */}

                    {/* Order Details End */}
                    <View style={{ flex: 1, marginBottom: 30, marginTop: 5, flexGrow: 5, flexDirection: "column", rowGap: 5 }}>
                        {/* Delivery time */}
                        <View style={{ justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: 5, borderRadius: 2 }}>
                            <Icon containerStyle={{ marginLeft: 10, marginRight: 15 }} size={30} type="material" name="local-shipping" />
                            <View>
                                <Text style={{ fontSize: 12, marginBottom: -3 }} >Estimated Delivery Time</Text>
                                <Text h4>Just 1 Working Day</Text>
                            </View>
                        </View>
                        {/* Delivery time Ends */}
                        {/* Text Details Start  */}
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>SubTotal</Text>
                            <Text >Rs.1540</Text>
                        </View>
                        {/*  */}
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Delivery Fee</Text>
                            <Text style={{ color: "#E04E2F", backgroundColor: "#F5C6BC", paddingHorizontal: 10, borderRadius: 10 }} >Rs.250</Text>
                        </View>
                        {/*  */}
                        {/*  */}
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }} >Platform Fee</Text>
                            <Text >Rs 8.99</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total Amount</Text>
                            <Text >Rs. 10231</Text>
                        </View>
                        {/* Text Details End  */}
                        {/* Button */}
                        <Button
                            title="Checkout "
                            buttonStyle={{ marginTop: 5 }}
                            color={ThemeProviderColors.Light.Primary}
                        />

                    </View>
                    {/* order Now button */}

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