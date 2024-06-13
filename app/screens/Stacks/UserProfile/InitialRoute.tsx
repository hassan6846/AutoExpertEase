import { useRef, useState } from "react"
import { ScrollView, StyleSheet, View, Pressable } from "react-native"
import { Text, ListItem, Icon, Badge, Avatar, BottomSheet, FAB, Button, Overlay } from "@rneui/themed"
import CountryFlag from "react-native-country-flag"
import { AvatarSrc, DefaultImageSrc } from "../../../constants/ImagesConstants"

//Image picker
import * as ImagePicker from 'expo-image-picker';


//Api
import UpdateImg from "../../../api/User/UpdateProfileImg"
//redux state manegment
import { SetAuthState } from "../../../slices/AuthSlice"
import { useDispatch,useSelector } from "react-redux"

const ProfileInitial = ({ navigation }: { navigation: any }) => {
    const id=useSelector((state:any)=>state.auth.userid)

    const dispatch=useDispatch()
    //states
    const [isShowBottomSheet, SetisShowBottomSheet] = useState(false)
    const [OverlayVisable, setOverlayVisable] = useState(false) //bottom SheetVisiblity
    const [imageUri, setImageUri] = useState<string | null>(null);

    //pick Image
    const PickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,


        })
        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
        console.log(result)
        console.warn(imageUri + "ImagePath")

    }
    //Open Camera
    const openCamera = async () => {

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
        console.log(result)
        console.warn(imageUri + "ImagePath")


    }


    //Update Image
    const HandleLogout=()=>{
        dispatch(SetAuthState(false))
    }

    const toggleOverlay = () => {
        setOverlayVisable(!OverlayVisable)
    }
    interface ListItemProps {
        Component?: React.ComponentType<any>;
    }

    const UserProfileSchema = [

    ]
    //OpenGallary Function On press

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.ProfileSettingContainer}>
                <Overlay onBackdropPress={toggleOverlay} isVisible={OverlayVisable}>
                    <View style={{ padding: 20 }}>
                        <Text style={{ marginBottom: 12 }} h4>Logout😢</Text>
                        <Text>Are you Sure you Want to Logout?</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", columnGap: 10, marginTop: 10 }}>
                            <Button onPress={toggleOverlay} title="Cancel" titleStyle={{ color: "#9E9EA0" }} buttonStyle={{ width: 140, backgroundColor: "#EAEAEB", }} />
                            <Button onPress={HandleLogout} title="Logout" color="error" buttonStyle={{ width: 140 }} />
                        </View>
                    </View>
                </Overlay>
                {/* Avatar container bois to alignItems to the center */}
                <View style={Styles.AvatarContainer} >
                    <Avatar onPress={() => navigation.navigate("ViewProfile")} rounded size={100} source={{ uri: AvatarSrc || DefaultImageSrc }} ><Avatar.Accessory onPress={() => SetisShowBottomSheet(true)} size={25} /></Avatar>
                    <Text>Hi, <CountryFlag size={12} isoCode="pk" /></Text>
                </View>
                {/* List Items Will be map Below ok */}
                <>
                    {/* Account */}

                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10, }}>Account</Text>
                    {/* 1 */}

                    <Pressable onPress={() => navigation.navigate("viewAccount")} style={({ pressed }) => [

                        {
                            backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                        },
                        Styles.ProfileList,
                    ]}>
                        <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="person" type="material" color="#3E4958" />
                        <ListItem.Content>
                            <ListItem.Title style={{ marginLeft: 7 }}>View Profile</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={18} />
                    </Pressable>
                    {/* Shopping */}
                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Shoppings</Text>
                    <Pressable onPress={() => navigation.navigate("Shop", { screen: "Cart" })} style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                        },
                        Styles.ProfileList,
                    ]}>
                        <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="shopping-cart" type="material" color="#3E4958" />
                        <ListItem.Content>
                            <ListItem.Title style={{ marginLeft: 7 }}>Cart</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={18} />
                    </Pressable>

                    {/*  */}
                    <Pressable onPress={() => navigation.navigate("orders")} style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                        },
                        Styles.ProfileList,
                    ]}>
                        <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="local-shipping" type="material" color="#3E4958" />
                        <ListItem.Content>
                            <ListItem.Title style={{ marginLeft: 7 }}>Orders</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={18} />
                    </Pressable>
                    {/*  */}


                    {/* Bookings Card */}
                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Bookings</Text>
                    <Pressable onPress={() => navigation.navigate('bookings')} style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                        },
                        Styles.ProfileList,
                    ]}>
                        <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="car-rental" type="material" color="#3E4958" />
                        <ListItem.Content>
                            <ListItem.Title style={{ marginLeft: 7 }}>Bookings</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={18} />
                    </Pressable>
                    {/* Payment */}
                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Wallet</Text>
                    <Pressable onPress={() => navigation.navigate("Shop", { screen: "wallet" })} style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                        },
                        Styles.ProfileList,
                    ]}>
                        <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="credit-card" type="material" color="#3E4958" />
                        <ListItem.Content>
                            <ListItem.Title style={{ marginLeft: 7 }}>E-Wallet</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={18} />
                    </Pressable>
                    {/* ChatSupport */}
                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Join us</Text>

                    <Pressable onPress={() => navigation.navigate("expertverify")} style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                        },
                        Styles.ProfileList,
                    ]}>
                        <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="engineering" type="material" color="#3E4958" />
                        <ListItem.Content>
                            <ListItem.Title style={{ marginLeft: 7 }}>Become a Buisness Parthner</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={18} />
                    </Pressable>
                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Help</Text>
                    <Pressable onPress={() => navigation.navigate("Support")} style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                        },
                        Styles.ProfileList,
                    ]}>
                        <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="support-agent" type="material" color="#3E4958" />
                        <ListItem.Content>
                            <ListItem.Title style={{ marginLeft: 7 }}>Help & Support</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={18} />
                    </Pressable>
                    {/* More  */}
                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>More</Text>
                    {/* More Container */}
                    <View style={{ borderRadius: 5, marginBottom: 10 }}>
                        {/* settings. */}
                        <Pressable onPress={() => navigation.navigate("settings")} style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                            },
                            Styles.ProfileList,
                        ]}>
                            <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="settings" type="material" color="#3E4958" />
                            <ListItem.Content>
                                <ListItem.Title style={{ marginLeft: 7 }}>Settings</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={18} />
                        </Pressable>
                        {/* Logout */}
                        <Pressable onPress={toggleOverlay} style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                            },
                            Styles.ProfileList,
                        ]}>
                            <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="logout" type="material" color="#3E4958" />
                            <ListItem.Content>
                                <ListItem.Title style={{ marginLeft: 7 }}>Logout</ListItem.Title>
                            </ListItem.Content>

                        </Pressable>
                    </View>
                </>

                <BottomSheet backdropStyle={{ backgroundColor: "rgba(59, 59, 59, 0.404)" }} onBackdropPress={() => SetisShowBottomSheet(false)} isVisible={isShowBottomSheet}>
                    <View style={{ backgroundColor: "#fff", height: 'auto', borderTopStartRadius: 10, borderTopRightRadius: 10 }}>

                        <Pressable onPress={PickImage} style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgb(229,229,229)' : '#fff',
                            }, {
                                display: "flex",
                                flexDirection: 'row',
                                padding: 10
                            }

                        ]}>
                            <Icon reverse reverseColor="#3D3D3D" style={{ marginRight: 7 }} name="upload-file" type="material" color="rgb(229,229,229)" />
                            <ListItem.Content>
                                <ListItem.Title>Upload Profile Image</ListItem.Title>
                            </ListItem.Content>

                        </Pressable>
                        <Pressable onPress={openCamera} style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgb(229,229,229)' : '#fff',
                            }, {
                                display: "flex",
                                flexDirection: 'row',
                                padding: 10
                            }

                        ]}>
                            <Icon reverse reverseColor="#3D3D3D" style={{ marginRight: 7 }} name="photo-camera" type="material" color="rgb(229,229,229)" />
                            <ListItem.Content>
                                <ListItem.Title>Open Camera</ListItem.Title>
                            </ListItem.Content>

                        </Pressable>
                    </View>
                </BottomSheet>
            </ScrollView>

        </>

    )
}
//Stylesheet Please Follow The Hirarchy boyies.
//think container as a shipment contianer and Wrapper as a wrapper on container

const Styles = StyleSheet.create({
    ProfileSettingContainer: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
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
    ProfileList: {
        flex: 1,
        flexDirection: "row",
        padding: 15,
        borderRadius: 2,
    }


})
export default ProfileInitial