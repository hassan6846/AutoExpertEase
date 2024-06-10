import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card,Icon} from "@rneui/themed";

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Icon size={100} name='account-balance-wallet'type='material'/>
        <Text h4 style={styles.balanceText}>Current Wallet Balance</Text>
        <Text style={styles.balanceAmount}>Rs.0</Text>
        <Text style={styles.balanceNote}>Note ( Right now you cannot withdraw money from wallet you can use this credit in next shopping we can send you amount here for returns and exchanges thanks.)</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color for the entire screen
  },
  cardContainer: {
    width: '80%',
    padding: 60,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: '#fff', // Background color for the card
  },
  balanceText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#333', // Color for the balance text
  },
  balanceAmount: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007bff', // Color for the balance amount
  },
  balanceNote: {
    fontSize:10,
    marginTop:10,
    textAlign: 'center',
    color: '#666', // Color for the balance note
  },
});

export default Wallet;
