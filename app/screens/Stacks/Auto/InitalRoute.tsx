import { StyleSheet, SafeAreaView, View } from "react-native";
import { useEffect, useState } from "react";
//sdks
import * as Location from "expo-location";
import Mapbox from "@rnmapbox/maps";
Mapbox.setAccessToken('pk.eyJ1IjoiaGFzc2Fuc2hlcml5YXIiLCJhIjoiY2xybnIxam00MTg0djJscXI1bXVxNTR3aCJ9.4r9apA2hHuxU3tOoGDVZbQ');

//lib
import { Text, Icon } from "@rneui/themed";
//component
import CustomButton from "../../../components/ButtonProps/ButtonProps";
//state
import { setLatitude, setLongitude } from "../../../slices/LocationSlice";
import { useDispatch } from "react-redux";

const AutoFixInitalRoute = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();


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
      <Mapbox.MapView
      focusable={true}
      style={Styles.mapView} />
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
  mapView: {
    flex: 1,

    width: "100%",
    height: "100%",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default AutoFixInitalRoute;
