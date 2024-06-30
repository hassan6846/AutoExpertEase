import { ScrollView, StyleSheet, View,Alert } from 'react-native'
import React,{useState} from 'react'

//librarry 
import { Text,Button} from "@rneui/themed"
//components
import InputComponent from '../../../../components/InputComponent/InputComponent'
//state manegment
import { useSelector } from 'react-redux'

const VendorVerfication = () => {
    const id = useSelector((state: any) => state.auth.userid);

    const [shopname, setShopname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setphone] = useState("")
    const [address, setAddress] = useState("")
    const [coordinates,setcoordinates] = useState("-35.3,-40.2")
    const [accountno, setAccountno] = useState("")
    const [ntnno, setNtnno] = useState("")
    const [cnic, setCnic] = useState("")

    const clearStates = () => {
        setShopname("")
        setEmail("")
        setphone("")
        setAddress("")
        setcoordinates("-35.3,-40.2")
        setAccountno("")
        setNtnno("")
        setCnic("")
    }
    const handleFormSubmit = async () => {
        try {
            const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/vendor/apply', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    shopname: shopname,
                    email: email,
                    buisnessphone: phone,
                    address: address,
                    coordinates: coordinates,
                    accountno: accountno,
                    ntnno: ntnno,
                    userid: id,
                    cnic: cnic
                })
            });
    
            if (response.status === 500 || response.status === 409) {
                Alert.alert('Error', 'You have already applied for Vendor, we will notify you after approval');
                return;
            }
    
    
            const data = await response.json();
            console.log(data);
            Alert.alert('Form Submitted', 'Your expert application has been submitted successfully! Wait for approval', [
                { text: 'Ok', onPress: () => clearStates() },
            ]);
            console.log({ shopname, email, phone, address, coordinates, accountno, ntnno, cnic });
        } catch (error) {
            console.error('Error submitting form:', error);
            Alert.alert('Error', 'There was a problem submitting the form. Please try again later.');
        }
    };
    
const isFormComplete=  shopname && email && phone && address && coordinates && accountno && ntnno && cnic
    return (
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10 }}>
                <Text style={{ textAlign: "center" }} h4>Basic Info</Text>
                <InputComponent value={shopname}  onChangeText={setShopname} label="Shop Name" />

                <InputComponent value={email} onChangeText={setEmail} placeholder="Use active email to recieve messsages and alerts" label="E-mail" />
                <InputComponent value={phone} onChangeText={setphone} label="Buisness Phone" />
            </View>

            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10 }}>
                <Text style={{ textAlign: "center" }} h4>Buisness Details</Text>
                <InputComponent value="Pakistan" label="Country" />
                <InputComponent value="Lahore" label="city" />
                <InputComponent value={address} onChangeText={setAddress} label="Address/Pickup Location" />
                <InputComponent value="54000" label="ZipCode /Postal Code" />
                <InputComponent value={coordinates} onChangeText={setcoordinates} placeholder="Helps to Find you nearby Customers for faster Sales (only Signup this form at buisness place ) " label="Buisness Coordinates" />

            </View>
            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 10 }}>
                <Text style={{ textAlign: "center" }} h4>Payment Information </Text>
                <InputComponent value={accountno} onChangeText={setAccountno} placeholder="Enter Account Number to recieve payments." label="AccNo." />


            </View>

            <View style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, marginBottom: 50 }}>
                <Text style={{ textAlign: "center" }} h4>Document Details </Text>
                <InputComponent  value={cnic} onChangeText={setCnic} placeholder="Enter Cnic Numnber" label="cnic no" />
                <InputComponent value={ntnno} onChangeText={setNtnno} placeholder="Enter ntn number" label="ntn" />
                <Button  color="#E04E2F" disabled={!isFormComplete}  onPress={handleFormSubmit} title="Request Vendor Ship"/>
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