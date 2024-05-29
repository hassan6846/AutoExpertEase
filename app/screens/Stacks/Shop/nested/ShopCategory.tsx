import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Text, Avatar } from '@rneui/themed';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const ShopCategory = ({ navigation }: { navigation: any }) => {



    return (
        <ScrollView contentContainerStyle={{marginTop:10}} style={{ flex: 1,backgroundColor:"#fff" }}>

{/* Interior Collection */}

            <>
                <Text style={{ flexWrap: "nowrap", paddingHorizontal: 20 }} h4>Interior Collection</Text>
                <ScrollView contentContainerStyle={{ flexWrap: "wrap", flexDirection: "row", rowGap: 5, columnGap: 5 }} style={Styles.CategoryContainer}>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/hxrsdy4knmgbuzkyhfgv.png" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Stearing Wheels</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/wj5viu4cfdqiseszzecl.png" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Covers</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/okkapuadloin5grwt73l.png" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Ash Tray</Text>
                    </View>



                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258666/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/fkminxuekzhsfhdft1mk.png" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Shades</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "data:image/jpeg;base64,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" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Speakers</Text>
                    </View>
                </ScrollView>
            </>
       
         {/* Exterior */}
            <>
                <Text style={{ flexWrap: "nowrap", paddingHorizontal: 20 }} h4>Exterior Collection</Text>
                <ScrollView contentContainerStyle={{ flexWrap: "wrap", flexDirection: "row", rowGap: 5, columnGap: 5 }} style={Styles.CategoryContainer}>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/products/1709879196826046_59b5858e-559d-4951-b910-eef647be4fbb.jpg?v=1709879212&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Stickers</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/files/ezgif.com-gif-maker_10.gif?v=1693911354&width=200" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Lightings</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/products/636819642359906060.jpgnewop.jpg?v=1708675852&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Door Mouldings</Text>
                    </View>



                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/files/1715067118015294_54ded3f5-caee-4215-8b05-784f3af9f1d9.jpg?v=1715675052&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Bumpers</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/files/Toyota-New-Style-Door-Guard-Protector-Multi-Edge-Protection-Anti-Scratch-Buffer-Strip-SehgalMotors-pk-2728.jpg?v=1707955124&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Door Guards</Text>
                    </View>
                </ScrollView>
            </>
         {/* Car Care */}
            <>
                <Text style={{ flexWrap: "nowrap", paddingHorizontal: 20 }} h4>Car Care</Text>
                <ScrollView contentContainerStyle={{ flexWrap: "wrap", flexDirection: "row", rowGap: 5, columnGap: 5 }} style={Styles.CategoryContainer}>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/files/1716380287826375.jpg?v=1716464699&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Anti Rust Sprays</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/files/1715318159825929.jpg?v=1715318166&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Color Proof Polishers</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/files/Hoxg-Car-Antenna-Stylish-Decorative-Purpose-HF-115A-one-piece-SehgalMotors-pk-8149.jpg?v=1707900549&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Exterior Antennas</Text>
                    </View>



                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://res.cloudinary.com/diml3oeaw/image/upload/v1709258666/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/fkminxuekzhsfhdft1mk.png" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Door Guards</Text>
                    </View>

                    <View style={{display:"flex",flexDirection:"column",justifyContent:'flex-start'}}>
                        <Avatar size={110} source={{ uri: "https://sehgalmotors.pk/cdn/shop/files/Toyota-New-Style-Door-Guard-Protector-Multi-Edge-Protection-Anti-Scratch-Buffer-Strip-SehgalMotors-pk-4619.jpg?v=1707955121&width=600" }} />
                        <Text style={{ marginTop: 10 ,fontSize:10}}>Cleaners and Sprays.</Text>
                    </View>
                </ScrollView>
            </>

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
