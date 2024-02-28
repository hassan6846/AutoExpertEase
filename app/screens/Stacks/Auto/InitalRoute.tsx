import { StyleSheet, SafeAreaView, View } from "react-native"
import MapView, { Polyline } from "react-native-maps"
import { Text,Icon } from "@rneui/themed"
import CustomButton from "../../../components/ButtonProps/ButtonProps"


const AutoFixInitalRoute = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView

                zoomControlEnabled
                loadingEnabled
                showsIndoors
                userLocationCalloutEnabled

                showsCompass={false}
                showsUserLocation
                showsPointsOfInterest
                showsMyLocationButton={true}
                style={{ flex: 1, position: "relative" }} >
            </MapView>
            <View style={{ height: 250, backgroundColor: "#fff",padding:20,display:'flex',justifyContent:'center' }}>
                <Text style={{textAlign:"center"}} h4>Get Instant Help</Text>
                <Text style={{textAlign:"center",marginBottom:15}} h2>Anywhere</Text>
                <CustomButton BtnRadius={20} icon={<Icon name="add" color="white" type="material"/>} title="Post a Task"/>
            </View>
        </SafeAreaView>
    )

}
// StyleSheet
const Styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
})
export default AutoFixInitalRoute