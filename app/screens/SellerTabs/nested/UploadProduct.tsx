import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
//Components
import InputComponent from '../../../components/InputComponent/InputComponent'
//Library
import { Text, Input, Avatar, Button } from "@rneui/themed"
import * as ImagePicker from 'expo-image-picker';
import { selectPhoto } from '../../../constants/ImagesConstants';

const UploadProduct = ({ navigation }: { navigation: any }) => {
  const [images, setImages] = useState<string[]>([]);
  // Handle Category Layout Modal


  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.6,
      base64: true
    })
    // If Selected
    if (!result.canceled) {
      const base64Images = result.assets.map(asset => 'data:image/jpeg;base64,' + asset.base64);
      setImages(base64Images);
      console.log(base64Images);
    }
  }

  return (
    <ScrollView style={Styles.container}>
      <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5 }}>
        <Text style={{ textAlign: "center" }} h4>Product Info</Text>

        <InputComponent placeholder="Name" label="Product Name" />
        <InputComponent placeholder="Brand" label="Set Brand Name" />
        <Input
          labelStyle={{ marginBottom: 4, fontSize: 12 }}
          multiline
          inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: "#e5e5e5", borderRadius: 5 }}
          inputStyle={Styles.input}
          label="Description"
          numberOfLines={10}
        />
        <InputComponent placeholder="Category" label="Select Product Category" />
        <InputComponent placeholder="Sub Category" label="Child Category" />
      </View>
      <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5 }}>
        <Text style={{ textAlign: "center" }} h4>Set  Pricing</Text>

        <InputComponent placeholder="Selling Price" label="Selling Price" />
        <InputComponent placeholder="Price Before" label="Set Price Before" />
        <InputComponent placeholder="Your Earnings" label="You'll Earn" />

        {/* Image View */}
        <Text style={{ color: "#e5e5e5", marginLeft: 5, fontSize: 12, fontWeight: "bold" }}>Select Images</Text>
        <TouchableOpacity onPress={selectImage} style={{ padding: 10, backgroundColor: "#e5e5e5", borderRadius: 5 }}>
      {
        images.length>0?(
          <FlatList
          contentContainerStyle={{gap:10}}
         
          
          data={images}
          horizontal
          renderItem={({ item }) => (
            <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: item }} size={50} />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: selectPhoto }} size={50} />}
        />
        ):(
          <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: selectPhoto }} size={50} />
        )
      }
        </TouchableOpacity>
      </View>
      <Button color="#E04E2F" containerStyle={{ marginBottom: 50 }} title="Post Now" />
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderRadius: 5,
    fontSize: 12,
    textAlignVertical: 'top',
    minHeight: 200,
    padding: 10,
  }
})
export default UploadProduct;
