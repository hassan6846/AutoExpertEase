import React, { useState } from 'react';
import { View, StyleSheet, Modal, Alert } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { getHeight } from '../../../utils/GetDimension';
import ThemeProviderColors from '../../../provider/ThemeProvider';
import InputComponent from '../../../components/InputComponent/InputComponent';
import { useSelector } from 'react-redux';
import { useStripe } from '@stripe/stripe-react-native';

const ExpertPayments: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const id = useSelector((state: any) => state.auth.userid);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  // Handle change
  const handleAmountChange = (text: string) => setAmount(text);

  const handleToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  const isButtonDisabled = amount === '' || Number(amount) <= 0;

  const handleConfirmPayment = async () => {
    try {
      console.log('Sending request to create PaymentIntent...');
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: Number(amount)  }), // Amount in cents
      });

      console.log('Received response from server:', response.status);

      if (!response.ok) {
        Alert.alert('Payment failed', 'Failed to create PaymentIntent. Please try again.');
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
        Alert.alert('Payment failed', 'Failed to initialize PaymentSheet. Please try again.');
        return;
      }

      // Present PaymentSheet
      const paymentResponse = await presentPaymentSheet();
      console.log('presentPaymentSheet response:', paymentResponse);

      if (paymentResponse.error) {
        console.log('Error presenting PaymentSheet:', paymentResponse.error.message);
        Alert.alert(
          `Error code: ${paymentResponse.error.code}`,
          paymentResponse.error.message
        );
        return;
      }

      Alert.alert('Payment successful', 'Your payment was successful!');
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
