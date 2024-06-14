import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";

//Library
import {presentPaymentSheet} from "@stripe/stripe-react-native"
const BookingSteps = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showPickupTimePicker, setShowPickupTimePicker] = useState(false);

  const handleStartDateChange = (_event:any, selectedDate:any) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const handleEndDateChange = (_event:any, selectedDate:any) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const handlePickupTimeChange = (_event:any, selectedDate:any) => {
    const currentTime = selectedDate || pickupTime;
    setShowPickupTimePicker(false);
    setPickupTime(currentTime);
  };

  /////////////Handle Payment 
  const HandlePaymentButton=async()=>{
    await presentPaymentSheet()
  }


 //Handle Payment
 //-present modal sheet
//   --Get Payment 
// on sucess create and order and notify the owner .. appointments..
  return (
    <ScrollView style={styles.container}>
        
      <View style={styles.formGroup}>
        <Text style={styles.label}>Emergency Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter emergency phone number" keyboardType="phone-pad" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Rental Start Date</Text>
        <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
          <Text style={styles.dateInput}>{startDate.toDateString()}</Text>
        </TouchableOpacity>
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
          />
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Rental End Date</Text>
        <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
          <Text style={styles.dateInput}>{endDate.toDateString()}</Text>
        </TouchableOpacity>
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={handleEndDateChange}
          />
        )}
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Pickup Time</Text>
        <TouchableOpacity onPress={() => setShowPickupTimePicker(true)}>
          <Text style={styles.dateInput}>{pickupTime.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showPickupTimePicker && (
          <DateTimePicker
            value={pickupTime}
            mode="time"
            display="default"
            onChange={handlePickupTimeChange}
          />
        )}
      </View>

      <TouchableOpacity onPress={HandlePaymentButton} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingSteps;
