import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Icon } from "@rneui/themed";

const CarCard = ({ hasAC }: { hasAC: any }) => {
  return (
    <View style={styles.container}>
      <Avatar
        containerStyle={styles.avatarContainer}
        size={100}
        source={{ uri: 'https://example.com/car-image.jpg' }}
        avatarStyle={styles.avatar}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Car Model</Text>
        <Text style={styles.price}>$100/day</Text>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <Icon name="directions-car" size={24} color="black" />
            <Text>4 Seats</Text>
          </View>
          {hasAC && (
            <View style={styles.iconContainer}>
              <Icon name="ac-unit" size={24} color="black" />
              <Text>AC</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatarContainer: {
    borderRadius: 5,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default CarCard;
