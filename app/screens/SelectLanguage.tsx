//modules
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native"
import { Text, Input, Button } from "@rneui/themed"
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
      <Button buttonStyle={styles.LanguageSelectBTn} color="#E04E2F" title="Select" />
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
