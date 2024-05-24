import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

///Libraries
import { Button, Icon, Text, Input } from "@rneui/themed"
import ThemeProviderColors from '../../../../provider/ThemeProvider'
import { getHeight } from '../../../../utils/GetDimension'

const EnterName = ({ navigation }: { navigation: any }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#fff",padding:20 }}>

     <ScrollView contentContainerStyle={{justifyContent:"center"}} style={{flex:1,marginTop:20}}>
      {/* Profile View */}
      <View style={Styles.ProfileIcon}>
      <Icon size={40} type='material' name='person' raised={true}/>
      </View>
      {/* Profile View */}
      <Text style={Styles.Heading} h4>Create Your Account</Text>
      <Text style={Styles.subheading} >Please Enter Info to Create your Account</Text>
     <View style={Styles.InputContainer}>
        <Input inputContainerStyle={Styles.InputVoid} labelStyle={{fontSize:13,marginBottom:5,marginTop:20}} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} label="First Name" placeholder="First Name" />
      </View>
      <View style={Styles.InputContainer}>
        <Input inputContainerStyle={Styles.InputVoid} labelStyle={{fontSize:13,marginBottom:5,marginTop:20}} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} label="Last Name" placeholder="Last Name" />
      </View>
      <View style={Styles.InputContainer}>
        <Input inputContainerStyle={Styles.InputVoid} labelStyle={{fontSize:13,marginBottom:5,marginTop:20}} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} label="Email" placeholder="Enter Email" />
      </View>
      <View style={Styles.InputContainer}>
        <Input inputContainerStyle={Styles.InputVoid} labelStyle={{fontSize:13,marginBottom:5,marginTop:20}} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} label="Phone" placeholder="Enter Phone" />
      </View>
      <View style={Styles.InputContainer}>
        <Input inputContainerStyle={Styles.InputVoid} labelStyle={{fontSize:13,marginBottom:5,marginTop:20}} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} label="Password" placeholder="Enter Password" />
      </View>
      <View style={Styles.InputContainer}>
        <Input inputContainerStyle={Styles.InputVoid} labelStyle={{fontSize:13,marginBottom:5,marginTop:20}} inputStyle={Styles.InputMain} containerStyle={Styles.InputCont} label="Repeat Password" placeholder="Repeat Password" />
      </View>
      <Button onPress={() => navigation.navigate("verifyotp")} buttonStyle={{ borderRadius: 30, paddingHorizontal: 6, paddingVertical: 10, }} color={ThemeProviderColors.Light.Primary} containerStyle={{ paddingHorizontal: 60,marginTop:10 }} title="Next" >Next<Icon name='arrow-right-alt' color="#fff" containerStyle={{ marginLeft: 5 }} type='material'  /></Button>

     </ScrollView>

    </KeyboardAvoidingView>
  )
}
const Styles = StyleSheet.create({
  Heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  subheading: {
    color: "#97ADB6",
    textAlign: "center"
  },
  InputContainer: {
    marginTop:20,
    height: getHeight / 12,

    justifyContent: "center",
    alignItems: "center",
  },
  InputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12,
  }, InputMain: {
    paddingLeft: 10,
    fontSize: 14,
  }, InputCont: {
    width: "100%",
  },
  ProfileIcon:{
    alignItems:"center"
  }
})
export default EnterName