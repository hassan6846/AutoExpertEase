import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { presentPaymentSheet } from "@stripe/stripe-react-native";

const BookingSteps = () => {
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showPickupTimePicker, setShowPickupTimePicker] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    validateFields();
    calculateTotalDays();
  }, [emergencyPhone, startDate, endDate, pickupTime]);

  const handleStartDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    if (currentDate.getTime() < new Date().setHours(0, 0, 0, 0)) {
      Alert.alert('Error', 'Start date cannot be in the past.');
    } else {
      setStartDate(currentDate);
    }
  };

  const handleEndDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    if (currentDate.getTime() < startDate.getTime()) {
      Alert.alert('Error', 'End date cannot be before the start date.');
    } else {
      setEndDate(currentDate);
    }
  };

  const handlePickupTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    const currentTime = selectedTime || pickupTime;
    setShowPickupTimePicker(false);
    setPickupTime(currentTime);
  };

  const validateFields = () => {
    if (emergencyPhone && startDate && endDate && pickupTime &&
      startDate.getTime() >= new Date().setHours(0, 0, 0, 0) && endDate.getTime() >= startDate.getTime()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const calculateTotalDays = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / oneDay));
    setTotalDays(days + 1); // Adding 1 to include both start and end date
  };

  const handlePaymentButton = async () => {
    await presentPaymentSheet();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Emergency Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter emergency phone number"
          keyboardType="phone-pad"
          value={emergencyPhone}
          onChangeText={setEmergencyPhone}
        />
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
          <Text style={styles.dateInput}>{pickupTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
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

      <Text style={styles.infoText}>
        Make sure to drop the vehicle back at the same pickup time, otherwise, you'll incur extra charges.
      </Text>

      <Text style={styles.infoText}>
        Total Rental Days: {totalDays}
      </Text>

      <TouchableOpacity
        onPress={handlePaymentButton}
        style={[styles.submitButton, isButtonDisabled && styles.disabledButton]}
        disabled={isButtonDisabled}
      >
        <Text style={styles.submitButtonText}>Confirm Booking for {totalDays} Days</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
  disabledButton: {
    backgroundColor: '#a0a0a0',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 20,
    color: "#97ADB6",
    marginBottom: 20,
  },
});

export default BookingSteps;
