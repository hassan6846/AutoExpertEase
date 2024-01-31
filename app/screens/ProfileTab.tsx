import { ScrollView, StyleSheet, View } from "react-native"
import { Text, ListItem, Icon, Badge, Avatar } from "@rneui/themed"
import {} from "@gorhom/bottom-sheet"

const ProfileTab = () => {
    return (
        <ScrollView style={Styles.ProfileSettingContainer}>
        
        </ScrollView>
    )
}
//Stylesheet Please Follow The Hirarchy boyies.
//think container as a shipment contianer and Wrapper as a wrapper on container

const Styles = StyleSheet.create({
    ProfileSettingContainer: {
    
        backgroundColor: "red",
        flex: 1,
        padding: 30,
    }
})
export default ProfileTab