import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native"
import { Text, ListItem, Icon, Badge, Avatar } from "@rneui/themed"
import CountryFlag from "react-native-country-flag"
import { AvatarSrc, DefaultImageSrc } from "../../constants/ImagesConstants"




const ProfileTab = () => {


    return (
        <ScrollView style={Styles.ProfileSettingContainer}>
            {/* Avatar container bois to alignItems to the center */}
            <View style={Styles.AvatarContainer} >
                <Avatar rounded size={100} source={{ uri: AvatarSrc || DefaultImageSrc }} ><Avatar.Accessory size={25} /></Avatar>
                <Text>Hi, <CountryFlag size={12} isoCode="pk" /></Text>
            </View>
            {/* List Items Will be map Below ok */}
            {/* Account */}
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Account</Text>
            <ListItem containerStyle={Styles.ProfileListStyle} >
                <Icon name="person" type="material" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>Switch Role</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={23} />
            </ListItem>

            {/* Shopping */}
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Shoppings</Text>
            {/* ShoppingCard View */}
            <View style={{ elevation: 5, shadowColor: "#d4d4d4" }}>
                <ListItem containerStyle={Styles.ProfileListStyle} >
                    <Icon name="shopping-cart" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Cart</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={Styles.ProfileListStyle} >
                    <Icon name="local-shipping" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Orders</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={Styles.ProfileListStyle} >
                    <Icon name="favorite" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Liked Items</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={Styles.ProfileListStyle} >
                    <Icon name="list" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Wishlist</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* Bookings Card */}
            <View>
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Bookings</Text>
            <ListItem containerStyle={Styles.ProfileListStyle} >
                    <Icon name="book" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Bookings</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>

        </ScrollView>
    )
}
//Stylesheet Please Follow The Hirarchy boyies.
//think container as a shipment contianer and Wrapper as a wrapper on container

const Styles = StyleSheet.create({
    ProfileSettingContainer: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff",
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
        borderColor: "#d4d4d4",



    }
})
export default ProfileTab