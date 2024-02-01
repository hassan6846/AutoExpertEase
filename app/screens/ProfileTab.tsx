import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native"
import { Text, ListItem, Icon, Badge, Avatar } from "@rneui/themed"
import CountryFlag from "react-native-country-flag"
import { } from "@gorhom/bottom-sheet"

import { AvatarSrc, DefaultImageSrc } from "../utils/ImageUrls"


const ProfileTab = () => {
    return (
        <ScrollView style={Styles.ProfileSettingContainer}>
            {/* Avatar container bois to alignItems to the center */}
            <View style={Styles.AvatarContainer} >
                <Avatar rounded size={100} source={{ uri: AvatarSrc || DefaultImageSrc }} />
                <Text>Hi, {"user"} <CountryFlag size={12} isoCode="pk" /></Text>
            </View>
            {/* List Items Will be map Below ok */}
            <Text style={{ marginTop: 8, marginBottom: 7, marginLeft: 10 }}>Account</Text>
            <ListItem containerStyle={Styles.ProfileListStyle} >
                <Icon name="person" type="material" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>Switch Role:</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ScrollView>
    )
}
//Stylesheet Please Follow The Hirarchy boyies.
//think container as a shipment contianer and Wrapper as a wrapper on container

const Styles = StyleSheet.create({
    ProfileSettingContainer: {
        flex: 1,
        padding: 25,

    },
    AvatarContainer: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        padding: 10,
        rowGap: 5,
        justifyContent: "center"
    },
    // List items Style styles will only be applied through the ContainerStyleProp.

    ProfileListStyle: {
        shadowColor: "#000000",
        borderRadius: 5,
    }
})
export default ProfileTab