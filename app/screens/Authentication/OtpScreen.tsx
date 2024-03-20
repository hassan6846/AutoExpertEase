//modules and Libarary
import { View, StyleSheet } from "react-native"
import React, { useEffect, createRef } from "react"


import OtpInput from "react-native-otp-textinput"
import { Text } from "@rneui/themed"


import CustomButton from "../../components/ButtonProps/ButtonProps"
import ThemeProviderColors from "../../provider/ThemeProvider"
import { getHeight } from "../../utils/GetDimension"

//stateRedux

import { SetHeaderColor, SetProgressValueBar } from "../../slices/AuthSlice"
import { useDispatch, useSelector } from "react-redux"


const OtpPage = ({ navigation }: { navigation: any }) => {
    // Truncute or hide Number for profesionlism please🤏
    const phoneNumber = "9230048152";
    const maskedNumber = phoneNumber.slice(0, 4) + "****" + phoneNumber.slice(-4);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SetHeaderColor("#E04E2F"))
        dispatch(SetProgressValueBar(0.4))
        //focus
    


        // Return a cleanup function to revert state or dispatch actions when unmounting
        return () => {
            dispatch(SetHeaderColor("#E04E2F")); // Revert header color to initial value
            dispatch(SetProgressValueBar(0.1)); // Revert progress value to initial value
        };
    }, [dispatch])



    return (
        <View style={Styles.OtpContainer}>
            <View style={{ marginTop: getHeight / 9 }}>
                <Text style={{ textAlign: "center", fontWeight: "bold", marginBottom: 40 }} h4 >An Otp Has Been Sent to your Phone</Text>
                <Text style={Styles.otpSub}>A Code has been Send to <Text style={{ fontWeight: "bold" }}>+{maskedNumber}</Text>  {""}via Sms check messsage inbox </Text>
                <OtpInput  autoFocus={true} textInputStyle={{ borderColor: "red", borderWidth: 1, borderBottomWidth: 1, borderRadius: 5 }} containerStyle={{ marginTop: 16 }} keyboardType="numeric" tintColor={ThemeProviderColors.Light.Primary} inputCount={4} />
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


