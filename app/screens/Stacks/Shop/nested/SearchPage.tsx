import React, { useState } from "react";
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Pressable, View,Platform} from "react-native";
import { Icon, Text, Input } from "@rneui/themed";
import { getHeight } from "../../../../utils/GetDimension";
import { useFocusEffect } from "@react-navigation/native";

const Search = ({ navigation }: { navigation: any }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : getHeight/5} // Adjust as needed
      >
        <View style={{ height:getHeight/10, flexDirection: "row", justifyContent: "center", alignItems: "flex-end", paddingHorizontal: 20,marginTop:30}}>
          <Pressable onPress={() => navigation.navigate("ShopContainer")} style={({ pressed }) => [
            { alignSelf: "center", padding: 10, borderRadius: 70, backgroundColor: pressed ? "rgb(250, 250, 255)" : "white" }
          ]}>
            <Icon name="arrow-back"/>
          </Pressable>
          <Input onChangeText={handleSearchTermChange} value={searchTerm} inputContainerStyle={SearchStyles.InputVoid} inputStyle={SearchStyles.InputMain} containerStyle={SearchStyles.InputCont} placeholder="Search Anything" />
        </View>

        <Pressable onPress={() => navigation.navigate("searchresults")} style={({ pressed }) => [
          SearchStyles.SearchList,
          {
            backgroundColor: pressed ? "#d9d9d9" : "#fff"
          }
        ]}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Icon name="search" type="material" style={{ marginRight: 10 }} />
            <Text>Product</Text>
          </View>
          <Icon size={14} name="north-west" type="material" />
        </Pressable>

        <Text>{searchResults}</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const SearchStyles = StyleSheet.create({
  SearchList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  InputCont: {
    width: "90%",
  },
  InputMain: {
    paddingLeft: 10,
    fontSize: 14,
  },
  InputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12,
  }
});

export default Search;
