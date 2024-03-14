//modules and Libarary
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native"
const getHeight = Dimensions.get("screen").height
import React, { useEffect, useState, useRef, useMemo } from "react"
import CustomButton from "../../components/ButtonProps/ButtonProps"
import OtpInput from "react-native-otp-textinput"
import { Text } from "@rneui/themed"
import ThemeProviderColors from "../../provider/ThemeProvider"
//utils

// OTP VERIFY COMPONENT...

const OtpPage = ({ navigation }: { navigation: any }) => {
    // Truncute or hide Number for profesionlism please🤏
    const phoneNumber = "9230048152";
    const maskedNumber = phoneNumber.slice(0, 4) + "****" + phoneNumber.slice(-4);
    // OTP FIELD STATES



    return (
        <View style={Styles.OtpContainer}>
            <View style={{ marginTop: getHeight / 9 }}>
                <Text style={{ textAlign: "center", fontWeight: "bold", marginBottom: 40 }} h4 >An Otp Has Been Sent to your Phone</Text>
                <Text style={Styles.otpSub}>A Code has been Send to <Text style={{ fontWeight: "bold" }}>+{maskedNumber}</Text>  {""}via Sms check messsage inbox </Text>
                <OtpInput textInputStyle={{ borderColor: "red", borderWidth: 1, borderBottomWidth: 1, borderRadius: 5 }} containerStyle={{ marginTop: 16 }} keyboardType="numeric" tintColor={ThemeProviderColors.Light.Primary} inputCount={4} />
                <Text style={{ textAlign: "center", fontSize: 12, marginBottom: 20, marginTop: 10, textDecorationLine: "underline" }}>Resend code in 1:00</Text>
                <CustomButton function={() => navigation.navigate("AuthEmail")} title="Verify" />

            </View>


        </View>
    )
}
// styles 
const Styles = StyleSheet.create({
    OtpContainer: {
        padding: 30,
        justifyContent: "flex-start",
        alignItems: "center",

        backgroundColor: "#fff",
        flex: 1,
    }, otpSub: {
        textAlign: "center",
        color: "#97ADB6"
    }
})
export default OtpPage;


