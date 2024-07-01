import { KeyboardAvoidingView, ScrollView, StyleSheet, View,ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Icon, Text, Input } from "@rneui/themed";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { getHeight } from '../../../../utils/GetDimension';
import { deviceName, brand } from "expo-device";
import { useDispatch } from 'react-redux';
import { SetFirstName, SetLastName, SetEmail, SetPhone, SetDeviceName, SetDeivceBrand, SetPassword } from "../../../../slices/AuthSlice";

const EnterName = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(SetDeviceName(deviceName));
    dispatch(SetDeivceBrand(brand));
  }, [dispatch]);

  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      email &&
      phone &&
      password &&
      password === repeatPassword
    );
  };

  const handleNext = async () => {
    if (!isFormValid()) return;

    setLoading(true);
    dispatch(SetFirstName(firstName));
    dispatch(SetLastName(lastName));
    dispatch(SetEmail(email));
    dispatch(SetPhone(phone));
    dispatch(SetPassword(password));

    try {
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        navigation.navigate("verifyemailotp");
      } else {
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <ScrollView contentContainerStyle={{ justifyContent: "center" }} style={{ flex: 1, marginTop: 20 }}>
        {/* Profile View */}
        <View style={Styles.ProfileIcon}>
          <Icon size={40} type='material' name='person' raised={true} />
        </View>
        {/* Profile View */}
        <Text style={Styles.Heading} h4>Create Your Account</Text>
        <Text style={Styles.subheading}>Please Enter Info to Create your Account </Text>
        <Text style={Styles.subheading}>{deviceName} </Text>
        <View style={Styles.InputContainer}>
          <Input
            inputContainerStyle={Styles.InputVoid}
            labelStyle={{ fontSize: 13, marginBottom: 5, marginTop: 10 }}
            inputStyle={Styles.InputMain}
            containerStyle={Styles.InputCont}
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={Styles.InputContainer}>
          <Input
            inputContainerStyle={Styles.InputVoid}
            labelStyle={{ fontSize: 13, marginBottom: 5, marginTop: 10 }}
            inputStyle={Styles.InputMain}
            containerStyle={Styles.InputCont}
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={Styles.InputContainer}>
          <Input
            inputContainerStyle={Styles.InputVoid}
            labelStyle={{ fontSize: 13, marginBottom: 5, marginTop: 10 }}
            inputStyle={Styles.InputMain}
            containerStyle={Styles.InputCont}
            label="Email"
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={Styles.InputContainer}>
          <Input
            inputContainerStyle={Styles.InputVoid}
            labelStyle={{ fontSize: 13, marginBottom: 5, marginTop: 10 }}
            inputStyle={Styles.InputMain}
            containerStyle={Styles.InputCont}
            label="Phone"
            placeholder="Enter Phone"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={Styles.InputContainer}>
          <Input
            inputContainerStyle={Styles.InputVoid}
            labelStyle={{ fontSize: 13, marginBottom: 5, marginTop: 10 }}
            inputStyle={Styles.InputMain}
            containerStyle={Styles.InputCont}
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={Styles.InputContainer}>
          <Input
            inputContainerStyle={Styles.InputVoid}
            labelStyle={{ fontSize: 13, marginBottom: 5, marginTop: 10 }}
            inputStyle={Styles.InputMain}
            containerStyle={Styles.InputCont}
            label="Repeat Password"
            placeholder="Repeat Password"
            secureTextEntry
            value={repeatPassword}
            onChangeText={setRepeatPassword}
          />
        </View>
        <Button
      
          onPress={handleNext}
          buttonStyle={{ borderRadius: 30, paddingHorizontal: 6, paddingVertical: 10 }}
          color={ThemeProviderColors.Light.Primary}
          containerStyle={{ paddingHorizontal: 60, marginTop: 10 }}
      
          disabled={!isFormValid() || loading }
        >
       {loading ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#fff', marginRight: 10 }}>Signing Up...</Text>
              <ActivityIndicator color="#fff" />
            </View>
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#fff', marginRight: 5 }}>Next</Text>
              <Icon name='arrow-right-alt' color="#fff" type='material' />
            </View>
          )}
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  Heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  subheading: {
    color: "#97ADB6",
    textAlign: "center"
  },
  InputContainer: {
    marginTop: 20,
    height: getHeight / 15,
    justifyContent: "center",
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
    width: "100%",
  },
  ProfileIcon: {
    alignItems: "center"
  }
});

export default EnterName;
