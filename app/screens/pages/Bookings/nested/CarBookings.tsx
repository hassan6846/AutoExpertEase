import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Avatar, Text, Icon } from '@rneui/themed';
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { AvatarSrc } from '../../../../constants/ImagesConstants';
import { useSelector } from 'react-redux';


const CarBookings = () => {
  const id = useSelector((state: any) => state.auth.userid);
  const [carData, setCarData] = useState<any>([]);

  // Example coordinates for San Francisco
  const coordinates = "37.7749,-122.4194";

  const handleDirections = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    Linking.openURL(url);
  };

  useEffect(() => {
    const getMyBookings = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:4001/api/booking/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setCarData(data.bookings);
        console.log(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    getMyBookings();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {carData.map((booking: any, index: number) => (
        <View key={index} style={styles.bookingCard}>
          <View style={styles.orderTxtDetails}>
            <Text style={styles.orderText}>{new Date(carData[0].createdAt).toLocaleDateString()}</Text>
            <Text style={styles.orderText}>
              Paid <Icon type='material' name='payment' size={12} color="green" />
            </Text>
          </View>
          <ScrollView horizontal={true} contentContainerStyle={styles.avatarsContainer}>
            {[...Array(10)].map((_, avatarIndex) => (
              <Avatar key={avatarIndex} size={60} containerStyle={styles.avatarContainer} source={{ uri: AvatarSrc }} />
            ))}
          </ScrollView>
          <View style={styles.detailsContainer}>
            {Object.entries(booking).map(([key, value]) => (
              <View key={key} style={styles.detailItem}>
                <Icon type="material" name="schedule" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
                <Text style={styles.detailText}>{key}: {typeof value === 'object' ? JSON.stringify(value) : value}</Text>
              </View>
            ))}
            <Text style={styles.detailText}>
              Note: Make sure that you Stay Inside the restricted area (Lahore Only) so Owner can see through Tracker
            </Text>
          </View>
          {/* Button */}
          <Icon onPress={handleDirections} containerStyle={styles.directionsButton} color="#fff" name='directions' type='material' />
          {/* Button */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bookingCard: {
    marginTop: 10,
    padding: 10,
    position: "relative",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  orderTxtDetails: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between",
  },
  orderText: {
    fontSize: 12,
    fontWeight: "bold",
    color: ThemeProviderColors.Light.FontSubHeading,
  },
  avatarsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatarContainer: {
    borderRadius: 5,
    marginRight: 5,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 5,
    fontSize: 12,
    color: ThemeProviderColors.Light.FontSubHeading,
  },
  directionsButton: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: "#E04E2F",
    padding: 5,
    borderRadius: 20,
  },
});

export default CarBookings;
