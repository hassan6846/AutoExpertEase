//modules and Libarary
import { SafeAreaView, View, StyleSheet, Pressable } from "react-native"
import React, { useEffect, useState, useRef, useMemo } from "react"
import CustomButton from "../../components/ButtonProps/ButtonProps"
import { } from "lottie-react-native"
import { Text } from "@rneui/themed"
//utils

// OTP VERIFY COMPONENT...

const OtpPage = ({ navigation }: { navigation: any }) => {
    // Truncute or hide Number for profesionlism please🤏
    const phoneNumber = "9230048152";
    const maskedNumber = phoneNumber.slice(0, 4) + "****" + phoneNumber.slice(-4);
    // OTP FIELD STATES

    
    return (
        <View style={Styles.OtpContainer}>
            <View>
                <Text style={Styles.otpSub}>A Code has been Send to <Text style={{ fontWeight: "bold" }}>+{maskedNumber}</Text>  {""}via Sms check messsage inbox </Text>
            </View>
          
            <CustomButton function={()=>navigation.navigate("AuthEmail")}  title="Verify" />
   
        </View>
    )
}
// styles 
const Styles = StyleSheet.create({
    OtpContainer: {
        padding: 30,

        backgroundColor: "#fff",
        flex: 1,
    }, otpSub: {
        textAlign: "center",
        color: "#97ADB6"
    }
})
export default OtpPage;


