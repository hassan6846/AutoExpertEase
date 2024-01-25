//modules
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native"
import { Text, Input, Button } from "@rneui/themed"
import CustomButton from "../components/ButtonProps/ButtonProps"
//utils

//main void Function
const SelectLanguage = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text style={styles.SelectLangHead} h3={true}>Choose The Language</Text>
      <Input placeholder="Search Desired Language" />
      <SafeAreaView>
        <ScrollView></ScrollView>
      </SafeAreaView>
      <CustomButton title="Select Language." />
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  SelectLangHead: {
    textAlign: "center"
  }, LanguageSelectBTn: {
    padding: 12,
    borderRadius: 10,
  }
})

// exported
export default SelectLanguage
