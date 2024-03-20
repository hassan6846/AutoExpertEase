import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Dimensions, Text, ScrollView } from 'react-native'
import MapView, { Callout } from "react-native-maps"
import GoogleMapDesign from '../../../../utils/GoogleMapDesign'
import { Button, Input, ListItem, Icon } from "@rneui/themed"
import CustomButton from '../../../../components/ButtonProps/ButtonProps'
import ThemeProviderColors from '../../../../provider/ThemeProvider'
const Height = Dimensions.get("screen").height
const TaskLocation = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* Input View Start */}
      <View style={Style.InputContainer}>
        <Input inputContainerStyle={Style.InputVoid} inputStyle={Style.InputMain} containerStyle={Style.InputCont} placeholder="Enter Your Location" />
        {/* Dropdown */}

      </View>
      {/* Input View Ends */}
      <MapView
        showsUserLocation={true}

        customMapStyle={GoogleMapDesign}
        style={Style.MapStyle} />
      <Button color={ThemeProviderColors.Light.Primary} containerStyle={Style.BtncontainerStyle} title="Next" />
      {/* Dropdown Container */}
      <View style={Style.DropdownContainer}>
        <ScrollView style={{ width: '80%', backgroundColor: "red" }}>
          <ListItem>
            <Icon size={10} name="map-marker" type="material-community" color="grey" />
            <ListItem.Content>
              <ListItem.Title>Samanabad</ListItem.Title>
              <ListItem.Subtitle>Lahore</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <Icon size={10} name="map-marker" type="material-community" color="grey" />
            <ListItem.Content>
              <ListItem.Title>Samanabad</ListItem.Title>
              <ListItem.Subtitle>Lahore</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
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

    justifyContent: "center",
    alignItems: "center",


  },
  DropdownContainer: {
    position: "absolute",
    width: "100%",
    top: Height / 10,
    alignItems: "center",
    backgroundColor: "cyan",
    paddingHorizontal: 30,
  },
  InputCont: {
    width: "80%",


  },
  InputMain: {
    paddingLeft: 10,
    fontSize: 14,
  }, InputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12,
  }
})
export default TaskLocation