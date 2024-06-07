import { StyleSheet, SafeAreaView, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Text, Icon } from "@rneui/themed";
import CustomButton from "../../../components/ButtonProps/ButtonProps";
import LottieView from "lottie-react-native";

// States Management
import { useDispatch } from "react-redux";
import { setLongitude, setLatitude } from "../../../slices/LocationSlice";

const AutoFixInitalRoute = ({ navigation }: { navigation: any }) => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [longitude, setLongitudeState] = useState<number | null>(null);
    const [latitude, setLatitudeState] = useState<number | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            try {
                let currentLocation = await Location.getCurrentPositionAsync({});
                setLocation(currentLocation);
                console.log(currentLocation);
                // Set longitude and latitude to state as numbers
                setLongitudeState(currentLocation.coords.longitude);
                setLatitudeState(currentLocation.coords.latitude);
                console.log("EVAL VALUES ARE |" + currentLocation.coords.longitude + ", " + currentLocation.coords.latitude);
            } catch (error) {
                setErrorMsg("Error fetching location");
                console.error(error);
            }
        })();
    }, []);

    if (!location) {
        // Return a loading indicator or handle the case when location is not available
        return (
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff", alignItems: "center" }}>
                <LottieView
                    autoPlay
                    source={require("../../../assets/lottie/fadeCircle.json")}
                    style={{
                        width: 300,
                        height: 300,
                    }}
                />
                <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "bold", paddingHorizontal: 24 }}>Finding Experts Nearby You!</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={Styles.map}>
            <MapView
                initialRegion={{
                    latitude: latitude ?? 30.3753, // Default value for Pakistan
                    longitude: longitude ?? 69.3451, // Default value for Pakistan
                    latitudeDelta: 0.03, // Adjust the value for the desired zoom level
                    longitudeDelta: 0.02, // Adjust the value for the desired zoom level
                }}
                zoomControlEnabled
                loadingEnabled
                showsIndoors
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
                <Text style={{ textAlign: "center", marginBottom: 15 }}>
                    Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
                </Text>
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
