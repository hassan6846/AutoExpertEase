import { ScrollView, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from "react-native"
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
            {/* 1 */}
            <View >
                <TouchableOpacity>
                    <ListItem containerStyle={{ backgroundColor: "#f7f7f7af", borderRadius: 5, marginBottom: 10 }} >
                        <Icon name="person" type="material" color="grey" />
                        <ListItem.Content>
                            <ListItem.Title>Switch Role</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={23} />
                    </ListItem></TouchableOpacity>
            </View>

            {/* Shopping */}
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Shoppings</Text>
            <View style={{ elevation: 5, shadowColor: "#d4d4d4" }}>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af", marginBottom: 5 }} >
                    <Icon name="shopping-cart" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Cart</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af", marginBottom: 5 }} >
                    <Icon name="local-shipping" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Orders</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af", marginBottom: 5 }} >
                    <Icon name="favorite" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Liked Items</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af" }} >
                    <Icon name="list" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Wishlist</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* Bookings Card */}
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Bookings</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af", borderRadius: 5 }} >
                    <Icon name="book" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Bookings</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* Payment */}
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Payment</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af", borderRadius: 5 }} >
                    <Icon name="credit-card" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Add Credit Card</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* ChatSupport */}
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Help</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af" }} >
                    <Icon name="support-agent" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Help & Support</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* More  */}
            <Text style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>More</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af" }} >
                    <Icon name="settings" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Settings</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "#f7f7f7af" }} >
                    <Icon name="logout" type="material" color="red" />
                    <ListItem.Content>
                        <ListItem.Title style={{ color: "red", fontWeight: "400" }}>Logout</ListItem.Title>
                    </ListItem.Content>

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
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 30,
        paddingLeft: 30,
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



})
export default ProfileTab