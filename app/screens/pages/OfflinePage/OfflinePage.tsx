import { SafeAreaView, StyleSheet, View } from "react-native"
import { Text, Icon } from "@rneui/themed"
import CustomButton from "../../../components/ButtonProps/ButtonProps"
// expo Refresh Library.
import * as Updates from 'expo-updates'
//Image 


const OfflinePage = () => {
    // Handle The Refresh Through The Redux.
    const HandleClick = () => {
        Updates.reloadAsync()
    }

    return (
        <SafeAreaView style={styles.OfflineContainer} >
            <View style={styles.OfflineWrapper}>
                <Text h4 style={styles.OfflineHead} >Ooops... Something Went Wrong</Text>
                <Icon color="rgb(95,99,104)" size={150} name="wifi-off" type="material" />
                <Text style={{ textAlign: "center", fontSize: 14 }}>You might have slow Internet Connection.Please Try Reloading the app.</Text>
            </View>
            <CustomButton icon={{ name: 'refresh', color: "white", }} title="Retry" />

        </SafeAreaView>
    )
}

// styleSheet
const styles = StyleSheet.create({
    OfflineContainer: {
        padding: 40,
        flex: 1,
        backgroundColor: "#fff"

    }, OfflineWrapper: {
        flex: 1,
        padding: 10,

        justifyContent: 'center'
    },
    OfflineHead: {
        textAlign: "center"
    }

})

export default OfflinePage