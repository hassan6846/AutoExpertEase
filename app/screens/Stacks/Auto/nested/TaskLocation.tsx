
import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Dimensions, Text, ScrollView } from 'react-native'
import MapView, { Callout } from "react-native-maps"
import GoogleMapDesign from '../../../../utils/GoogleMapDesign'
import { Button, Input, ListItem, Icon } from "@rneui/themed"
import ThemeProviderColors from '../../../../provider/ThemeProvider'
import { getHeight as Height } from '../../../../utils/GetDimension'

const TaskLocation = ({ navigation }: { navigation: any }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* Input View Start */}
      <View style={Style.InputContainer}>
        <Input  onFocus={()=>navigation.navigate('querylocation')}  inputContainerStyle={Style.InputVoid} inputStyle={Style.InputMain} containerStyle={Style.InputCont} placeholder="Enter Your Location" />
        {/* Dropdown */}

      </View>
      {/* Input View Ends */}
      <MapView
        showsUserLocation={true}

        customMapStyle={GoogleMapDesign}
        style={Style.MapStyle} />
      <Button onPress={() => navigation.navigate('task_description')} color={ThemeProviderColors.Light.Primary} containerStyle={Style.BtncontainerStyle} title="Next" />
      {/* Dropdown Container */}

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