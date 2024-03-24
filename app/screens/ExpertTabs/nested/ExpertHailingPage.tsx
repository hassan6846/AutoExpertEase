import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import {useFocusEffect, useNavigation} from "@react-navigation/native"
import showAlert from '../../../utils/ShowAlert'

const ExpertHailingPage = ({navigation}:{navigation:any}) => {
  const navigator = useNavigation()
  useFocusEffect(
    React.useCallback(() => {

      Alert.alert(
        "Alert Title",
        "Hello",
        [
          {
            text: "OK",
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