import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from "@react-navigation/native";

import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useStripe } from "@stripe/stripe-react-native";
import { useSelector } from 'react-redux';
const BookingSteps = () => {
  const route = useRoute();
  const { car } = route.params as { car: any }; // Type assertion to specify the shape of route.params

  const id = useSelector((state: any) => state.auth.userid)

  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [amount, setAmount] = useState(100);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showPickupTimePicker, setShowPickupTimePicker] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [totalDays, setTotalDays] = useState(0);
  const { initPaymentSheet, presentPaymentSheet } = useStripe(); // Handle Payment Sheet

  // Handle Payment Sheet
  const handleConfirmPayment = async () => {
    try {
      console.log('Sending request to create PaymentIntent...');
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: Number(car.pricePerDay) * totalDays }), // Amount in cents
      });

      console.log('Received response from server:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server response error:', errorData);
        Alert.alert('Payment failed', `Failed to create PaymentIntent. Error: ${errorData.message || 'Unknown error'}`);
        return;
      }

      const data = await response.json();
      console.log('PaymentIntent data:', data);

      if (!data.paymentIntent) {
        console.log('No paymentIntent received');
        Alert.alert('Payment failed', 'No paymentIntent received from server.');
        return;
      }

      // Initialize PaymentSheet with the PaymentIntent ID
      const initResponse = await initPaymentSheet({
        merchantDisplayName: 'AutoExperts',
        paymentIntentClientSecret: data.paymentIntent,
      });

      console.log('initPaymentSheet response:', initResponse);

      if (initResponse.error) {
        console.log('Error initializing PaymentSheet:', initResponse.error.message);
        Alert.alert('Payment failed', `Failed to initialize PaymentSheet. Error: ${initResponse.error.message}`);
        return;
      }

      // Present PaymentSheet
      const paymentResponse = await presentPaymentSheet();
      console.log('presentPaymentSheet response:', paymentResponse);

      if (paymentResponse.error) {
        console.log('Error presenting PaymentSheet:', paymentResponse.error.message);
        Alert.alert(`Error code: ${paymentResponse.error.code}`, paymentResponse.error.message);
        return;
      }

      Alert.alert('Payment successful', 'Your payment was successful! Your can Now view your booking details.');
      await createBooking()
    } catch (error) {
      console.error('Error processing payment:', error.message);
      Alert.alert('Payment failed', 'There was an error processing your payment.');
    }
  };

  const createBooking = async () => {

    const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        car: car,
        bookerId: id,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        totaldays: totalDays,
        bookerPhone: emergencyPhone,
        pickuptime: pickupTime.toISOString()
      }),
    });


    const data = await response.json();
    console.log(data);


};
  useEffect(() => {
console.log(car.pricePerDay)
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
        Make sure to drop the vehicle back at the same pickup time, otherwise, you'll include extra charges.
      </Text>

      <Text style={styles.infoText}>
        Total Rental Days: {totalDays}
      </Text>

      <TouchableOpacity
        onPress={handleConfirmPayment}
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
    backgroundColor: '#E04E2F',
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
