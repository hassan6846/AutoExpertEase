import { ScrollView, StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import React from 'react'
import { getHeight } from '../../../../utils/GetDimension'
import { Input, LinearProgress, Text, Button } from '@rneui/themed'
import ThemeProviderColors from '../../../../provider/ThemeProvider'
import { Avatar, Icon, } from '@rneui/base'
import { bike,Sedan,truck } from '../../../../constants/ImagesConstants'

const TaskDescription = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearProgress trackColor={ThemeProviderColors.Light.Primary} />
      <ScrollView style={Styles.container}>

        {/* Input */}
        <View style={Styles.InputContainer}>
          <Input  inputContainerStyle={Styles.InputVoid} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} placeholder="Title" />
          {/* Dropdown */}

        </View>
        {/* Input MainVOid*/}
        {/* Vehicle type */}
        <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>Vehicle Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", columnGap: 10 }}>
          <Avatar size={getHeight / 8} avatarStyle={{objectFit:"contain"}} source={{ uri: bike }} />
          <Avatar size={getHeight / 8} avatarStyle={{objectFit:"contain"}}  source={{ uri: Sedan }} />
          <Avatar size={getHeight / 8} avatarStyle={{objectFit:"contain"}}  source={{ uri: truck }} />
        </ScrollView>

        {/* Upload Video */}
        <View style={{backgroundColor:"red",paddingHorizontal:10,height:getHeight/5,marginTop:10,marginBottom:12,justifyContent:"center",alignItems:"center"}}>
         <Text>Upload Media Image or Video</Text>
        <Icon type='material' name='upload'/>
        </View>
        {/* Upload media Ends */}
        {/* Vehicle ended */}
        <Input labelStyle={{ marginBottom: 4 }} multiline inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: "#e5e5e5", borderRadius: 5 }} inputStyle={Styles.input} label="Description" numberOfLines={10} />
        <Button color={ThemeProviderColors.Light.Primary} title="Post Now" />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const Styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    borderRadius: 5,

    fontSize: 12,

    textAlignVertical: 'top', // Align text to the top (start) of the input
    minHeight: 200, // Set minimum height as needed
    padding: 10,
  },
  ButtonStyle: {

  },
  InputContainer: {
    height: getHeight / 10,

    justifyContent: "center",
    alignItems: "center",
  },
  InputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12,
  },
  InputMain:{
    paddingLeft: 10,
    fontSize: 14,
  },
  InputCont:{
    width: "100%",

  }
})

export default TaskDescription