import { View, StyleSheet, SafeAreaView } from "react-native"
import { Text } from "@rneui/themed"
import { MapView } from "@rnmapbox/maps"

const AutoFixInitalRoute = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                style={Styles.map} >

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