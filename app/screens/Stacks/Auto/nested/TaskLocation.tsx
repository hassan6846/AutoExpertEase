import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Dimensions, Text } from 'react-native'
import MapView, { Callout } from "react-native-maps"
import GoogleMapDesign from '../../../../utils/GoogleMapDesign'
import { Button, Input } from "@rneui/themed"
import CustomButton from '../../../../components/ButtonProps/ButtonProps'
import ThemeProviderColors from '../../../../provider/ThemeProvider'
const Height = Dimensions.get("screen").height
const TaskLocation = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>

      {/* Input View Start */}
      <View style={Style.InputContainer}>
        <Input 
        
        placeholder="Enter Your Location" />
        {/* Dropdown */}

      </View>
      {/* Input View Ends */}
      <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        customMapStyle={GoogleMapDesign}
        style={Style.MapStyle} />
      <Button color={ThemeProviderColors.Light.Primary} containerStyle={Style.BtncontainerStyle} title="Next" />
{/* Dropdown Container */}
      <View style={Style.DropdownContainer}>
        <Text>This is the dropdown container</Text>
      </View>
{/* Dropdown Container */}
    </KeyboardAvoidingView>
  )
}
//Styles
const Style = StyleSheet.create({
  MapStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",

  },
  // Button Container
  BtncontainerStyle: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    paddingHorizontal: 30,

  },
  // Styled
  InputContainer: {
    height: Height / 10,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  DropdownContainer: {
    position: "absolute",
    width: "100%",
    top:Height/9,
    backgroundColor: "cyan",
    paddingHorizontal: 30,
  }
})
export default TaskLocation