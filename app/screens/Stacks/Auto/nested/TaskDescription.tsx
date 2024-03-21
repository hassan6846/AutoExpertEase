import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { getHeight } from '../../../../utils/GetDimension'
import { Input, Text } from '@rneui/themed'
import ThemeProviderColors from '../../../../provider/ThemeProvider'
import { Avatar } from '@rneui/base'
import { bike } from '../../../../constants/ImagesConstants'

const TaskDescription = () => {
  return (
    <ScrollView style={Styles.container}>
      {/* Vehicle type */}
      <Text style={{ fontSize: 14, fontWeight: "bold",marginBottom:5 }}>Vehicle Type</Text>
      <ScrollView contentContainerStyle={{flexDirection:"row",columnGap:5}}>
        <Avatar size={getHeight/8} source={{uri:bike}} />
        <Avatar size={getHeight/8} source={{uri:bike}} />
        <Avatar size={getHeight/8} source={{uri:bike}} />
      </ScrollView>
      {/* Vehicle ended */}
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>Vehicle Type</Text>
      <Input  labelStyle={{marginBottom:4}} multiline inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={Styles.input} label="Description" numberOfLines={10} />
    </ScrollView>
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
    borderWidth: 2,
    borderColor: ThemeProviderColors.Light.Primary,
    textAlignVertical: 'top', // Align text to the top (start) of the input
    minHeight: 200, // Set minimum height as needed
    padding: 10,
  },
})

export default TaskDescription