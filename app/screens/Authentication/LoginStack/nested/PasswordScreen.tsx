import React, { useState, useEffect, createRef } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid } from 'react-native';
import { Button, Icon, Input, Text } from "@rneui/themed";
import { useDispatch, useSelector } from 'react-redux';
import { SetPassword, SetAuthState,SetUserId,SetProgressValueBar,SetHeaderColor} from "../../../../slices/AuthSlice";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { getHeight } from '../../../../utils/GetDimension';

const PasswordScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const phone = useSelector((state: any) => state.auth.phone);
  const password = useSelector((state: any) => state.auth.password);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const InputRef = createRef<any>();

  const handleInputChange = (text: any) => {
    dispatch(SetPassword(text));
    setError(''); // Clear error message when input changes
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });

      if (!response.ok) {
        // Handle non-successful response status codes (e.g., 401 Unauthorized)
        if (response.status === 401) {

          setError(await ("Error Invalid Password") );
        } 
        setLoading(false);
        return; // Stop execution if response status is not ok
      }

      const data = await response.json();
      console.log('Login response:', data.success);
      dispatch(SetUserId(data.user._id))
      dispatch(SetAuthState(true));
      navigation.navigate('Home');

      // Show success toast
      ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('An error occurred. Please try again later.');
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(SetProgressValueBar(0.8))
    
    dispatch(SetHeaderColor('#49AF41'))
    if (InputRef.current) {
      InputRef.current.focus(); 
    }
  }, [InputRef]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={Styles.scrollContainer}>
        <View style={Styles.LoginPassContainer}>
          <Text style={Styles.Header} h4>Account Password Entry</Text>
          <Text style={Styles.Subheading}>Enter Password No OTP Verification Required During Login Your Account.</Text>
          <View style={Styles.LockContainer}>
            <Icon containerStyle={{ justifyContent: "center" }} iconStyle={{ color: "#97ADB6" }} reverseColor='#007787' raised={true} type='material' name='lock' size={43} />
          </View>
          <View style={Styles.InputWraper}>
            <Input
              ref={InputRef}
              onChangeText={handleInputChange}
              inputContainerStyle={Styles.InputVoid}
              value={password}
              inputStyle={Styles.InputMain}
              containerStyle={Styles.InputCont}
              placeholder="Enter Password"
              secureTextEntry
            />
          </View>
          <Button onPress={handleLogin} containerStyle={{ paddingHorizontal: 40 }} color={ThemeProviderColors.Light.Primary} title={loading ? 'Logging In...' : 'Login'} />
          {/* Display error message if there is an error */}
          {error ? <Text style={Styles.errorText}>{error}</Text> : null}
          <View style={Styles.ResendOtpContainer}>
            <Text style={{ color: "#97ADB6" }}> Didn't Remember Password?</Text>
            <Text style={{ color: ThemeProviderColors.Light.Primary }}>Reset Password </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  LoginPassContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  Header: {
    marginTop: getHeight / 7,
    textAlign: "center",
  },
  Subheading: {
    marginTop: 10,
    color: "#97ADB6",
    textAlign: "center",
    paddingHorizontal: 60,
  },
  LockContainer: {
    marginTop: 10,
    alignItems: "center",
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
    fontSize: 12,
  },
  InputMain: {
    paddingLeft: 10,
    fontSize: 14,
  },
  InputCont: {
    width: "90%",
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default PasswordScreen;
