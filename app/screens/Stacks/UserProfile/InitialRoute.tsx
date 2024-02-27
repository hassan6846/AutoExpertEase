import { ScrollView, StyleSheet, View, KeyboardAvoidingView, Pressable, TouchableHighlight, TouchableHighlightBase } from "react-native"
import {useRef} from "react"
import { Text, ListItem, Icon, Badge, Avatar } from "@rneui/themed"
import CountryFlag from "react-native-country-flag"
import { TouchableOpacity } from "react-native-gesture-handler"
import { AvatarSrc, DefaultImageSrc } from "../../../constants/ImagesConstants"

//bottomSheet.
import BottomSheet from '@gorhom/bottom-sheet';


const ProfileInitial = () => {
    interface ListItemProps {
        Component?: React.ComponentType<any>;
    }

    return (

        <ScrollView showsVerticalScrollIndicator={false} style={Styles.ProfileSettingContainer}>
            {/* Avatar container bois to alignItems to the center */}
            <View style={Styles.AvatarContainer} >
                <Avatar rounded size={100} source={{ uri: AvatarSrc || DefaultImageSrc }} ><Avatar.Accessory size={25} /></Avatar>
                <Text>Hi, <CountryFlag size={12} isoCode="pk" /></Text>
            </View>
            {/* List Items Will be map Below ok */}

            {/* Account */}
            <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10, }}>Account</Text>
            {/* 1 */}


            <Pressable  style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(229,229,229)' : 'white',
          },
          Styles.ProfileList,
        ]}>
                <Icon style={{marginRight:7}} name="person" type="material" color="#3E4958" />
                <ListItem.Content>
                    <ListItem.Title>View Profile</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={18} />
            </Pressable>


            {/* Shopping */}
            <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Shoppings</Text>
            <View style={{ elevation: 5, shadowColor: "#d4d4d4" }}>
                <ListItem containerStyle={{ backgroundColor: "", marginBottom: 5 }} >
                    <Icon name="shopping-cart" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Cart</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "", marginBottom: 5 }} >
                    <Icon name="local-shipping" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Orders</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "", marginBottom: 5 }} >
                    <Icon name="favorite" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Liked Items</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "" }} >
                    <Icon name="list" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Wishlist</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* Bookings Card */}
            <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Bookings</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "", borderRadius: 5 }} >
                    <Icon name="book" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Bookings</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* Payment */}
            <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Payment</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "", borderRadius: 5 }} >
                    <Icon name="credit-card" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Add Credit Card</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* ChatSupport */}
            <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Help</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "" }} >
                    <Icon name="support-agent" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Help & Support</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={23} />
                </ListItem>
            </View>
            {/* More  */}
            <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>More</Text>
            <View style={{ borderRadius: 5 }}>
                <ListItem containerStyle={{ backgroundColor: "" }} >
                    <Icon name="settings" type="material" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Settings</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron color="#B5B8BB" size={17} />
                </ListItem>
                <ListItem containerStyle={{ backgroundColor: "" }} >
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
        paddingRight: 2,
        paddingLeft: 2,
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
    ProfileList:{
     flex:1,
     flexDirection:"row",
     padding:15,
     borderRadius:2,
    }


})
export default ProfileInitial