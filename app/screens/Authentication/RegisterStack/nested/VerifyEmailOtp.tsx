import { View, StyleSheet, Image, KeyboardAvoidingView, ActivityIndicator,ToastAndroid} from 'react-native';
import React, { useState } from 'react';

//library
import { Button, Text } from "@rneui/themed";
import Input from "react-native-otp-textinput";
//utils
import { EmailOtp } from '../../../../constants/ImagesConstants';
import { getHeight } from '../../../../utils/GetDimension';
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const VerifyEmailOtp = ({ navigation }: { navigation: any }) => {
  const firstname = useSelector((state: any) => state.auth.firstName);
  const lastname = useSelector((state: any) => state.auth.lastName);
  const phone = useSelector((state: any) => state.auth.phone); //Email
  const password = useSelector((state: any) => state.auth.password);
  const email = useSelector((state: any) => state.auth.Email); //Email
  const brand = useSelector((state: any) => state.auth.deviceBrand);
  const deviceName = useSelector((state: any) => state.auth.deviceName);

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFinish = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://10.0.2.2:4001/api/verifyemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        // OTP verified, now proceed to register the user
        const registerResponse = await fetch('http://10.0.2.2:4001/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname,
            lastname,
            phone,
            password,
            email,
            brand,
            devicename: deviceName,
          }),
        });
       //Error Data
        if (registerResponse.ok) {
          // Registration successful, navigate to login
          console.log("User Created")
          ToastAndroid.show('Account created successfully. You can login now.', ToastAndroid.SHORT);
          navigation.navigate('LoginStack');
        } else {
         
          setError("Invalid Credientials Typed..");
        }
      } else {
        console.log(error)
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', );
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={Styles.EmailOtp}>
      <ScrollView>
        {/* ImageContainer */}
        <View style={Styles.ImageContainer}>
          <Image style={{ height: getHeight / 4, resizeMode: "contain" }} source={{ uri: EmailOtp }} />
        </View>
        {/* ImageContainer ENDS */}
        <Text style={Styles.heading} h4>Email Verification</Text>
        <Text style={Styles.SubHeading}>The Email Verification Code is being sent to {email}</Text>
        <Input
          containerStyle={{ paddingHorizontal: 40 }}
          textInputStyle={{ borderWidth: 2, borderBottomWidth: 2, borderRadius: 5, justifyContent: "space-around" }}
          tintColor={ThemeProviderColors.Light.Primary}
          handleTextChange={setOtp}
          inputCount={4}
        />
        {error ? <Text style={Styles.errorText}>{error}</Text> : null}
        <Button
          containerStyle={{ paddingHorizontal: 30, marginTop: 10 }}
          color={ThemeProviderColors.Light.Primary}
          title={loading ? <ActivityIndicator color="#fff" /> : "Finish"}
          onPress={handleFinish}
          disabled={loading}
        />
        {/* STARTOVER CONTAINER */}
        <View style={Styles.StartOver}>
          <Text style={{ color: "#97ADB6" }}>Didn't Receive Code in E-Mail?</Text>
          <Text style={{ color: ThemeProviderColors.Light.Primary }} >StartOver</Text>
        </View>
        {/* STARTOVER CONTAINER */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  EmailOtp: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImageContainer: {
    marginTop: 60,
  },
  heading: {
    textAlign: 'center',
    marginTop: 20,
  },
  SubHeading: {
    textAlign: 'center',
    marginTop: 10,
    color: "#97ADB6",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  StartOver: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default VerifyEmailOtp;
