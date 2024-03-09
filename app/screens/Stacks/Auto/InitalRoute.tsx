import { StyleSheet, SafeAreaView, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Text, Icon } from "@rneui/themed";
import CustomButton from "../../../components/ButtonProps/ButtonProps";
import GoogleMapDesign from "../../../utils/GoogleMapDesign";

const AutoFixInitalRoute = ({ navigation }: { navigation: any }) => {
    const [location, setLocation] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<string | any>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }else{
                ()=>navigation.navigate("Shop")
            }

            try {
                let currentLocation = await Location.getCurrentPositionAsync({});
                setLocation(currentLocation);
                console.log(currentLocation);
            } catch (error) {
                setErrorMsg("Error fetching location");
                throw (errorMsg)
            }
        })();
    }, []);

    if (!location) {
        // Return a loading indicator or handle the case when location is not available
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.03,// Adjust the value for the desired zoom level
                    longitudeDelta: 0.02, // Adjust the value for the desired zoom level,

                }}
                zoomControlEnabled
                loadingEnabled
                showsIndoors
                 provider={PROVIDER_GOOGLE}
                customMapStyle={GoogleMapDesign}
                
                userLocationCalloutEnabled
                showsCompass={false}
                showsUserLocation
                showsPointsOfInterest
                showsMyLocationButton={true}
                style={{ flex: 1, position: "relative" }}
            ></MapView>
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
                <CustomButton
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
