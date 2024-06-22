import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { Text, ListItem, Button, Avatar } from "@rneui/themed";
import { useStripe } from "@stripe/stripe-react-native";
import InputComponent from '../../../../components/InputComponent/InputComponent';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

type PaymentMethod = 'online' | 'cod' | null; // Define a union type for payment methods

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(null); // State to manage selected payment method
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [town, setTown] = useState('');
  
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handleConfirmPayment = async () => {
    try {
      const response = await fetch('http://10.0.2.2:4001/api/intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 40000 }), // Amount in cents for 400Rs
      });

      if (!response.ok) {
        Alert.alert('Payment failed', 'Failed to create PaymentIntent. Please try again.');
        return;
      }

      const data = await response.json();

      if (!data.paymentIntent) {
        Alert.alert('Payment failed', 'No paymentIntent received from server.');
        return;
      }

      const initResponse = await initPaymentSheet({
        merchantDisplayName: 'AutoExperts',
        paymentIntentClientSecret: data.paymentIntent,
      });

      if (initResponse.error) {
        Alert.alert('Payment failed', `Failed to initialize PaymentSheet. Error: ${initResponse.error.message}`);
        return;
      }

      const paymentResponse = await presentPaymentSheet();

      if (paymentResponse.error) {
        Alert.alert(`Error code: ${paymentResponse.error.code}`, paymentResponse.error.message);
        return;
      }

      Alert.alert('Payment successful', 'Your payment was successful!');
    } catch (error) {
      Alert.alert('Payment failed', 'There was an error processing your payment.');
    }
  };

  const handlePlaceOrder = () => {
    // Validate all fields
    if (!firstname || !lastname || !phone || !homeAddress || !zipCode || !town) {
      Alert.alert('Incomplete Form', 'Please fill out all fields.');
      return;
    }

    if (selectedPaymentMethod === 'online') {
      handleConfirmPayment();
    } else if (selectedPaymentMethod === 'cod') {
      Alert.alert('Order placed', 'Your order has been placed with Cash on Delivery.');
    } else {
      Alert.alert('Select Payment Method', 'Please select a payment method.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5, marginBottom: 10 }}>
        <Text h4 style={{ textAlign: 'center' }}>Contact Details</Text>
        <InputComponent
          keyboardType="default"
          label="Firstname"
          value={firstname}
          onChangeText={setFirstname}
        />
        <InputComponent
          keyboardType="default"
          label="Lastname"
          value={lastname}
          onChangeText={setLastname}
        />
        <InputComponent
          keyboardType="phone-pad"
          label="Phone"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5, marginBottom: 10 }}>
        <Text h4 style={{ textAlign: 'center' }}>Address Details</Text>
        <InputComponent
          keyboardType="default"
          label="Home Address"
          value={homeAddress}
          onChangeText={setHomeAddress}
        />
        <InputComponent
          keyboardType="numeric"
          label="Zip code"
          value={zipCode}
          onChangeText={setZipCode}
        />
        <InputComponent
          keyboardType="default"
          label="Nearby Town/District/County"
          value={town}
          onChangeText={setTown}
        />
      </View>
      <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5, marginBottom: 10 }}>
        <Text h4 style={{ textAlign: 'center', marginBottom: 10 }}>Select Payment Method</Text>
        <ListItem
          bottomDivider
          containerStyle={[
            styles.listItem,
            selectedPaymentMethod === 'cod' && styles.selectedListItem
          ]}
          onPress={() => setSelectedPaymentMethod('cod')}
        >
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 13 }}>Cash On Delivery</ListItem.Title>
            <ListItem.Subtitle style={{ fontSize: 12 }}>Pay Bill and get product at the arrival at your door Step</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem
          bottomDivider
          containerStyle={[
            styles.listItem,
            selectedPaymentMethod === 'online' && styles.selectedListItem
          ]}
          onPress={() => setSelectedPaymentMethod('online')}
        >
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 13 }}>Online Payment</ListItem.Title>
            <ListItem.Subtitle style={{ fontSize: 12 }}>Cashless Payment without hassle.</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
      <Button
      color="#E04E2F"
        buttonStyle={{ marginBottom: 100 }}
        title={selectedPaymentMethod === 'online' ? 'Continue to Online Payment' : 'Place Order on Cash Delivery'}
        onPress={handlePlaceOrder}
        disabled={!firstname || !lastname || !phone || !homeAddress || !zipCode || !town || !selectedPaymentMethod}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    padding: 30,
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedListItem: {
    borderColor: '#E04E2F',
  },
});

export default Checkout;
