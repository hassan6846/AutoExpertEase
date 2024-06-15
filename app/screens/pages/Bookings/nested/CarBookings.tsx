import React from 'react';
import { ScrollView, StyleSheet, View,Linking } from 'react-native';
import { Avatar, Text, Icon } from '@rneui/themed';
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const CarBookings = () => {
  // Get Direction.. open Google Maps
  const coordinates = "37.7749,-122.4194"; // Example coordinates for San Francisco

  const handleDirections = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bookingCard}>
        {/* Container */}
        <View>
        <View style={styles.orderTxtDetails}>
          <Text style={styles.orderText}>Tracking Id :#3801231</Text>
          <Text style={styles.orderText}>11-Apr-2024 7:59</Text>
          <Text style={styles.orderText}>
            Paid <Icon type='material' name='payment' size={12} color="green" />
          </Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.avatarsContainer}>
          {/* Sample avatars */}
          {[...Array(10)].map((_, index) => (
            <Avatar key={index} size={60} containerStyle={styles.avatarContainer} source={{ uri: AvatarSrc }} />
          ))}
        </ScrollView>
        <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
            <Icon type="material" name="schedule" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Pickup Time: 08:00 AM</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="phone" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Owner Contact:92333239192</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="pin-drop" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Pickup Date: 11-Apr-2024</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="date-range" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Drop Day: 13-Apr-2024</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="location-on" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Pickup Location: Your pickup location</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="directions-car" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Car Number Plate: ABC-123</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="timelapse" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Rental Duration :2 Days.</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon type="material" name="attach-money" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
            <Text style={styles.detailText}>Total: $100</Text>
          </View>
          <Text style={styles.detailText}>Note: Make sure that you Stay Inside the restricted area (Lahore Only) so Owner can see through Tracker</Text>

        </View>
        </View>
        {/* Container */}
        {/* Button */}
        <Icon  onPress={handleDirections} containerStyle={{position:'absolute',bottom:50,right:10,backgroundColor:"#E04E2F",padding:5,borderRadius:20}} color="#fff" name='directions' type='material'/>
        {/* Button */}
      </View>
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
    position:"relative",
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
});

export default CarBookings;
