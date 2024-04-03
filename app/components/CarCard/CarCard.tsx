import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Icon } from "@rneui/themed"
import ThemeProviderColors from '../../provider/ThemeProvider'
import { Sedan } from '../../constants/ImagesConstants'
const CarCard = () => {
    return (
        <View style={Style.BookingWrapper}>
            <Avatar containerStyle={{ width: "100%", height: 120, borderRadius: 5 }} avatarStyle={{ objectFit: "contain", width: 170, }} source={{ uri: Sedan }} />
            {/* Feature Container */}
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 2 }}>
                <Text style={{ fontWeight: "bold", marginLeft: 5, fontSize: 12 }}>Toyota Yaris</Text>
                <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 5 }}>Rs 5600/<Text style={{ color: "#97ADB6", fontSize: 10, alignSelf: 'center' }}>day</Text></Text>

            </View>
            <Text style={{ fontSize: 11, fontWeight: "300", color: "#97ADB6", marginLeft: 5 }}>Without Driver</Text>
            {/* Properties */}
            <View style={{ flex: 1, marginTop: 5, justifyContent: "flex-start", flexDirection: 'row', columnGap: 5 }}>
                <View style={{ borderRadius: 3, flexDirection: "row", alignItems: "center", backgroundColor: ThemeProviderColors.Light.Primary, paddingHorizontal: 2, paddingVertical: 2 }}>
                    <Icon color="#fff" size={17} name='airline-seat-recline-normal' type='material' />
                    <Text style={{ fontSize: 10, color: "#fff" }}>4</Text>
                </View>

                <View style={{ borderRadius: 3, flexDirection: "row", alignItems: "center", backgroundColor: ThemeProviderColors.Light.Primary, paddingHorizontal: 2, paddingVertical: 2 }}>
                    <Icon color="#fff" size={17} name='ac-unit' type='material' />
                    <Text style={{ fontSize: 10, color: "#fff" }}>Yes</Text>
                </View>



            </View>
        </View>

    )
}
const Style = StyleSheet.create({
    BookingWrapper:{
        borderRadius: 5,
        backgroundColor: "#f8f8f8",
    }
})
export default CarCard