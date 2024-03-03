//modules
import { View, StyleSheet, Dimensions } from "react-native"
import { Text, Button } from "@rneui/themed"
import { Image } from "expo-image"
import ThemeProviderColors from "../../../../provider/ThemeProvider"


//utils or props
const GetHeight = Dimensions.get("screen").height
const CartPage = () => {
    return (
        <View style={CartStyle.EmptyCartContainer}>
            <Image
                style={CartStyle.ImageStyle}
                source="https://res.cloudinary.com/diml3oeaw/image/upload/v1709499780/AutoExpertEase/Assets/Shop/ollkleznme9hzlj5zxoj.png"
                contentFit="contain"
                transition={1000}
            />

            <Text h4 style={{ textAlign: "center", marginTop: 10 }}>No Item Found</Text>
            <Text style={{ textAlign: "center", marginTop: 12, marginBottom: 10,color:ThemeProviderColors.Light.FontSubHeading }}>You haven't added Products in your Cart</Text>
            <View style={{ display: "flex", alignItems: "center" }}>
                <Button
                    buttonStyle={{paddingLeft:40,paddingRight:40,}}
                    color={ThemeProviderColors.Light.Primary}
                    title="Browse Products" />
            </View>
        </View>
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