import { KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

// Library
import { Text, Button } from "@rneui/themed";

// Components
import InputComponent from '../../../../components/InputComponent/InputComponent';

const CarRentalVerification = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Basic Info Section */}
      <KeyboardAvoidingView style={styles.infoSection}>
        <Text style={styles.header} h4>Basic Info</Text>
        <Text style={styles.infoText}>
          Car Rental Information. Your information is secure with us. We need this for rental verification rules to verify our customers.
        </Text>
        <InputComponent label="Your Full Name" placeholder="Full Name" />
        <InputComponent label="Father Name" placeholder="Father Name" />
        <InputComponent label="Email" placeholder="Email" />
        <InputComponent label="Phone" placeholder="Active/Emergency Phone to contact" />
      </KeyboardAvoidingView>

      {/* ID Confirmation Section */}
      <KeyboardAvoidingView style={styles.infoSection}>
        <Text style={styles.header} h4>ID Confirmation</Text>
        <Text style={styles.infoText}>
          Car Rental Information. Your information is secure with us. We need this for rental verification rules to verify our customers.
        </Text>
        <InputComponent label="Cnic No." placeholder="Enter Your Cnic no" />
        <InputComponent label="Current Address." placeholder="Current Address" />

        <Button title="Submit" style={styles.button} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  infoSection: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    height: "auto",
    marginBottom: 30,
  },
  header: {
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  infoText: {
    textAlign: "center",
    fontSize: 10,
    paddingHorizontal: 20,
    color: "#97ADB6",
  },
  button: {
    marginTop: 10,
    color:"#E04E2F"
  },
});

export default CarRentalVerification;
