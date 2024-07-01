import { StyleSheet, SafeAreaView, View } from "react-native";
import { useEffect, useState } from "react";
//sdks
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
//lib
import { Text, Icon } from "@rneui/themed";
//component
import CustomButton from "../../../components/ButtonProps/ButtonProps";
//state
import { setLatitude, setLongitude } from "../../../slices/LocationSlice";
import { useDispatch, useSelector } from "react-redux";

const AutoFixInitalRoute = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const API_KEY = "AIzaSyB0QWaVmpZyDejTE9ybNN3SeUM-Bh8bawA";
  
  const Latitude = useSelector((state: any) => state.location.latitude);
  const Longitude = useSelector((state: any) => state.location.longitude);
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
      dispatch(setLongitude(location.coords.longitude));
      dispatch(setLatitude(location.coords.latitude));
    })();
  }, []);

  return (
    <SafeAreaView style={Styles.map}>
      <MapView
        key={API_KEY}
        initialRegion={{
          latitude: Latitude, // Default value for Pakistan
          longitude: Longitude, // Default value for Pakistan
          latitudeDelta: 0.03, // Adjust the value for the desired zoom level
          longitudeDelta: 0.02, // Adjust the value for the desired zoom level
        }}
        zoomControlEnabled
        loadingEnabled={true}
        showsIndoors={true}
        provider={PROVIDER_GOOGLE}
        userLocationCalloutEnabled
        showsCompass={false}
        showsUserLocation={true}
        showsPointsOfInterest
        showsMyLocationButton={true}
        style={{ flex: 1, position: "relative" }}
      />
      <View
        style={{
          height: 250,
          backgroundColor: "#fff",
          padding: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }} h4>
          Get Instant Help
        </Text>
        <Text style={{ textAlign: "center", marginBottom: 15 }} h2>
          Anywhere
        </Text>
        {location && (
          <Text style={{ textAlign: "center", marginBottom: 15 }}>
            Latitude: {location.coords.latitude}, Longitude:{" "}
            {location.coords.longitude}
          </Text>
        )}
        <CustomButton
          function={() => navigation.navigate("task_location")}
          BtnRadius={20}
          icon={<Icon name="add" color="white" type="material" />}
          title="Post a Task"
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default AutoFixInitalRoute;
