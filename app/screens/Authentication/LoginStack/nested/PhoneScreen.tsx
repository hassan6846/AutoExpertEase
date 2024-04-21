import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native"
import React, { useState, useRef, useEffect, createRef } from "react"
import { Button, Icon, Input, Text } from "@rneui/themed"




//Redux
import { useDispatch } from "react-redux"
import { current } from "@reduxjs/toolkit"
import ThemeProviderColors from "../../../../provider/ThemeProvider"
import { SetProgressValueBar } from "../../../../slices/AuthSlice"
import FindUser from "../../../../api/Auth/FindUser"



//Page
const PhoneLogin = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch()

    const InputRef = createRef<any>(); // Create a ref using useRef

    const [Phone, setPhone] = useState("");

    //Functions
    const handleInputChange = (text: any) => {
        setPhone(text);

    };
    //Handle Input Change
    const handleSubmit = () => {
        console.log("CLicker")
    };
    useEffect(() => {
        dispatch(SetProgressValueBar(0.1))
        InputRef.current.focus()
        return () => {
            dispatch(SetProgressValueBar(0))

        }
    }, [InputRef, dispatch])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={{ display: "flex", justifyContent: "center", alignItems: 'center', backgroundColor: "#fff" }}>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.LoginContainer}>
                    <Text style={styles.LoginHeading} h3={true} >Enter Phone Number for Verification</Text>
                    <Text style={styles.LoginSub}>This number will be used for all ride-related communication. You shall receive an SMS with code for verification.</Text>
                    <Input ref={InputRef} onChangeText={handleInputChange} labelStyle={{ marginBottom: 5, fontSize: 10 }} label="Phone" inputContainerStyle={styles.LoginInputCont} rightIcon={<TouchableOpacity activeOpacity={0.7} ><Icon name="close" reverseColor="#66696D" reverse={true} color="#e3e3e3" iconStyle={{ fontSize: 15, fontWeight: "bold" }} type="evilicon" size={8} raised={true} /></TouchableOpacity>} placeholder="923332739790" errorMessage="Sorry! Rate Limit Exceded Please Try Later in 1hr." keyboardType="number-pad" />
                    <Button onPress={() => {

                        navigation.navigate("passlogin")
                        handleSubmit()
                    }} buttonStyle={styles.LoginButton} color="#E04E2F" title="Next" />
                    <Text style={styles.LoginConsent}>By providing my phone number, I hereby agree and accept the <Text style={styles.LoginLink} onPress={() => navigation.push("privacypolicy")}>Terms of Service</Text> and <Text onPress={() => navigation.push("privacypolicy")} style={styles.LoginLink}>Privacy Policy</Text> in use of the  app.</Text>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <Text style={styles.LoginConsent}>Dont have Account</Text>
                        <Button onPress={() => navigation.navigate("RegisterStack")} buttonStyle={{ borderRadius: 30, paddingHorizontal: 6, paddingVertical: 10, }} color={ThemeProviderColors.Light.Primary} containerStyle={{ paddingHorizontal: 60 }} title="Register" />
                    </View>
                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}

//styles
const styles = StyleSheet.create({
    LoginContainer: {
        padding: 30,
        flex: 1,
        backgroundColor: "#fff"
    },
    // ScrollView
    scrollContainer: {
        flexGrow: 1,
    },
    LoginHeading: {
        marginTop: 10,
        textAlign: 'left',
        marginBottom: 15,
    },
    LoginSub: {
        marginBottom: 10,
        color: "#97ADB6",
        textAlign: 'left'
    },
    LoginInputCont: {
        width: "100%",
        borderRadius: 5,
        marginBottom: 2,
        padding: 2,
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    LoginButton: {
        padding: 12,
        borderRadius: 10,

    },

    LoginLink: {
        textDecorationLine: "underline",
        fontWeight: "500",
        color: "#E04E2F"
    },
    LoginConsent: {
        marginTop: 10,
        color: "#97ADB6",
        padding: 5,
        textAlign: "center"
    }

})
export default PhoneLogin;
