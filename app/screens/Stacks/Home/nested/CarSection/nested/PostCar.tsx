import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, FlatList, Alert, ActivityIndicator } from 'react-native';
import { Text, CheckBox, Avatar, Button } from "@rneui/themed"; // Adjust import as per your project
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import InputComponent from '../../../../../../components/InputComponent/InputComponent'; // Adjust path as per your project
import { selectPhoto } from '../../../../../../constants/ImagesConstants'; // Adjust path as per your project
import { useSelector } from 'react-redux';

const PostCar = () => {
  const id = useSelector((state:any) => state.auth.userid); // Ensure correct useSelector usage

  const [images, setImages] = useState<any>([]);
  const [name, setName] = useState('');
  const [plate, setPlate] = useState('');
  const [registration, setRegistration] = useState('');
  const [color, setColor] = useState('');
  const [carType, setCarType] = useState('');
  const [engineType, setEngineType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [yearOfManufacture, setYearOfManufacture] = useState('');
  const [mileage, setMileage] = useState('');
  const [carCondition, setCarCondition] = useState('');
  const [seats, setSeats] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [ac, setAc] = useState(false);
  const [tracker, setTracker] = useState(false);
  const [workSoundSystem, setWorkSoundSystem] = useState(false);
  const [legalDocuments, setLegalDocuments] = useState(false);
  const [pickedLocation, setPickedLocation] = useState('');
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState <any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.error('Error fetching location:', error);
        setErrorMsg('Error fetching location');
      }
    })();

  }, []);

  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true,
      selectionLimit: 2,
    });
    if (!result.canceled) {
      const base64Images = result.assets.map((asset) => asset.base64);

      setImages(base64Images);
    }
  };
 const coordinates={
  latitude: location?.coords.latitude,
  longitude: location?.coords.longitude,
 }
  const handlePostCar = async () => {
    const carData = {
      id:id,
      carname:name.toString(),
      noplate:plate.toString(),
      registrationno:registration.toString(),
      color:color.toString(),
      cartype:carType.toString(),
      enginetype:engineType.toString(),
      fueltype:fuelType.toString(),
      yearofmanufacture:yearOfManufacture.toString(),
      milage:mileage.toString(),
      carcondition:carCondition.toString(),
      seats:seats.toString(),
      ac:ac.toString(),
      tracker:tracker.toString(),
      workingsound:workSoundSystem.toString(),
      legaldocuments:legalDocuments.toString(),
      pickupAddress:pickedLocation,
      image: images[0],
      imagetwo: images[1],
      usercoords:coordinates,
      
     price:pricePerDay.toString(),
    };

    try {
      setLoading(true);
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/car/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(carData),
      });
      setLoading(false);


      Alert.alert(
        'Car posted successfully',
        'Your car has been posted successfully.'
      );
      if (!response.ok) {
        throw new Error('Failed to upload car');
      }

      const data = await response.json();
      console.log('Car posted:', data);
    } catch (error) {
      console.error('Error posting car:', error.message);
      Alert.alert('Failed to post car', error.message);
      console.log(JSON.stringify(carData))
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.childWrapper}>
        <Text style={styles.heading}>Car Information</Text>
        <InputComponent placeholder="Name" value={name} onChangeText={setName} />
        <InputComponent placeholder="Plate Number" value={plate} onChangeText={setPlate} />
        <InputComponent placeholder="Registration Number" value={registration} onChangeText={setRegistration} />
        <InputComponent placeholder="Color" value={color} onChangeText={setColor} />
        <InputComponent placeholder="Car Type" value={carType} onChangeText={setCarType} />
      </View>

      <View style={styles.childWrapper}>
        <Text style={styles.heading}>Car Details</Text>
        <InputComponent placeholder="Engine Type" value={engineType} onChangeText={setEngineType} />
        <InputComponent placeholder="Fuel Type" value={fuelType} onChangeText={setFuelType} />
        <InputComponent placeholder="Year of Manufacture" value={yearOfManufacture} onChangeText={setYearOfManufacture} />
        <InputComponent placeholder="Mileage" value={mileage} onChangeText={setMileage} />
        <InputComponent placeholder="Car Condition" value={carCondition} onChangeText={setCarCondition} />
        <InputComponent placeholder="Seats" value={seats} onChangeText={setSeats} />
      </View>

      <View style={styles.childWrapper}>
        <Text style={styles.heading}>Features</Text>
        <CheckBox checked={ac} title="AC" onPress={() => setAc(!ac)} />
        <CheckBox checked={tracker} title="Tracker" onPress={() => setTracker(!tracker)} />
        <CheckBox checked={workSoundSystem} title="Sound System" onPress={() => setWorkSoundSystem(!workSoundSystem)} />
        <CheckBox checked={legalDocuments} title="Legal Documents" onPress={() => setLegalDocuments(!legalDocuments)} />
      </View>

      <View style={styles.childWrapper}>
        <Text style={styles.heading}>Pricing</Text>
        <InputComponent placeholder="Price per Day" value={pricePerDay} onChangeText={setPricePerDay} />
      </View>

      <View style={styles.childWrapper}>
        <Text style={styles.heading}>Location</Text>
        <InputComponent placeholder="Pickup Address" value={pickedLocation} onChangeText={setPickedLocation} />
        <Text style={styles.coordinatesText}>Coordinates: {location ? `${location.coords.latitude}, ${location.coords.longitude}` : 'Fetching coordinates...'}</Text>
      </View>

      <View style={styles.childWrapper}>
        <TouchableOpacity onPress={selectImage} style={styles.imagePicker}>
          {images.length > 0 ? (
            <FlatList
              contentContainerStyle={styles.imageList}
              data={images}
              horizontal
              renderItem={({ item }) => (
                <Avatar
                  avatarStyle={styles.avatar}
                  source={{ uri: `data:image/jpeg;base64,${item}` }}
                  size={50}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<Avatar avatarStyle={styles.avatar} source={{ uri: selectPhoto }} size={50} />}
            />
          ) : (
            <Avatar avatarStyle={styles.avatar} source={{ uri: selectPhoto }} size={50} />
          )}
        </TouchableOpacity>
      </View>

      <Button
        color="#E04E2F"
        buttonStyle={styles.postButton}
        title="Post Car"
        onPress={handlePostCar}
        disabled={loading}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#E04E2F" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  childWrapper: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    elevation: 2,
  },
  heading: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  coordinatesText: {
    marginBottom: 10,
  },
  imagePicker: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  imageList: {
    gap: 10,
  },
  avatar: {
    borderRadius: 5,
  },
  postButton: {
    marginTop: 20,
    marginBottom: 50,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostCar;
