import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Pressable, ScrollView, View } from "react-native"
import { Icon, Text, Input, } from "@rneui/themed"
import { getHeight } from "../../../../utils/GetDimension"
import { useState,useEffect } from "react"
import { useFocusEffect } from "@react-navigation/native"
import React from "react"
const Search = ({ navigation }: { navigation: any }) => {
  const [searchTerm,setSearchTerm]=useState("")
  const [searchResults,setSearchResults]=useState([])

const fetcSearchResults=async()=>{
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    const data = await response.json();
    setSearchResults(data);
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}

useFocusEffect(
  React.useCallback(() => {
    if (searchTerm.trim() !== "") {
      fetcSearchResults();
    }
  }, [searchTerm])
);
  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", width: "100%" }}>


      <View style={{ height: getHeight / 10, justifyContent:"flex-end",alignItems:"center"}}>
        <Input onChangeText={handleSearchTermChange} value={searchTerm} inputContainerStyle={SearchStyles.InputVoid} inputStyle={SearchStyles.InputMain} containerStyle={SearchStyles.InputCont} placeholder="Search Anything" />
      </View>

      {/* StartPressable */}
{
  searchResults.map((result,index)=>(
    <Pressable style={({ pressed }) => [
      SearchStyles.SearchList,
      {
        backgroundColor: pressed ? "#d9d9d9" : '#fff'
      }
    ]}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
        <Icon name="search" type="material" style={{ marginRight: 10 }} />
        <Text>{result}</Text>
      </View>
      <Icon size={14} name="north-west" type="material" />

    </Pressable>

  ))
}
<Text>{searchResults}</Text>
      {/* End of pressable */}
    </ScrollView>
  )
}
// SearchpAge Styles
const SearchStyles = StyleSheet.create({
  // For pressable
  SearchList: {

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,

  }
  ,
  InputCont: {
    width: "90%",


  },
  InputMain: {
    paddingLeft: 10,
    fontSize: 14,
  }, InputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12,
  }
})

export default Search