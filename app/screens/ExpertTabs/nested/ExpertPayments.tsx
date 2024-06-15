import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Modal } from 'react-native';
import { Text, Button, ListItem, Avatar, Divider } from '@rneui/themed';
import { getHeight } from '../../../utils/GetDimension';
import ThemeProviderColors from '../../../provider/ThemeProvider';
import { JazzCash, easypaisa } from '../../../constants/ImagesConstants';

const ExpertPayments = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.balanceTitle}>Current Balance</Text>
        <Text style={styles.balanceAmount}>500</Text>
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
            <Text style={styles.modalTitle}>Add Topup To Your Account</Text>
            <Pressable onPress={handleToggle}>
              <ListItem>
                <Avatar avatarStyle={{ objectFit: "contain", }} source={{ uri: JazzCash }} />
                <ListItem.Content>
                  <ListItem.Title>Through Whatsapp</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </Pressable>
            <Divider />
            <Pressable onPress={handleToggle}>
              <ListItem>
                <Avatar source={{ uri: easypaisa }} />
                <ListItem.Content>
                  <ListItem.Title>Online Payment.</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </Pressable>
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
    marginBottom: 20,
  },
});

export default ExpertPayments;
