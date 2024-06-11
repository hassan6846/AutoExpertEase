import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { Avatar, Text, Icon } from '@rneui/themed';
import { getHeight } from '../../../utils/GetDimension';
import ThemeProviderColors from '../../../provider/ThemeProvider';
import { moneyman, vendor, VehicleRental, VehicleListingVerification, MechanicVerifiction } from '../../../constants/ImagesConstants'; // Make sure this imports the correct image URI


const SelectRole = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView style={{ flex: 1, marginTop: 20, padding: 20 }}>
      <View style={Styles.EarnCard}>

        <Text h3 style={{ marginTop: 30, marginBottom: 10 }}>Verify yourself</Text>


        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", columnGap: 10 }}>

          <Icon type='material' size={10} name='check-circle' />
          <Text>To Work Flexible Hours</Text>

        </View>

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", columnGap: 10 }}>

          <Icon type='material' size={10} name='check-circle' />
          <Text>To Know Your Customers.</Text>

        </View>

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", columnGap: 10 }}>

          <Icon type='material' size={10} name='check-circle' />
          <Text>Get Benifits for services</Text>

        </View>

        <Avatar containerStyle={Styles.Image} size={200} source={{ uri: moneyman }} />
      </View>
      {/* Verification TYps */}
      {/* Expert Veriifcation */}
      {/* Vehicle Post VErification */}
      {/* Rental Verification  */}
      {/* Work As Vendor */}
  
      <Pressable  onPress={()=>navigation.navigate('expertverification')} style={Styles.VerificationCard}>
        <Avatar avatarStyle={{ objectFit: "contain" }} size={50} source={{ uri: MechanicVerifiction }} />
        <Text>Expert Verification</Text>
      </Pressable>

      {/* Verification Rental */}
      <Pressable onPress={()=>navigation.navigate('rentalverification')} style={Styles.VerificationCard}>
        <Avatar avatarStyle={{ objectFit: "contain" }} size={50} source={{ uri: VehicleRental }} />
        <Text>Vehicle Rental Verification</Text>
      </Pressable>
      {/* Work as Vendor */}
      <Pressable onPress={()=>navigation.navigate('vendorverification')} style={Styles.VerificationCard}>
        <Avatar size={50} source={{ uri: vendor }} />
        <Text>Work As Vendor</Text>
      </Pressable>

    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  EarnCard: {
    height: getHeight / 4, // Call the getHeight function
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    position: 'relative',
    backgroundColor: ThemeProviderColors.Light.FontSubHeading
  },
  Image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: "10%"
  },
  VerificationCard: {
    backgroundColor: "#fff",
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingVertical: 12,
    borderRadius: 5,
    paddingHorizontal: 10,

  }
});

export default SelectRole;
