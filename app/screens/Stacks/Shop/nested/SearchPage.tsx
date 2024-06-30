import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Pressable, View, Platform, FlatList } from "react-native";
import { Icon, Text, Input, Avatar } from "@rneui/themed";
import { getHeight } from "../../../../utils/GetDimension";
import { AvatarSrc } from "../../../../constants/ImagesConstants";

const Search = ({ navigation }: { navigation: any }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      const fetchSearchResults = async () => {
        try {
          const response = await fetch(`https://backend-autoexpertease-production-5fd2.up.railway.app/api/products/search/${searchTerm}`);
          const data = await response.json();
          setSearchResults(data.products);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      };
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : getHeight / 5}
      >
        <View style={{ height: getHeight / 10, flexDirection: "row", justifyContent: "center", alignItems: "flex-end", paddingHorizontal: 20, marginTop: 30 }}>
          <Pressable onPress={() => navigation.navigate("ShopContainer")} style={({ pressed }) => [
            { alignSelf: "center", padding: 10, borderRadius: 70, backgroundColor: pressed ? "rgb(250, 250, 255)" : "white" }
          ]}>
            <Icon name="arrow-back" />
          </Pressable>
          <Input onChangeText={handleSearchTermChange} value={searchTerm} inputContainerStyle={SearchStyles.InputVoid} inputStyle={SearchStyles.InputMain} containerStyle={SearchStyles.InputCont} placeholder="Search Anything" />
        </View>

        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("view", { productId: item._id })}
              style={({ pressed }) => [
                SearchStyles.SearchList,
                { backgroundColor: pressed ? "#d9d9d9" : "#fff" }
              ]}
            >
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Avatar containerStyle={{ marginRight: 5, borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: item.image[0] || AvatarSrc }} size={40} />
                <View style={{paddingHorizontal:30}}>
                <Text>{item.name.length > 20 ? `${item.name.substring(0, 40)}...` : item.name}</Text>
                <Text style={{ fontSize: 10 }}>Rs. {item.price.saleprice}</Text>
                </View>
              </View>
              <Icon size={14} name="north-west" type="material" />
            </Pressable>
          )}
        />
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
