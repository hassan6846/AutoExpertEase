import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

//librarry 
import { Text } from "@rneui/themed"
//components
import InputComponent from '../../../../components/InputComponent/InputComponent'

const VendorVerfication = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10 }}>
                <Text style={{ textAlign: "center" }} h4>Basic Info</Text>
                <InputComponent label="Shop Name" />

                <InputComponent placeholder="Use active email to recieve messsages and alerts" label="E-mail" />
                <InputComponent label="Buisness Phone" />
            </View>

            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10 }}>
                <Text style={{ textAlign: "center" }} h4>Buisness Details</Text>
                <InputComponent value="Pakistan" label="Country" />
                <InputComponent value="Lahore" label="city" />
                <InputComponent label="Address/Pickup Location" />
                <InputComponent value="54000" label="ZipCode /Postal Code" />
                <InputComponent placeholder="Helps to Find you nearby Customers for faster Sales (only Signup this form at buisness place ) " label="Buisness Coordinates" />

            </View>
            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10 }}>
                <Text style={{ textAlign: "center" }} h4>Payment Information </Text>
                <InputComponent placeholder="Enter Account Number to recieve payments." label="Country" />


            </View>

            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10 }}>
                <Text style={{ textAlign: "center" }} h4>Upload Document </Text>
                <InputComponent placeholder="Enter Cnic Numnber" label="cnic no" />
                <InputComponent placeholder="Enter ntn number" label="ntn" />

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})
export default VendorVerfication