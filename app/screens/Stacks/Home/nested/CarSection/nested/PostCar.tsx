import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text, CheckBox, Avatar, Button } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import InputComponent from '../../../../../../components/InputComponent/InputComponent';
import { selectPhoto } from '../../../../../../constants/ImagesConstants';

const PostCar = () => {
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
  const [pickedLocation, setPickedLocation] = useState(null);
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
        const data=location.coords.latitude+','+location.coords.longitude
      
    })();
  }, []);

  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.6,
      base64: true,
      selectionLimit: 2,
    });

    if (!result.canceled) {
      const base64Images = result.assets.map((asset) => asset.base64!); // Use non-null assertion operator
      setImages(base64Images);
    }
  };

  const handlePostCar = () => {
    // Handle posting car details logic here
    console.log('Posting car details...');
    console.log({
      name,
      plate,
      registration,
      color,
      carType,
      engineType,
      fuelType,
      yearOfManufacture,
      mileage,
      carCondition,
      seats,
      pricePerDay,
      ac,
      tracker,
      workSoundSystem,
      legalDocuments,
      pickedLocation,
      location,
      images
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ChildWrapper}>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Car Info</Text>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5, fontStyle: 'italic' }}>Note: Please ensure that you fill out the form from the same location where the rental car will be picked up.</Text>

        <InputComponent placeholder="Name" value={name} onChangeText={setName} />
        <InputComponent placeholder="No Plate" value={plate} onChangeText={setPlate} />
        <InputComponent placeholder="Vehicle Registration No" value={registration} onChangeText={setRegistration} />
        <InputComponent placeholder="Color" value={color} onChangeText={setColor} />
        <InputComponent placeholder="Car type sedan or any" value={carType} onChangeText={setCarType} />
      </View>

      <View style={styles.ChildWrapper}>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Car Details</Text>
        <InputComponent placeholder="Engine Type" value={engineType} onChangeText={setEngineType} />
        <InputComponent placeholder="Fuel Type" value={fuelType} onChangeText={setFuelType} />
        <InputComponent placeholder="Year of Manufacture" value={yearOfManufacture} onChangeText={setYearOfManufacture} />
        <InputComponent placeholder="Mileage" value={mileage} onChangeText={setMileage} />
        <InputComponent placeholder="Car Condition" value={carCondition} onChangeText={setCarCondition} />
        <InputComponent placeholder="Seats" value={seats} onChangeText={setSeats} />
      </View>

      <View style={styles.ChildWrapper}>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Features</Text>
        <CheckBox checked={ac} title="Ac" onPress={() => setAc(!ac)} />
        <CheckBox checked={tracker} title="Tracker" onPress={() => setTracker(!tracker)} />
        <CheckBox checked={workSoundSystem} title="Working Sound System" onPress={() => setWorkSoundSystem(!workSoundSystem)} />
        <CheckBox checked={legalDocuments} title="Legal Documents" onPress={() => setLegalDocuments(!legalDocuments)} />
      </View>

      <View style={styles.ChildWrapper}>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Set Pricing / Day</Text>
        <InputComponent placeholder="Pricing Per Day" value={pricePerDay} onChangeText={setPricePerDay} />
        <Text style={{ marginLeft: 8, fontSize: 12 }}>Your Earning / Day Will Be</Text>
      </View>

      <View style={styles.ChildWrapper}>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Location</Text>
        <InputComponent placeholder="Enter Pickup Address" value={pickedLocation} onChangeText={setPickedLocation} />
        <Text>Coordinates: {location ? `${location.coords.latitude}, ${location.coords.longitude}` : 'Fetching coordinates...'}</Text>
      </View>

      <View style={styles.ChildWrapper}>
        <TouchableOpacity onPress={selectImage} style={{ padding: 10, backgroundColor: "#fff", borderRadius: 5 }}>
          {images.length > 0 ? (
            <FlatList
              contentContainerStyle={{ gap: 10 }}
              data={images}
              horizontal
              renderItem={({ item }) => (
                <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: `data:image/jpeg;base64,${item}` }} size={50} />
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: selectPhoto }} size={50} />}
            />
          ) : (
            <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: selectPhoto }} size={50} />
          )}
        </TouchableOpacity>
      </View>

      <Button buttonStyle={{ marginBottom: 50, marginTop: 10 }} title="Post Car" onPress={handlePostCar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  ChildWrapper: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default PostCar;
