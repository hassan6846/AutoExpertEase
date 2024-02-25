import { View, StyleSheet, Pressable, FlatList } from "react-native"
import { Text, Icon, Skeleton, Avatar } from "@rneui/themed"
import ThemeProviderColors from "../../../provider/ThemeProvider"
import { TouchableOpacity } from "react-native-gesture-handler"

const ShopInitalRoute = () => {
    const CategoryImageUrls = [
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/usjuy45e9lsiybgrxto2.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/mroixb76ymwnarcm1zyn.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/dr1fdoz4pzdg3mvwsuau.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/jueqfuifkhydp7h0p7hb.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/xb07fhjr9jpboisrldea.png"

    ]
    return (
        <View style={Styles.InitialShopContainer}>
            {/* Text  header*/}
            <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", elevation: 5 }}>
                <Text h4>Categories</Text>
                <Pressable android_ripple={{ color: '#CCD5D5', borderless: true }} style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }}><Text style={Styles.NavigateText}>See all </Text><Icon color={ThemeProviderColors.Light.Primary} name="navigate-next" type="material" /></Pressable>
            </View>
            {/* Flatlist Slider Cateogry Bar */}
            <FlatList style={{ flexGrow: 0 }} renderItem={({ item }) => (
                <TouchableOpacity >
                    <Avatar rounded={true} size={90} source={{ uri: item }} />
                </TouchableOpacity>
            )} horizontal={true} ItemSeparatorComponent={() => <View style={{ width: 5 }} />} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} data={CategoryImageUrls} />
            {/* Support Local Seller */}
            {/* Support Local Seller Ends */}
            {/* Sale Bar */}
            {/* Sale Bar Ends */}
        </View>
    )
}
// StyleSheet
const Styles = StyleSheet.create({
    InitialShopContainer: {
        padding: 20,
        height: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    NavigateText: {
        color: ThemeProviderColors.Light.Primary,
        fontWeight: "bold"
    }
})
export default ShopInitalRoute