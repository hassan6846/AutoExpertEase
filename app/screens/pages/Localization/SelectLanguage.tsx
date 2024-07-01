// modules
import { SafeAreaView, ScrollView, KeyboardAvoidingView, StyleSheet, View, Pressable } from "react-native";
import { useState } from "react";
//libary
import { Button, Text } from "@rneui/themed";
import CountryFlag from "react-native-country-flag";
//utils
import { getHeight } from "../../../utils/GetDimension";
import ThemeProviderColors from "../../../provider/ThemeProvider";
//state
import { setLanguage } from "../../../slices/LanguageSlices";
import { useDispatch } from "react-redux";
// main void Function
const SelectLanguage = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  // ButtonState for Selecting Language
  const [selectedLanguage, setSelectedLanguage] = useState<string>(''); // State to track selected language
  const [isButtonDisabled, setIsDisabled] = useState<boolean>(true)

  // Language Support Array
  const LanguageSupport = [
    {
      countryname: "India",
      language: "हिंदी",
      iso: 'in'
    },
    {
      countryname: "United States",
      language: "English",
      iso: 'us'
    },
    {
      countryname: "France",
      language: "Français",
      iso: 'fr'
    },
    {
      countryname: "Germany",
      language: "Deutsch",
      iso: 'de'
    },
    {
      countryname: "Spain",
      language: "Español",
      iso: 'es'
    },
    {
      countryname: "Italy",
      language: "Italiano",
      iso: 'it'
    },
    {
      countryname: "Japan",
      language: "日本語",
      iso: 'jp'
    },
    {
      countryname: "China",
      language: "中文",
      iso: 'cn'
    },
    {
      countryname: "Brazil",
      language: "Português",
      iso: 'br'
    },
    {
      countryname: "Russia",
      language: "Русский",
      iso: 'ru'
    },
    {
      countryname: "South Korea",
      language: "한국어",
      iso: 'kr'
    },
    {
      countryname: "Mexico",
      language: "Español",
      iso: 'mx'
    },
    {
      countryname: "Canada",
      language: "English",
      iso: 'ca'
    },
    {
      countryname: "Australia",
      language: "English",
      iso: 'au'
    },
    {
      countryname: "Netherlands",
      language: "Nederlands",
      iso: 'nl'
    },
    {
      countryname: "Sweden",
      language: "Svenska",
      iso: 'se'
    },
    {
      countryname: "Norway",
      language: "Norsk",
      iso: 'no'
    },
    {
      countryname: "Denmark",
      language: "Dansk",
      iso: 'dk'
    },
    {
      countryname: "Finland",
      language: "Suomi",
      iso: 'fi'
    },
    {
      countryname: "Switzerland",
      language: "Deutsch",
      iso: 'ch'
    },
    // Add more language support objects as needed
  ];
  //HandleLanguageSelect
  const handleLanguageSelect = (languageIso: string) => {
    setSelectedLanguage(languageIso);
    setIsDisabled(false); // Enable the button when a language is selected
  };
  //handle Language Select Confirm from button
  const HandleLanguageCHange=()=>{
    dispatch(setLanguage(selectedLanguage))
    alert("You selected Lanuage "+selectedLanguage)
  }
  return (
    <KeyboardAvoidingView style={styles.LanguageContainer} behavior="padding">
      <Text style={styles.SelectLangHead} h4={true}>Choose The Language</Text>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView  style={{marginBottom:130}}>
          {/* Map Language Support Here */}
          {LanguageSupport.map((language, index) => (
          <Pressable
          key={index}
          onPress={() => handleLanguageSelect(language.iso)}
          style={({ pressed }) => [
            styles.languageItem,
            selectedLanguage === language.iso && { borderColor: ThemeProviderColors.Light.Primary, borderWidth: 2 },
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CountryFlag isoCode={language.iso} size={24} style={styles.flagIcon} />
            <Text>{language.countryname}</Text>
          </View>
          <Text>{language.language}</Text>
        </Pressable>
          ))}
        </ScrollView>
        <Button onPress={HandleLanguageCHange} disabled={isButtonDisabled} containerStyle={{ position: "absolute", bottom: getHeight / 20, width: "100%", }} buttonStyle={{ paddingVertical: 10 }} color={ThemeProviderColors.Light.Primary} title="Change Language" />
      </SafeAreaView>

    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  LanguageContainer: {
    padding: 30,
    flex: 1,
    backgroundColor: "#fff"
  },
  SelectLangHead: {
    textAlign: "left",
    marginTop: 20,
    color: "#3E4958",
    fontWeight: "normal",
    marginBottom: 10,
    marginLeft: 10,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 5,
    padding: 14,
    paddingVertical: 14,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  flagIcon: {
    marginRight: 10,
  },
  // Conditional Toggle 
});

// exported
export default SelectLanguage;
