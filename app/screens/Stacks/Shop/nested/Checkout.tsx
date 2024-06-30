import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Text, ListItem, Button } from "@rneui/themed";
import { useStripe } from "@stripe/stripe-react-native";
import InputComponent from '../../../../components/InputComponent/InputComponent';
import { useSelector,useDispatch } from 'react-redux';
import { ClearCart } from '../../../../slices/CartSlice';

type PaymentMethod = 'online' | 'cod' | null; // Define a union type for payment methods

const Checkout = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(null); // State to manage selected payment method
  const userFirstName = useSelector((state: any) => state.auth.firstName)
  const UserPhone = useSelector((state: any) => state.auth.phone)
  const UserLast = useSelector((state: any) => state.auth.lastName)
  const total = useSelector((state: any) => state.cart.totalCharges)
  const Items = useSelector((state: any) => state.cart.items)
  const id = useSelector((state: any) => state.auth.userid)
  const [firstname, setFirstname] = useState(userFirstName);
  const [lastname, setLastname] = useState(UserLast);
  const [phone, setPhone] = useState(UserPhone);
  const [homeAddress, setHomeAddress] = useState('');
  const [zipCode, setZipCode] = useState('54000');
  const [town, setTown] = useState('Lahore');

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handleConfirmPayment = async () => {
    try {
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: total }), // Amount in cents for 400Rs
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

      Alert.alert('Payment successful', 'Your payment was successful! View Order Details to track your order.',[
        {text: 'Go to Order', onPress: () => navigation.navigate('orders')},

      ]);
      
      await createOrder('online'); // Create order after successful payment
      dispatch(ClearCart()); // Clear cart after successful order

    } catch (error) {
      Alert.alert('Payment failed', 'There was an error processing your payment.');
    }
  };

  const createOrder = async (PaymentMethod: PaymentMethod) => {
    try {
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/create-order', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          products: Items,
          address: homeAddress,
          orderbyid: id,
          paymentmethod: PaymentMethod,
          phone: phone,
          total: total
        })
      });

      const responseText = await response.json(); // Log the raw response text
      console.log(responseText);
      dispatch(ClearCart()); // Clear cart after successful order
      Alert.alert('Order Placed', 'Your order has been placed successfully Go to order page to track your order.',[
        {text: 'Go to Order', onPress: () => navigation.navigate('orders')},
   
      ]);
    } catch (error) {
      console.error('Error creating order:', error.message);
      Alert.alert('Order Failed', 'There was an error placing your order.');
    }
  };

  const handlePlaceOrder = async () => {
    // Validate all fields
    if (!firstname || !lastname || !phone || !homeAddress || !zipCode || !town) {
      Alert.alert('Incomplete Form', 'Please fill out all fields.');
      return;
    }

    if (selectedPaymentMethod === 'online') {
      await handleConfirmPayment();
    } else if (selectedPaymentMethod === 'cod') {
      await createOrder('cod'); // Create order for COD
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
