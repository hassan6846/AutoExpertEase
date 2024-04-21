import { View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'

//library
import { Button, Text } from "@rneui/themed"
import Input from "react-native-otp-textinput"
//utils
import { EmailOtp } from '../../../../constants/ImagesConstants'
import { getHeight } from '../../../../utils/GetDimension'
import ThemeProviderColors from '../../../../provider/ThemeProvider'
import { ScrollView } from 'react-native-gesture-handler'
const VerifyEmailOtp = ({ navigation }: { navigation: any }) => {
  return (
    <KeyboardAvoidingView style={Styles.EmailOtp}>
      <ScrollView>
        {/* ImageContainer */}
        <View style={Styles.ImageContainer}>
          <Image style={{ height: getHeight / 4, objectFit: "contain" }} source={{ uri: EmailOtp }} />
        </View>
        {/* ImageContainer ENDS */}
        <Text style={Styles.heading} h4>Email Verification</Text>
        <Text style={Styles.SubHeading}>The Email Verification Code is being Send to ha6817334@gmail.com</Text>
        <Input containerStyle={{ paddingHorizontal: 30 }} textInputStyle={{ borderWidth: 2, borderBottomWidth: 2, borderRadius: 5, justifyContent: "space-around" }} tintColor={ThemeProviderColors.Light.Primary} />
        <Button containerStyle={{ paddingHorizontal: 30, marginTop: 10 }} color={ThemeProviderColors.Light.Primary} title="Finish" />
        {/* STARTOVER CONTAINER */}
        <View style={Styles.StartOver}>
          <Text style={{ color: "#97ADB6" }}>Didn't Recieve Code in E-Mail?</Text>
          <Text style={{ color: ThemeProviderColors.Light.Primary }} >StartOver</Text>
        </View>
        {/* STARTOVER CONTAINER */}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const Styles = StyleSheet.create({
  EmailOtp: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ImageContainer: {
    marginTop: 60
  },
  heading: {
    textAlign: 'center',
    marginTop: 20,
  },
  SubHeading: {
    textAlign: 'center',
    marginTop: 10,
    color: "#97ADB6",
    marginBottom: 20,
    paddingHorizontal: 10
  },
  StartOver: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 5
  }
})
export default VerifyEmailOtp