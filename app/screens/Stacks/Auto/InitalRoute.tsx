import { View, StyleSheet, SafeAreaView } from "react-native"
import { Text } from "@rneui/themed"
import MapView, { Marker } from "react-native-maps"

const AutoFixInitalRoute = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView initialRegion={{
                latitude: 31.543812,
                longitude: 74.295223,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} style={Styles.map} >

            </MapView>
        </SafeAreaView>
    )

}
// StyleSheet
const Styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})
export default AutoFixInitalRoute