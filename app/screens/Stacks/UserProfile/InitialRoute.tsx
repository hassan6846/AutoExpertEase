import { useState, useEffect } from "react"
import { ScrollView, StyleSheet, View, Pressable,Alert } from "react-native"
import { Text, ListItem, Icon, Avatar, BottomSheet, Button, Overlay } from "@rneui/themed"
import CountryFlag from "react-native-country-flag"

//Image picker
import * as ImagePicker from 'expo-image-picker';


//Api

//redux state manegment
import { SetAuthState } from "../../../slices/AuthSlice"
import {SetAvatar} from "../../../slices/UserSlice"
import { useDispatch, useSelector } from "react-redux"

const ProfileInitial = ({ navigation }: { navigation: any }) => {
    const id = useSelector((state: any) => state.auth.userid)
    const avatar = useSelector((state: any) => state.user.avatar)

    const dispatch = useDispatch()
    //states
    const [isShowBottomSheet, SetisShowBottomSheet] = useState(false)
    const [OverlayVisable, setOverlayVisable] = useState(false) //bottom SheetVisiblity
    const [imageUri, setImageUri] = useState<any>("");

    const PickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
            base64: true,
            allowsMultipleSelection: false,
        })
        if (!result.canceled) {
            //convert this to 
            setImageUri(result.assets[0].base64)
          
             UploadImage(imageUri)
        }
    }
    //Upload Image to Server
    const UploadImage = async (image:any) => {
        try {

            const response = await fetch('http://10.0.2.2:4001/api/avatar/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id:id,image:image}) // Send image data in the request body
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // Handle success response here if needed
            const data = await response.json();
         
            dispatch(SetAvatar(data.avatarUrl))

        } catch (error) {
            console.log('Error Uploading avatar:', error);
        }
    }
    //Handle Logout
    const HandleLogout = () => {
        dispatch(SetAuthState(false))
    }
    //Show Upload Image..
    const toggleOverlay = () => {
        setOverlayVisable(!OverlayVisable)
    }
    //Check is Expert..
     const isExpert=async ()=>{
        try {
            //get request
            const response = await fetch(`http://10.0.2.2:4001/api/check-expert/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response body as JSON
            const data= await response.json();
            //check if expert
            if(data.isExpert){
                navigation.navigate('Expert')
            }else{
                Alert.alert(
                    'Information',
                    'You are not verified to use this feature. Kindly verify your account through the kyc verification process to Start earning',
                    [
                      { text: 'Verify Now', onPress: () => navigation.navigate('expertverify',{screen:"expertverification"}) },
                      { text: 'Not now'},
                    ],
                    { cancelable: false }
                    
                  );
            }
        } catch (error) {
             console.log('Error:', error);
        }
     }
     //Check is Vendor..
     const isVendor=async ()=>{
        try {
            //get request
            const response = await fetch(`http://10.0.2.2:4001/api/check-vendor/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response body as JSON
            const data= await response.json();
            console.log(data)
            //check if expert
            if(data.isVendor){
                navigation.navigate('seller')
            }else{
                Alert.alert(
                    'Information',
                    'You are not Registered as a Vendor. Kindly register as a vendor to start earning',
                    [
                      { text: 'Verify Now', onPress: () => navigation.navigate('expertverify',{screen:"vendorverification"}) },
                      { text: 'Not now'},
                    ],
                    { cancelable: false }
                    
                  );
            }
        } catch (error) {
             console.log('Error:', error);
        }
     }
    // Log imageUri whenever it changes
    useEffect(() => {
    // Show alert on useffect
    Alert.alert(
        'Information',
        'You are not verified to use this feature. Kindly verify your account through the kyc verification process.',
        [
          { text: 'OK'},
        ],
        { cancelable: false }
      );
    }, [imageUri]);

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
                    <Avatar onPress={() => navigation.navigate("ViewProfile")} rounded size={100} source={{ uri: avatar }} ><Avatar.Accessory onPress={() => SetisShowBottomSheet(true)} size={25} /></Avatar>
                    <Text><CountryFlag size={12} isoCode="pk" /> {id} </Text>
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
                    <Text h4 style={{ marginTop: 8, marginBottom: 2, marginLeft: 10 }}>Manage</Text>

                    <Pressable onPress={isExpert}  style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                            },
                            Styles.ProfileList,
                        ]}>
                            <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="engineering" type="material" color="#3E4958" />
                            <ListItem.Content>
                                <ListItem.Title style={{ marginLeft: 7 }}>Expert DashBoard</ListItem.Title>
                            
                            </ListItem.Content>
                            <ListItem.Chevron size={18} />
                        </Pressable>
                        {/* Manage Store */}
                        <Pressable onPress={isVendor} style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                            },
                            Styles.ProfileList,
                        ]}>
                            <Icon backgroundColor="#EAEAEB" iconStyle={{ padding: 8, borderRadius: 5 }} name="store" type="material" color="#3E4958" />
                            <ListItem.Content>
                                <ListItem.Title style={{ marginLeft: 7 }}>Manage Store</ListItem.Title>
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

{/* Bottom SHeet DOnt Touch THis shit */}
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