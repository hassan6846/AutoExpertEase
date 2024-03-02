import { View, StyleSheet, Pressable, FlatList } from "react-native"
import { Text, Icon, Skeleton, Avatar } from "@rneui/themed"
import ThemeProviderColors from "../../../provider/ThemeProvider"
import { TouchableOpacity } from "react-native-gesture-handler"

const ShopInitalRoute = ({ navigation }: { navigation: any }) => {
    const CategoryImageUrls = [
        {
            name: "Rims",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/usjuy45e9lsiybgrxto2.png",

        }, {
            name: "Covers",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/mroixb76ymwnarcm1zyn.png",
        }, {
            name: "Gadgets",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/dr1fdoz4pzdg3mvwsuau.png",
        }, {
            name: "Lightings",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/jueqfuifkhydp7h0p7hb.png",
        },{
            name: "Seatings",
            image:"https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/xb07fhjr9jpboisrldea.png"

        }
    ]
    const PriceRangeFilter = [
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891864/AutoExpertEase/Assets/Shop/PriceRange/nyolfv7d4bcl2nfmohsb.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891864/AutoExpertEase/Assets/Shop/PriceRange/znmu7lazyhzjwr1kyyyn.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891864/AutoExpertEase/Assets/Shop/PriceRange/nkvwzty5i9rslehypuio.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891865/AutoExpertEase/Assets/Shop/PriceRange/uantcdu0c07o53fgi2ij.png"
    ]
    return (
        <View style={Styles.InitialShopContainer}>
            {/* Text  header*/}
            <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", elevation: 5 }}>
                <Text h4>Categories</Text>
                <Pressable onPress={()=>navigation.navigate("Category")} android_ripple={{ color: '#CCD5D5', borderless: true }} style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }}><Text style={Styles.NavigateText}>See all </Text><Icon color={ThemeProviderColors.Light.Primary} name="navigate-next" type="material" /></Pressable>
            </View>
            {/* Flatlist Slider Cateogry Bar */}
            <FlatList style={{ flexGrow: 0 }}
                renderItem={({ item }) => (
                    <TouchableOpacity  >
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Avatar rounded={true} size={90} source={{ uri: item.image }} />
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                horizontal={true}
                ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={CategoryImageUrls} />
            {/* Support Local Seller */}
            <View>

            </View>
            {/* Support Local Seller Ends */}
            {/* Sale Bar */}
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <Avatar rounded={true} size={70} source={{ uri: item }} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ justifyContent: "space-evenly", columnGap: 2, alignItems: "center", flex: 1, padding: 10 }}
                data={PriceRangeFilter}
                style={{ flexGrow: 0 }}
                horizontal={true} />
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