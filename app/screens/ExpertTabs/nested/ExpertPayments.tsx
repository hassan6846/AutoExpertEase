import React, { useState } from 'react';
import { View, StyleSheet, Modal, Alert } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { getHeight } from '../../../utils/GetDimension';
import ThemeProviderColors from '../../../provider/ThemeProvider';
import InputComponent from '../../../components/InputComponent/InputComponent';
import { useSelector } from 'react-redux';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const ExpertPayments = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [cardDetails, setCardDetails] = useState(null);
  const id = useSelector((state: any) => state.auth.userid);
  const stripe = useStripe();

  // Handle change
  const handleAmountChange = (text: string) => setAmount(text);

  const handleToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  const isButtonDisabled = amount === '' || Number(amount) <= 0;

  const handleConfirmPayment = async () => {
    if (!cardDetails) {
      Alert.alert('Error', 'Please enter complete card details.');
      return;
    }

    try {
      // Assume you have a backend endpoint that creates a PaymentIntent
      const response = await fetch('http://10.0.2.2:4001/api/intends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: Number(amount) * 100 }), // Amount in cents
      });

      const { clientSecret } = await response.json();

      const { paymentIntent, error } = await stripe.confirmPayment({
        paymentIntentClientSecret: clientSecret,
        paymentMethodType: 'Card',
      });

      if (error) {
        Alert.alert('Payment failed', error.message);
      } else if (paymentIntent) {
        Alert.alert('Payment successful', 'Your payment was successful!');
        setIsModalVisible(false);
        // Reset amount and card details
        setAmount('');
        setCardDetails(null);
      }
    } catch (error) {
      console.error('Error processing payment:', error.message);
      Alert.alert('Payment failed', 'There was an error processing your payment.');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.balanceTitle}>Current Balance</Text>
        <Text style={styles.balanceAmount}>0</Text>
        <Button onPress={handleToggle} title="Top-up Account" color={ThemeProviderColors.Light.Primary} containerStyle={styles.buttonContainer} />
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleToggle}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Amount To Add</Text>
            <InputComponent
              onChangeText={handleAmountChange}
              keyboardType="number-pad"
              placeholder="Enter Amount min 300"
            />
            <CardField
              postalCodeEnabled={false}
              placeholders={{ number: '4242 4242 4242 4242' }}
              cardStyle={styles.cardField}
              style={styles.cardContainer}
              onCardChange={cardDetails => setCardDetails(cardDetails)}
            />
            <Button color="#E04E2F" title="Confirm" disabled={isButtonDisabled} onPress={handleConfirmPayment} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: getHeight / 40,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: getHeight / 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 8,
    marginTop: 20,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  modalTitle: {
    fontSize: getHeight / 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardField: {
    borderColor: '#E04E2F',
    borderWidth: 1,
    borderRadius: 8,
  },
  cardContainer: {
    height: 50,
    marginVertical: 20,
  },
});

export default ExpertPayments;