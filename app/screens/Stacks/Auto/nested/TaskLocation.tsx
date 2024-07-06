import React, { useState } from "react";
import { KeyboardAvoidingView, View, StyleSheet, Text } from "react-native";
import { Button, Input, Icon } from "@rneui/themed";
import ThemeProviderColors from "../../../../provider/ThemeProvider";
import { useSelector } from "react-redux";
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken('pk.eyJ1IjoiaGFzc2Fuc2hlcml5YXIiLCJhIjoiY2xybnIxam00MTg0djJscXI1bXVxNTR3aCJ9.4r9apA2hHuxU3tOoGDVZbQ');

const TaskLocation = ({ navigation }: { navigation: any }) => {
  const [pickedLocation, setPickedLocation] = useState<any>(null); // State to hold picked location
  const NearbyPlace = useSelector((state: any) => state.location.nearbyplace);

  const handleMapPress = (event: any) => {
    // Extract latitude and longitude from the pressed location
    const { geometry } = event;
    const { coordinates } = geometry;
    setPickedLocation({ latitude: coordinates[1], longitude: coordinates[0] });
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
        <Button
          onPress={() => navigation.navigate("querylocation")}
          color="#E04E2F"
        >
          <Icon name="search" color="#fff" />
        </Button>
      </View>
      {pickedLocation && (
        <Text style={styles.locationText}>
          Latitude: {pickedLocation.latitude}, Longitude: {pickedLocation.longitude}
        </Text>
      )}
      {/* Input View Ends */}
      <MapboxGL.MapView
        style={styles.mapStyle}
        onPress={handleMapPress}
      >
        <MapboxGL.Camera
          zoomLevel={12} // Adjust the zoom level as needed
          centerCoordinate={[74.3587, 31.5204]} // Coordinates for Lahore
        />
        <MapboxGL.UserLocation />

        {pickedLocation && (
          <MapboxGL.PointAnnotation
            id="pickedLocation"
            coordinate={[pickedLocation.longitude, pickedLocation.latitude]}
          >
            <View style={styles.annotationContainer}>
              <Icon color={ThemeProviderColors.Light.Primary} name="location-on" type="material"/>
            </View>
          </MapboxGL.PointAnnotation>
        )}
      </MapboxGL.MapView>
      <Button
        onPress={() => navigation.navigate("TaskDescription")}
        color={ThemeProviderColors.Light.Primary}
        containerStyle={styles.btnContainerStyle}
        title="Next"
        disabled={!pickedLocation} // Disable button if location is not picked
      />
    </KeyboardAvoidingView>
  );
};

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
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
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
    marginBottom: 20,
    fontSize: 12,
    textAlign: "center",
    color: ThemeProviderColors.Light.FontSubHeading,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  annotationFill: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(0, 122, 255, 0.9)",
    borderRadius: 10,
    transform: [{ scale: 0.6 }],
  },
});

export default TaskLocation;
