import React from 'react';
import { View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Text, Avatar } from '@rneui/themed';

const ShopCategory = ({ navigation }: { navigation: any }) => {

    // Define array of objects for each category
    const categories = [
        {
            title: "Interior Collection",
            items: [
                { route:'stearings', name: "Stearing Wheels", imageUri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/hxrsdy4knmgbuzkyhfgv.png" },
                {   route:'covers', name: "Covers", imageUri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/wj5viu4cfdqiseszzecl.png" },
                {  route:'ashtray',  name: "Ash Tray", imageUri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/okkapuadloin5grwt73l.png" },
                {  route:'shades',  name: "Shades", imageUri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258666/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/fkminxuekzhsfhdft1mk.png" }
            ]
        },
        {
            title: "Exterior Collection",
            items: [
                {  route:'stickers',name: "Stickers", imageUri: "https://sehgalmotors.pk/cdn/shop/products/1709879196826046_59b5858e-559d-4951-b910-eef647be4fbb.jpg?v=1709879212&width=600" },
                { route:'lightings', name: "Lightings", imageUri: "https://sehgalmotors.pk/cdn/shop/files/ezgif.com-gif-maker_10.gif?v=1693911354&width=200" },
                { route:'doormoudls', name: "Door Mouldings", imageUri: "https://sehgalmotors.pk/cdn/shop/products/636819642359906060.jpgnewop.jpg?v=1708675852&width=600" },
                { route:'bumpers', name: "Bumpers", imageUri: "https://sehgalmotors.pk/cdn/shop/files/1715067118015294_54ded3f5-caee-4215-8b05-784f3af9f1d9.jpg?v=1715675052&width=600" },
                { route:'doorguards', name: "Door Guards", imageUri: "https://sehgalmotors.pk/cdn/shop/files/Toyota-New-Style-Door-Guard-Protector-Multi-Edge-Protection-Anti-Scratch-Buffer-Strip-SehgalMotors-pk-2728.jpg?v=1707955124&width=600" }
            ]
        },
        {
            title: "Car Care",
            items: [
                { route:'rustsprays',  name: "Anti Rust Sprays", imageUri: "https://sehgalmotors.pk/cdn/shop/files/1716380287826375.jpg?v=1716464699&width=600" },
                {  route:'polishers', name: "Color Proof Polishers", imageUri: "https://sehgalmotors.pk/cdn/shop/files/1715318159825929.jpg?v=1715318166&width=600" },
                { route:'antena',  name: "Exterior Antennas", imageUri: "https://sehgalmotors.pk/cdn/shop/files/Hoxg-Car-Antenna-Stylish-Decorative-Purpose-HF-115A-one-piece-SehgalMotors-pk-8149.jpg?v=1707900549&width=600" },
                { route:'doorguards',  name: "Door Guards", imageUri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258666/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/fkminxuekzhsfhdft1mk.png" },
                {  route:'sprays', name: "KeyChain", imageUri: "https://sehgalmotors.pk/cdn/shop/files/Toyota-New-Style-Door-Guard-Protector-Multi-Edge-Protection-Anti-Scratch-Buffer-Strip-SehgalMotors-pk-4619.jpg?v=1707955121&width=600" }
            ]
        }
    ];

    return (
        <ScrollView contentContainerStyle={{ marginTop: 10 }} style={{ flex: 1, backgroundColor: "#fff" }}>

            {categories.map((category, index) => (
                <View key={index}>
                    <Text style={{ flexWrap: "nowrap", paddingHorizontal: 20 }} h4>{category.title}</Text>
                    <ScrollView contentContainerStyle={{ flexWrap: "wrap", flexDirection: "row", rowGap: 5, columnGap: 5 }} style={Styles.CategoryContainer}>
                        {category.items.map((item, idx) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('allcategory',{screen:item.route})} key={idx} style={{ display: "flex", flexDirection: "column", justifyContent: 'flex-start' }}>
                                <Avatar avatarStyle={{borderRadius:5}} size={110} source={{ uri: item.imageUri }} />
                                <Text style={{ marginTop: 10, fontSize: 10 }}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            ))}
        </ScrollView>
    )
};

// Styles
const Styles = StyleSheet.create({
    CategoryContainer: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
});

export default ShopCategory;
