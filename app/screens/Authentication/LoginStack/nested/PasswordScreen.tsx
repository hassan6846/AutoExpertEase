import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button, Icon, Text, Input } from "@rneui/themed";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { getHeight } from '../../../../utils/GetDimension';
import { useDispatch, useSelector } from 'react-redux';
import { SetPassword } from "../../../../slices/AuthSlice";

const PasswordScreen = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state: any) => state.auth.phone);
  const password = useSelector((state: any) => state.auth.password);

  // Handle Text Input
  const handleInputChange = (text: any) => {
    dispatch(SetPassword(text));
  };

  // Handle login button press
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      // Handle successful login here (e.g., store token, navigate to next screen, etc.)
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error here (e.g., display error message to user)
    }
  };

  return (
    <View style={Styles.LoginPassContainer}>
      <Text style={Styles.Header} h4>Account Password Entry</Text>
      <Text style={Styles.Subheading}>Enter Password No OTP Verification Required During Login Your Account.</Text>
      <View style={Styles.LockContainer}>
        <Icon containerStyle={{ justifyContent: "center" }} iconStyle={{ color: "#97ADB6" }} reverseColor='#007787' raised={true} type='material' name='lock' size={43} />
      </View>
      {/* Inputs */}
      <View style={Styles.InputWraper}>
        <Input onChangeText={handleInputChange} inputContainerStyle={Styles.InputVoid} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} placeholder={phone} />
      </View>
      {/* Input */}
      <Button onPress={handleLogin} containerStyle={{ paddingHorizontal: 40 }} color={ThemeProviderColors.Light.Primary} title="Login" />
      {/* Resend OTp view */}
      <View style={Styles.ResendOtpContainer}>
        <Text style={{ color: "#97ADB6" }}>Didn't Remember Password?</Text>
        <Text style={{ color: ThemeProviderColors.Light.Primary }}>Reset Password </Text>
      </View>
      {/* Resend otp Ends */}
    </View>
  );
};

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
});

export default PasswordScreen;
