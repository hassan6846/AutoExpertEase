
import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Image, ScrollView } from 'react-native'
//library
import { Text, Button } from "@rneui/themed"
import OtpInput from "react-native-otp-textinput"
//utils
import { OtpImage } from '../../../../constants/ImagesConstants'
import ThemeProviderColors from '../../../../provider/ThemeProvider'
const VerifyOtp = ({ navigation }: { navigation: any }) => {
  return (
    <KeyboardAvoidingView style={Styles.OtpContainer}>
      <ScrollView>
        <View style={{ marginTop: 50 }}>
          <Image style={{ height: 240, objectFit: "contain" }} source={{ uri: OtpImage }} />
        </View>
        <Text h3 style={{ textAlign: "center", marginTop: 50 }}>Verify Phone</Text>
        <Text style={Styles.Subheading}>Enter the One-Time-Password (OTP) Being Send to The +923332738198</Text>
        <OtpInput containerStyle={{ paddingHorizontal: 50, marginTop: 10 }} inputCount={4} tintColor={ThemeProviderColors.Light.Primary} />
        <Button onPress={()=>navigation.navigate('verifyemailotp')} containerStyle={{ paddingHorizontal: 40, marginTop: 30 }} color={ThemeProviderColors.Light.Primary} title="Verify" />
        {/* Resend OTP */}
        <View style={Styles.OtpResendCont}>
          <Text style={Styles.Subheading}>Didn't you Recieve Otp?</Text>
          <Text style={Styles.ResendLink}>Resend OTP </Text>
        </View>
        {/* Resend OTP */}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const Styles = StyleSheet.create({
  OtpContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Subheading: {
    color: "#97ADB6",
    textAlign: "center"

  },
  OtpResendCont: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    justifyContent: "center",
    marginTop: 5,


  },
  ResendLink: {
    fontWeight: "800",
    color: ThemeProviderColors.Light.Primary
  }
})
export default VerifyOtp