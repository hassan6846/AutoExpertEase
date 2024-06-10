import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
//library
import { Text,ListItem,Button,Avatar} from "@rneui/themed"
//Components
import InputComponent from '../../../../components/InputComponent/InputComponent'
import { AvatarSrc } from '../../../../constants/ImagesConstants'

const Checkout = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5, marginBottom: 10 }}>
                <Text h4 style={{textAlign:'center'}}>Contact Details</Text>

                <InputComponent keyboardType="numeric" label="Firstname" />
                <InputComponent keyboardType="numeric" label="Lastname" />
                <InputComponent keyboardType="phone-pad" label="Phone" />
            </View>
            <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5, marginBottom: 10 }}>
                <Text h4 style={{textAlign:'center'}} >Address Details</Text>

                <InputComponent keyboardType="numeric" label="Home Address" />
                <InputComponent keyboardType="numeric" label="zip code" />
                <InputComponent keyboardType="phone-pad" label="Nearby Town/Distric/County" />
            </View>
            <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5, marginBottom: 10 }}>
                <Text h4 style={{textAlign:'center'}} >Order Details.</Text>
               <ListItem>
                <Avatar avatarStyle={{borderRadius:5}} size={60} source={{uri:AvatarSrc}}/>
                <ListItem.Content>
                <ListItem.Title style={{fontSize:14}}>New Tyres for Volkswagos and g class Cars</ListItem.Title>
                <ListItem.Subtitle style={{ fontSize:10,fontWeight:"300"}}>Qty x 1</ListItem.Subtitle>
                <ListItem.Title style={{fontSize:13,fontWeight:"bold"}}>400Rs</ListItem.Title>
                </ListItem.Content>
               </ListItem>
            </View>
            <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5, marginBottom: 10 }}>
                <Text h4 style={{textAlign:'center'}} >Select Payment Method</Text>
                <ListItem>

                <ListItem.CheckBox checked={false}/>
       
                   <ListItem.Content>
                    
                     <ListItem.Title style={{fontSize:13}}>Cash On Delivery</ListItem.Title>
                     <ListItem.Subtitle style={{fontSize:12}}>Pay Bill and get product at the arrival at your door Step</ListItem.Subtitle>
                   </ListItem.Content>
          
                </ListItem>

                <ListItem>

                <ListItem.CheckBox checked={false}/>
       
                   <ListItem.Content>
                    
                     <ListItem.Title style={{fontSize:13}}>Online Payment</ListItem.Title>
                     <ListItem.Subtitle style={{fontSize:12}}>Cashless Payment without hassle.</ListItem.Subtitle>
                   </ListItem.Content>
          
                </ListItem>
            </View>
            <Button buttonStyle={{marginBottom:100}} title="Place Order"/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:"relative",
        padding: 30,

    },
    
})
export default Checkout