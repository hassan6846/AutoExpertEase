import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Text, Icon, Avatar, Button } from "@rneui/themed";
import { getHeight as GetHeight, getWidth } from "../../../utils/GetDimension";
import ThemeProviderColors from "../../../provider/ThemeProvider";
import { useDispatch, } from "react-redux";

const ShopInitialRoute = ({ navigation }: { navigation: any }) => {
    const [selectedBannerIndex, setSelectedBannerIndex] = useState(0);
    const [products, setProducts] = useState<any[]>([]);

    // Fetching Products
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/product', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getAllProducts();
    }, []);

    // Handle Click Banner
    const handleImageClick = (index: number) => {
        setSelectedBannerIndex(index);
    };

    // Handle Add to Cart

 
    // Category Image URLs
    const CategoryImageUrls = [
        {
            name: "Rims",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/usjuy45e9lsiybgrxto2.png",
            route: 'rims'
        },
        {
            name: "Covers",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/mroixb76ymwnarcm1zyn.png",
            route: 'covers',
        },
        {
            name: "Gadgets",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/dr1fdoz4pzdg3mvwsuau.png",
            route: 'gadgets',
        },
        {
            name: "Lightings",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/jueqfuifkhydp7h0p7hb.png",
            route: 'lightings'
        },
        {
            name: "Seatings",
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708888306/AutoExpertEase/Assets/Shop/CategoryList/xb07fhjr9jpboisrldea.png",
            route: 'seatings'
        }
    ];

    // Price Range Filters
    const PriceRangeFilter = [
        {
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891864/AutoExpertEase/Assets/Shop/PriceRange/nyolfv7d4bcl2nfmohsb.png",
            route: "undereight"
        },
        {
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891864/AutoExpertEase/Assets/Shop/PriceRange/znmu7lazyhzjwr1kyyyn.png",
            route: "underthous"
        },
        {
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891864/AutoExpertEase/Assets/Shop/PriceRange/nkvwzty5i9rslehypuio.png",
            route: "halfprice"
        },
        {
            image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1708891865/AutoExpertEase/Assets/Shop/PriceRange/uantcdu0c07o53fgi2ij.png",
            route: "Sixtyoff"
        }
    ];

    // Banners URLs
    const BannerUrls = [
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1709872959/omcjgurvprtsblfgt3hp.png",
        "https://res.cloudinary.com/diml3oeaw/image/upload/v1709872959/omcjgurvprtsblfgt3hp.png"
    ];

    return (
        <ScrollView style={Styles.initialShopContainer}>
            {/* Sale Banner */}
            <Avatar
                overlayContainerStyle={{ borderRadius: 5 }}
                containerStyle={{ width: "100%", height: GetHeight / 5 }}
                source={{ uri: BannerUrls[selectedBannerIndex] }}
            />
            <View style={{ width: "100%", height: 30, display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "row", columnGap: -5 }}>
                {BannerUrls.map((url, index) => (
                    <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
                        <View
                            style={{
                                width: index === selectedBannerIndex ? 15 : 7,
                                height: 7,
                                backgroundColor: index === selectedBannerIndex ? ThemeProviderColors.Light.Primary : 'lightgray',
                                borderRadius: 5,
                                marginHorizontal: 5,
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            {/* Categories */}
            <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", elevation: 5 }}>
                <Text h4>Categories</Text>
                <Pressable onPress={() => navigation.navigate("Category")} style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }}><Text style={Styles.navigateText}>See all </Text><Icon color={ThemeProviderColors.Light.Primary} name="navigate-next" type="material" /></Pressable>
            </View>
            {/* Category Flatlist */}
            <FlatList
                style={{ flexGrow: 0 }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('allcategory', { screen: item.route })} >
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
            <Avatar
                containerStyle={{ height: 120, width: "100%", marginTop: 6, display: "flex", justifyContent: "center", position: "relative" }}
                overlayContainerStyle={{ borderRadius: 5 }}
                source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709488091/AutoExpertEase/Assets/Shop/cr4zkt0b78cflja4f4vp.png" }}
            >
                {/* Center the inner Avatar */}
                <View style={{ alignSelf: 'center', position: "absolute", backgroundColor: "", width: "100%", height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                    <View style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, marginBottom: 5, color: "white", fontWeight: "500" }}>Support Local Seller</Text>
                        <Text style={{ fontSize: 12, color: "white" }}>Browse the Products Nearby You.</Text>
                    </View>
                    {/* Avatar */}
                    <Avatar
                        overlayContainerStyle={{ borderRadius: 5 }}
                        size={100} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709489077/AutoExpertEase/Assets/Shop/e07e5faoebunxex7zfb5.png" }} />
                </View>
            </Avatar>
            {/* Sale Bar */}
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('allcategory', { screen: item.route })} >
                        <Avatar rounded={true} size={getWidth / 5} source={{ uri: item.image }} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ justifyContent: "space-between", columnGap: 2, alignItems: "center", flex: 1, padding: 10 }}
                data={PriceRangeFilter}
                style={{ flexGrow: 0 }}
                horizontal={true} />
            {/* Product List */}
            <Text style={{ marginLeft: 14 }} h4>Browse Product</Text>
            <ScrollView
                style={{ paddingHorizontal: 20, marginBottom: 20 }}
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", marginTop: 10 }}>
                {products.map((product, index) => (
                    <TouchableOpacity key={index} style={{ width: getWidth * 0.33, margin: 5 }}>
                        <Avatar
                            onPress={() => navigation.navigate("view", { productId: product._id })}
                            overlayContainerStyle={{ borderRadius: 5 }}
                            containerStyle={{ width: "100%", height: 180, borderRadius: 3 }}
                            avatarStyle={{ resizeMode: "cover", width: '100%', height: '100%', borderRadius: 5 }}
                            source={{ uri: product.image[0] }}
                        />
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "900", marginTop: 4 }}>{product.price.saleprice} Rs</Text>
                            <Text style={{ textDecorationLine: "line-through", fontSize: 12, color: "red", marginLeft: 5 }}>{product.price.beforePrice}</Text>
                        </View>
                        <Text style={{ fontSize: 10, fontWeight: "500", padding: 4, color: ThemeProviderColors.Light.FontSubHeading }}>{product.name.length > 40 ? `${product.name.substring(0, 50)}...` : product.name}</Text>

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    initialShopContainer: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff"
    },
    navigateText: {
        color: ThemeProviderColors.Light.Primary,
        fontWeight: "bold"
    }
});

export default ShopInitialRoute;
