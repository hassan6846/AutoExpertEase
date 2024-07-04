import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, FlatList, Alert, ActivityIndicator } from 'react-native';
import { Text, CheckBox, Avatar, Button } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import InputComponent from '../../../../../../components/InputComponent/InputComponent'; // Adjust path as per your project
import { selectPhoto } from '../../../../../../constants/ImagesConstants'; // Adjust path as per your project
import { useSelector } from 'react-redux';

const PostCar = () => {
  const id = useSelector((state: any) => state.auth.userid);

  const [images, setImages] = useState<string[]>([]);
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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
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
        console.log(location.coords.longitude)
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
      const base64Images = result.assets.map((asset) => asset.base64!); // Use non-null assertion operator

      setImages(base64Images);
      console.log(base64Images[0]);
    }
  };
  const handlePostCar = async () => {
    const cardata={
      id:id,
      carname:name,
      noplate:plate,
      registrationno:registration,
      color:color,
      cartype:carType,
      enginetype:engineType,
      fueltype:fuelType,
      yearofmanufacture:yearOfManufacture,
      milage:mileage,
      carcondition:carCondition,
      seats:seats,
      ac:ac,
      tracker: tracker.toString(),
      legaldocuments: legalDocuments.toString(),
      workingsound: workSoundSystem.toString(),
      pickupAddress:pickedLocation,
      image:images[0],
      imagetwo:images[1],
      usercoords:location,
      price:pricePerDay,
    }
   try {
    const response=await fetch('http://10.0.2.2:4001/api/car/upload',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardata),

    })
    if (!response.ok) {
      throw new Error('Failed to Upload Car');
    }
    Alert.alert(
      'Car Post created Successfully',
      'Your Car has been created successfully.👀',
    //ading buton

    );
    const data = await response.json();
    console.log('Product created:', data);

   } catch (error) {
    console.error('Error creating Car Post:', error);
    Alert.alert('Failed to create Car', error);
   }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.childWrapper}>
        <Text style={styles.heading}>Car Info</Text>
        <Text style={styles.italicText}>Note: Please fill out the form from the pickup location.</Text>

        <InputComponent placeholder="Name" value={name} onChangeText={setName} />
        <InputComponent placeholder="No Plate" value={plate} onChangeText={setPlate} />
        <InputComponent placeholder="Registration No" value={registration} onChangeText={setRegistration} />
        <InputComponent placeholder="Color" value={color} onChangeText={setColor} />
        <InputComponent placeholder="Car Type (Manual/Automatic)" value={carType} onChangeText={setCarType} />
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
        <Text style={styles.earningsText}>Your Earnings per Day</Text>
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
                <Avatar avatarStyle={styles.avatar} source={{ uri: `data:image/jpeg;base64,${item}` }} size={50} />
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    elevation: 2,
  },
  heading: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  italicText: {
    textAlign: "center",
    marginBottom: 10,
    fontStyle: 'italic',
  },
  earningsText: {
    marginLeft: 8,
    fontSize: 12,
    marginBottom: 10,
  },
  coordinatesText: {
    marginBottom: 10,
  },
  imagePicker: {
    padding: 10,
    backgroundColor: "#fff",
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
