import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Text, Avatar, Button } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelector } from 'react-redux';
import InputComponent from '../../../../components/InputComponent/InputComponent';
import {
  cnicBack,
  cnicFront,
  DefaultImageSrc, // Assuming you have a constant for default image source
} from '../../../../constants/ImagesConstants';
import ThemeProviderColors from '../../../../provider/ThemeProvider';

const ExpertVerification = () => {
  const id = useSelector((state: any) => state.auth.userid);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState(new Date());
  const [cnic, setCnic] = useState('');
  const [frontCnicUri, setFrontCnicUri] = useState('');
  const [backCnicUri, setBackCnicUri] = useState('');
  const [selfieUri, setSelfieUri] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);

  // Function to handle date change
  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
    setIsDateSelected(true);
  };

  // Function to pick image and update respective state
  const pickImage = async (setImageUri: React.Dispatch<React.SetStateAction<any>>, imageType: 'frontCnic' | 'backCnic' | 'selfie') => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.1,
      base64: true
    });

    if (!result.canceled) {
      // Update state based on imageType
      switch (imageType) {
        case 'frontCnic':
          setFrontCnicUri(`data:image/jpeg;base64,${result.assets[0].base64}`);
          console.log(`Front CNIC base64: ${result.assets[0].base64}`);
          break;
        case 'backCnic':
          setBackCnicUri(`data:image/jpeg;base64,${result.assets[0].base64}`);
          console.log(`Back CNIC base64: ${result.assets[0].base64}`);
          break;
        case 'selfie':
          setSelfieUri(`data:image/jpeg;base64,${result.assets[0].base64}`);
          console.log(`Selfie base64: ${result.assets[0].base64}`);
          break;
        default:
          break;
      }
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    const response = await fetch('http://10.0.2.2:4001/api/apply-expert', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        userid: id,
        email: email,
        phone: phoneNumber,
        dateofbirth: dob.toISOString(),
        cnicno: cnic,
        cnicfront: frontCnicUri,
        photo: selfieUri,
        cnicback: backCnicUri,
      })
    });

    const data = await response.json();
    console.log(data);
    if(response.status===409){
      Alert.alert('Error', 'You have already applied for Expert we will notify you after approval');
      return;
    }
    // Handle response as needed
    // For example, show an alert or navigate to a new screen
    Alert.alert('Form Submitted', 'Your expert application has been submitted successfully!');
  };

  // Check if all form fields are complete
  const isFormComplete = firstName && lastName && email && phoneNumber && isDateSelected && cnic && frontCnicUri && backCnicUri && selfieUri;

  return (
    <ScrollView style={Styles.ExpertVerifyContainer}>
      <View style={Styles.formContainer}>
        <Text style={Styles.heading}>Basic Info</Text>
        <InputComponent label="First Name" placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <InputComponent label="Last Name" placeholder="Last Name" value={lastName} onChangeText={setLastName} />
        <InputComponent label="E-Mail" placeholder="Email" value={email} onChangeText={setEmail} />
        <InputComponent label="Phone Number" placeholder="Phone No. Should be Active" value={phoneNumber} onChangeText={setPhoneNumber} />

        <InputComponent
          label="Date of Birth"
          placeholder="Date of Birth Should Match CNIC"
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

        <Text style={Styles.heading}>ID Confirmation</Text>
        <InputComponent label="CNIC No." placeholder="Enter Your CNIC No." value={cnic} onChangeText={setCnic} />

        {/* Front CNIC Avatar */}
        <View style={Styles.avatarContainer}>
          <Avatar
          containerStyle={{width:"90%"}}
            source={{ uri: frontCnicUri ? frontCnicUri : cnicFront }} // Use frontCnicUri or default image
            size={200}
            avatarStyle={Styles.avatar}
          />
          <Text style={Styles.label}>Upload Front Side of CNIC</Text>
          <Button
            title="Upload"
            onPress={() => pickImage(setFrontCnicUri, 'frontCnic')}
            containerStyle={Styles.uploadButton}
          />
        </View>

        {/* Back CNIC Avatar */}
        <View style={Styles.avatarContainer}>
          <Avatar
            source={{ uri: backCnicUri ? backCnicUri : cnicBack }} // Use backCnicUri or default image
            size={200}
            containerStyle={{width:"90%"}}
            avatarStyle={Styles.avatar}
          />
          <Text style={Styles.label}>Upload Back Side of CNIC</Text>
          <Button
            title="Upload"
            onPress={() => pickImage(setBackCnicUri, 'backCnic')}
            containerStyle={Styles.uploadButton}
          />
        </View>

        <Text style={Styles.heading}>Facial Verification</Text>

        {/* Selfie Avatar */}
        <View style={Styles.avatarContainer}>
          <Avatar
            source={{ uri: selfieUri ? selfieUri : DefaultImageSrc }} // Use selfieUri or default image
            size={200}
            avatarStyle={Styles.avatar}
          />
          <Text style={Styles.label}>Upload Your Selfie</Text>
          <Button
            title="Upload"
            onPress={() => pickImage(setSelfieUri, 'selfie')}
       containerStyle={Styles.uploadButton}
          />
        </View>

        {/* Submit Button */}
        <Button
          color={ThemeProviderColors.Light.Primary}
          buttonStyle={Styles.submitButton}
          title="Submit Form"
          onPress={handleSubmit}
          disabled={!isFormComplete}
        />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  ExpertVerifyContainer: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 50,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    borderRadius: 5,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  uploadButton: {
width:"50%"
  },
  submitButton: {
 
    borderRadius: 5,
  },
});

export default ExpertVerification;
