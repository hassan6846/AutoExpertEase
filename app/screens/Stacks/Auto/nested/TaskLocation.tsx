import React, { useState } from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { Button, Input,Icon} from "@rneui/themed";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { useSelector } from 'react-redux';

const TaskLocation = ({ navigation }: { navigation: any }) => {
  const [pickedLocation, setPickedLocation] = useState<any>(null); // State to hold picked location
  const NearbyPlace=useSelector((state:any)=>state.location.nearbyplace)
  
  const handleMapPress = (event: any) => {
    // Extract latitude and longitude from the pressed location
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setPickedLocation({ latitude, longitude });
  };
 
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Input View Start */}
      <View style={styles.inputContainer}>
        <Input
         disabled={true}
           value={`${NearbyPlace}`}
          inputContainerStyle={styles.inputVoid}
          inputStyle={styles.inputMain}
          containerStyle={styles.inputCont}
          placeholder="Search Places Nearby You"
        />
        {/* Display latitude and longitude */}
        <Button onPress={()=>navigation.navigate("querylocation")} color="#E04E2F">
          <Icon name='search' color="#fff"/>
        </Button>
      </View>
      {pickedLocation && (
          <Text style={styles.locationText}>
            Latitude: {pickedLocation.latitude}, Longitude: {pickedLocation.longitude}
          </Text>
        )}
      {/* Input View Ends */}
      <MapView
        onPress={handleMapPress}
        showsUserLocation={true}
        style={styles.mapStyle}
      >
        {/* Display marker if location is picked */}
        {pickedLocation && (
          <Marker coordinate={pickedLocation} />
        )}
      </MapView>
      <Button
        onPress={
          ()=>navigation.navigate("TaskDescription")
        }
        color={ThemeProviderColors.Light.Primary}
        containerStyle={styles.btnContainerStyle}
        title="Next"
        disabled={!pickedLocation} // Disable button if location is not picked
      />
    </KeyboardAvoidingView>
  );
}

//Styles
const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
    position: "relative",
  },
  // Button Container
  btnContainerStyle: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    paddingHorizontal: 30,
  },
  // Styled
  inputContainer: {
        flexDirection:"row",
    display:"flex",
    justifyContent:"center",
  

  },
  inputCont: {
    width: "80%",
  
  },
  inputMain: {
    paddingLeft: 10,
    fontSize: 14,
  },
  inputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12,

  },
  locationText: {
    marginBottom:20,
    fontSize: 12,
textAlign:"center",
color:ThemeProviderColors.Light.FontSubHeading
  }
});

export default TaskLocation;
