import { ScrollView, StyleSheet, KeyboardAvoidingView, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Text, Avatar } from "@rneui/themed";
import InputComponent from '../../../../components/InputComponent/InputComponent';
import DateTimePicker from "@react-native-community/datetimepicker";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import * as ImagePicker from 'expo-image-picker';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const InstructorVerification = () => {
  return (
    <ScrollView style={Styles.ExpertVerifyContainer}>
      <KeyboardAvoidingView style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, height: "auto", marginBottom: 50 }}>
      <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Basic Info</Text>

      <Button buttonStyle={{ marginTop: 10 }} containerStyle={{ width: '40%' }} title="Upload"  />
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  ExpertVerifyContainer: {
    flex: 1,
    padding: 20,
  }
})

export default InstructorVerification