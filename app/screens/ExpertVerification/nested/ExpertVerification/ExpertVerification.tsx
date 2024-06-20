import { ScrollView, StyleSheet, KeyboardAvoidingView, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Text, Avatar } from "@rneui/themed";
import InputComponent from '../../../../components/InputComponent/InputComponent';
import DateTimePicker from "@react-native-community/datetimepicker";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import * as ImagePicker from 'expo-image-picker';
import { cnicBack,cnicFront, DefaultImageSrc} from '../../../../constants/ImagesConstants';

const ExpertVerification = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState(new Date());
  const [cnic, setCnic] = useState('');
  const [frontCnicUri, setFrontCnicUri] = useState(cnicFront);
  const [backCnicUri, setBackCnicUri] = useState(cnicBack);
  const [selfieUri, setSelfieUri] = useState(DefaultImageSrc);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
    setIsDateSelected(true);
  };

  const pickImage = async (setImageUri: React.Dispatch<React.SetStateAction<string>>) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      dob: dob.toDateString(),
      cnic,
      frontCnicUri,
      backCnicUri,
      selfieUri,
    };
    Alert.alert('Form Data', JSON.stringify(formData));
  };

  const isFormComplete = firstName && lastName && email && phoneNumber && isDateSelected && cnic && frontCnicUri && backCnicUri && selfieUri;

  return (
    <ScrollView style={Styles.ExpertVerifyContainer}>
      <KeyboardAvoidingView style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, height: "auto", marginBottom: 50 }}>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Basic Info</Text>
        <InputComponent label="First Name" placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <InputComponent label="Last Name" placeholder="Last Name" value={lastName} onChangeText={setLastName} />
        <InputComponent label="E-Mail" placeholder="Email" value={email} onChangeText={setEmail} />
        <InputComponent label="Phone Number" placeholder="Phone No. Should be Active" value={phoneNumber} onChangeText={setPhoneNumber} />

        <InputComponent
          label="Date of Birth"

          placeholder="Date of Birth Should Match Cnic"
          value={isDateSelected ? dob.toDateString() : ''}
          onFocus={() => setShowDatePicker(true)}
          disabled={false}
        />
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dob}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>ID Confirmation</Text>
        <InputComponent label="Cnic No." placeholder="Enter Your Cnic no." value={cnic} onChangeText={setCnic} />

        <View style={Styles.AvatarContainer}>
          <Avatar source={{ uri: frontCnicUri }} avatarStyle={Styles.AvatarStyles} containerStyle={Styles.CnicAvatar} size={200} />
          <Text style={{ color: ThemeProviderColors.Light.FontSubHeading, marginTop: 10 }}>Upload Front Side of Cnic</Text>
          <Button buttonStyle={{ marginTop: 10 }} containerStyle={{ width: '40%' }} title="Upload" onPress={() => pickImage(setFrontCnicUri)} />
        </View>

        <View style={Styles.AvatarContainer}>
          <Avatar source={{ uri: backCnicUri }} avatarStyle={Styles.AvatarStyles} containerStyle={Styles.CnicAvatar} size={200} />
          <Text style={{ color: ThemeProviderColors.Light.FontSubHeading, marginTop: 10 }}>Upload Back Side of Cnic</Text>
          <Button buttonStyle={{ marginTop: 10 }} containerStyle={{ width: '40%' }} title="Upload" onPress={() => pickImage(setBackCnicUri)} />
        </View>

        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Facial Verification</Text>
        
        <View style={Styles.AvatarContainer}>
          <Avatar source={{ uri: selfieUri }} avatarStyle={Styles.AvatarStyles} containerStyle={Styles.AvatarStyles} size={200} />
          <Text style={{ color: ThemeProviderColors.Light.FontSubHeading, marginTop: 10 }}>Upload your Selfie</Text>
          <Button buttonStyle={{ marginTop: 10 }} containerStyle={{ width: '40%' }} title="Upload" onPress={() => pickImage(setSelfieUri)} />
        </View>

        <Button 
          color={ThemeProviderColors.Light.Primary} 
          buttonStyle={Styles.ButtonStyle} 
          title="Submit Form"
          onPress={handleSubmit}
          disabled={!isFormComplete}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  ExpertVerifyContainer: {
    flex: 1,
    padding: 20,
  },
  ButtonStyle: {
    borderRadius: 5
  },
  AvatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  AvatarStyles: {
    borderRadius: 5
  },
  CnicAvatar: {
    borderRadius: 5,
    width: '90%'
  }
});

export default ExpertVerification;
