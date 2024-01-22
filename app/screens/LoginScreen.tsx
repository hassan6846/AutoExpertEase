import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from "react-native"
import { useRef, useState, useEffect, createRef } from "react"

import { StatusBar } from "expo-status-bar"
import { Button, Icon, Input, Text } from "@rneui/themed"
//Page
const LoginPage = () => {
    const InputRef = createRef()
    const [Phone, SetPhone] = useState("")
    //InputErrors

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.LoginContainer}>
                    <StatusBar />
                    <Text style={styles.LoginHeading} h3={true} >Enter Phone Number for Verification</Text>
                    <Text style={styles.LoginSub}>This number will be used for all ride-related communication. You shall receive an SMS with code for verification.</Text>
                    <Input inputContainerStyle={styles.LoginInputCont} rightIcon={<TouchableOpacity activeOpacity={0.7} ><Icon name="close" reverseColor="#66696D" reverse={true} color="#e3e3e3" iconStyle={{ fontSize: 15, fontWeight: "bold" }} type="evilicon" size={8} raised={true} /></TouchableOpacity>} leftIcon={<Image style={{ width: 35, height: 30, shadowColor: "red" }} source={require('../assets/pakflag.png')} />} placeholder="+92 399 3148142" errorMessage="Sorry! Rate Limit Exceded Please Try Later in 1hr." keyboardType="number-pad" />
                    <Button buttonStyle={styles.LoginButton} color="#E04E2F" title="Send Otp" />
                    <Text style={styles.LoginConsent}>By providing my phone number, I hereby agree and accept the <Text style={styles.LoginLink}>Terms of Service</Text> and <Text style={styles.LoginLink}>Privacy Policy</Text> in use of the  app.</Text>
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
        marginBottom: 14,
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
        padding: 5,
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
export default LoginPage;
