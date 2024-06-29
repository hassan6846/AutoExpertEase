import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Text, Avatar } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";

const ViewCarDetails = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  const { carId } = route.params as { carId: string }; // Type assertion to specify the shape of route.params

  const [car, setCar] = useState<any>(null); // State to hold car details
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // State to track selected image index

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:4001/api/car/${carId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch car details');
        }

        const data = await response.json();
        setCar(data); // Set car details to state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching car details:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchCarDetails();
  }, [carId]);

  useEffect(() => {
    if (car) {
      console.log(car);
    }
  }, [car]);

  const handleAvatarPress = (index: number) => {
    setSelectedIndex(index); // Update selectedIndex when Avatar is pressed
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E04E2F" />
      </View>
    );
  }

  if (!car) {
    return (
      <View style={styles.loadingContainer}>
        <Text>No car found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
          <Avatar 
            avatarStyle={{ borderRadius: 5 }} 
            containerStyle={{ height: 250, width: "90%", marginBottom: 5 }} 
            source={{ uri: car.images[0][selectedIndex] }} // Use selectedIndex to display the selected image
          />
        </View>
        <View style={styles.imageRow}>
          {car.images[0].map((image: any, index: number) => (
            <Avatar
              key={index}
              size={60}
              containerStyle={{ marginLeft: 5 }}
              avatarStyle={StyleSheet.flatten([
                { borderRadius: 5 },
                { borderColor: selectedIndex === index ? "#E04E2F" : 'transparent', borderWidth: 2 }
              ])}
              source={{ uri: image }}
              onPress={() => handleAvatarPress(index)} // Call handleAvatarPress with index
            />
          ))}
        </View>
        <Text style={{ paddingHorizontal: 20, marginTop: 5, color: "#302F33", fontWeight: "100", fontSize: 20 }}>
          {car.name}
        </Text>
        <View style={{ flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 10, backgroundColor: "#f6f6f6", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginTop: 10, marginBottom: 10, marginLeft: 5 }}>
            {car.Cartype[0]}
          </Text>
          <Text style={{ fontSize: 10, backgroundColor: "#f6f6f6", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginTop: 10, marginBottom: 10, marginLeft: 5 }}>
            {car.fuelType[0]}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 10 }}>
          <Text style={{ marginRight: 5, color: "#302F33", fontWeight: "400", fontSize: 18 }}>PKR {car.pricePerDay}</Text>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 14 }}>Description</Text>
          <Text style={{ color: "#97ADB6", fontWeight: "100" }}>
            {`License Plate: ${car.licensePlate}\nRegistration No: ${car.RegistrationNo}\nColor: ${car.color}\nEngine Type: ${car.EngineType}\nYear of Manufacture: ${car.YearOfManufacture}\nMilage: ${car.Milage}\nCondition: ${car.condition}\nSeats: ${car.seats}\nAC: ${car.haveAc ? 'Yes' : 'No'}\nTracker: ${car.hasTraker ? 'Yes' : 'No'}\nSound System: ${car.WorkingSoundSystem ? 'Yes' : 'No'}\nLegal Documents: ${car.LegalDocuments ? 'Yes' : 'No'}\nLocation: ${car.Address}`}
          </Text>
        </View>
      </ScrollView>
      <Button color="#E04E2F" onPress={()=>navigation.navigate('bookingsteps',{car})} title="Book Now" containerStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 60, // Adjust based on the button's height
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 30,
  },
});

export default ViewCarDetails;
