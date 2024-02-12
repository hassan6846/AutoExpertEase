import { SafeAreaView, StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"

const ServiceTab = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView initialRegion={{
                latitude: 31.543812,
                longitude: 74.295223,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} style={styles.map} >

            </MapView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})
export default ServiceTab