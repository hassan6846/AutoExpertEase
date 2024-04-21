import { View, StyleSheet } from 'react-native'
import React from 'react'
//library
import { Button, Icon, Text, Input } from "@rneui/themed"
//utils
import ThemeProviderColors from '../../../../provider/ThemeProvider'
import { getHeight } from '../../../../utils/GetDimension'

const PasswordScreen = () => {
  return (
    <View style={Styles.LoginPassContainer}>
      <Text style={Styles.Header} h4>Account Password Entry</Text>
      <Text style={Styles.Subheading}>Enter Password No OTP Verification Required During Login Your Account.</Text>
      <View style={Styles.LockContainer}>
        <Icon containerStyle={{ justifyContent: "center" }} iconStyle={{ color: "#97ADB6" }} reverseColor='#007787' raised={true} type='material' name='lock' size={43} />
      </View>
      {/* Inputs */}
      <View style={Styles.InputWraper}>
        <Input inputContainerStyle={Styles.InputVoid} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} placeholder="Password" />

      </View>
      {/* Input */}
      <Button containerStyle={{ paddingHorizontal: 40, }} color={ThemeProviderColors.Light.Primary} title="Verify" />
      {/* Resend OTp view */}
      <View style={Styles.ResendOtpContainer}>
        <Text style={{ color: "#97ADB6" }}>Didn't Remember Password?</Text>
        <Text style={{ color: ThemeProviderColors.Light.Primary }}>Reset Password </Text>
      </View>
      {/* Resend otp Ends */}
    </View>
  )
}
const Styles = StyleSheet.create({
  LoginPassContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Header: {
    marginTop: getHeight / 7,
    textAlign: "center"
  },
  Subheading: {
    marginTop: 10,

    color: "#97ADB6",
    textAlign: "center",
    paddingHorizontal: 60
  },
  LockContainer: {
    marginTop: 10,
    alignItems: "center"
  },
  ResendOtpContainer: {
    justifyContent: "center",
    marginTop: 10,
    flexDirection: 'row',
    columnGap: 5,
  },
  // Styles Inputs.
  InputWraper: {
    marginTop: 10,
    alignItems: "center",
  },
  InputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12
  },
  InputMain: {
    paddingLeft: 10,
    fontSize: 14
  },
  InputCont: {
    width: "90%"
  }
})
export default PasswordScreen