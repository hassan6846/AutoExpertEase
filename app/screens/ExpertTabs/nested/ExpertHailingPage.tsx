import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import {useFocusEffect, useNavigation} from "@react-navigation/native"
import showAlert from '../../../utils/ShowAlert'

const ExpertHailingPage = ({navigation}:{navigation:any}) => {
  const navigator = useNavigation()
  useFocusEffect(
    React.useCallback(() => {

      Alert.alert(
        "You are not verified to use this feature.",
        "Become An Expert /Buisness Parthners after Submiting Your Simple and Easy KYC form and will let you know... and you after some decision. and verification.",
        [
          {
            text: "Cancel",
            onPress: () => {
              // Redirect to another page here
              navigation.navigate('profile'); // Navigate to AnotherPage
            }
          },
          {
            text: "Go",
            onPress: () => {
              // Redirect to another page here
              navigation.navigate('expertverify'); // Navigate to AnotherPage
            }
          }
        ]
      );



    }, [navigator])
  );
  return (
    <View style={style.container}>
    
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  }
})
export default ExpertHailingPage