import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from "expo-image"
import { } from "expo-location"
import { Text, Button } from "@rneui/themed"

// location image
import { LocationPermImg } from '../../../constants/ImagesConstants'
import ThemeProviderColors from '../../../provider/ThemeProvider'

const AccessLocation = ({ navigation }: { navigation: any }) => {
    return (
        <View style={Style.PageContainer}>
            <Text h3 style={Style.PageHeading} numberOfLines={2}>Let App Access your location to use services</Text>
            <Image source={{ uri: LocationPermImg }} />
            <Button
                title="Allow Location"
                color={ThemeProviderColors.Light.Primary}
            />

            <Text>Not Yet </Text>
        </View>
    )
}
// Styles
const Style = StyleSheet.create({
    PageContainer: {
        flex: 1,
        padding:10
    },
    PageHeading: {
        textAlign: "center"
    },

})
export default AccessLocation