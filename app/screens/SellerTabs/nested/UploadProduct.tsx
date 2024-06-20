import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Text, Input, Avatar, Button } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';
import InputComponent from '../../../components/InputComponent/InputComponent'; // Assuming correct path to your InputComponent
import { selectPhoto } from '../../../constants/ImagesConstants'; // Assuming correct path to your selectPhoto constant

const UploadProduct = ({ navigation }: { navigation: any }) => {
  const [images, setImages] = useState<string[]>([]);
  const id = useSelector((state: any) => state.auth.userid);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [saleprice, setSaleprice] = useState(0);
  const [beforeprice, setBeforeprice] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.6,
      base64: true,
      selectionLimit: 2,
    });

    if (!result.canceled) {
      const base64Images = result.assets.map((asset) => asset.base64!); // Use non-null assertion operator

      setImages(base64Images);
      console.log(base64Images[0]);
    }
  };

  //Handling Text Fields
  const handleNameChange = (text: string) => setName(text);
  const handleBrandChange = (text: string) => setBrand(text);
  const handleDescriptionChange = (text: string) => setDescription(text);
  const handleCategoryChange = (text: string) => setCategory(text);
  const handleSubcategoryChange = (text: string) => setSubcategory(text);
  const handleSalepriceChange = (text: string) => setSaleprice(Number(text));
  const handleBeforepriceChange = (text: string) => setBeforeprice(Number(text));

  const validateFields = () => {
    if (
      name.trim() &&
      brand.trim() &&
      description.trim() &&
      category.trim() &&
      subcategory.trim() &&
      saleprice > 0 &&
      beforeprice > 0 &&
      images.length > 0
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    validateFields();
  }, [name, brand, description, category, subcategory, saleprice, beforeprice, images]);

  const CreateProduct = async () => {
    const productData = {
      id: id,
      name: name,
      brand: brand,
      description: description,
      category: category,
      subcategory: subcategory,
      saleprice: saleprice,
      beforePrice: beforeprice,
      image: images[0],
      imagetwo: images[1],
    };

    try {
      const response = await fetch('http://10.0.2.2:4001/api/product/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      const data = await response.json();
      console.log('Product created:', data);
      // Handle success scenario, e.g., navigation or feedback to user
      Alert.alert(
        'Product created Successfully',
        'Your product has been created successfully. But you still need to wait for Product Approval',
      );
      navigation.navigate('postedproducts');
    } catch (error) {
      console.error('Error creating product:', error.message);
      // Handle error scenario, e.g., show error message to user
      Alert.alert('Failed to create product', error.message);
    }
  };

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.section}>
        <Text style={Styles.heading}>Product Info </Text>

        <InputComponent onChangeText={handleNameChange} placeholder="Name" label="Product Name" />
        <InputComponent onChangeText={handleBrandChange} placeholder="Brand" label="Set Brand Name" />
        <Input
          labelStyle={Styles.label}
          multiline
          inputContainerStyle={Styles.inputContainer}
          inputStyle={Styles.input}
          label="Description"
          onChangeText={handleDescriptionChange}
          numberOfLines={10}
        />
        <InputComponent onChangeText={handleCategoryChange} placeholder="Category" label="Select Product Category" />
        <InputComponent onChangeText={handleSubcategoryChange} placeholder="Sub Category" label="Child Category" />
      </View>

      <View style={Styles.section}>
        <Text style={Styles.heading}>Set Pricing</Text>

        <InputComponent onChangeText={handleSalepriceChange} placeholder="Selling Price" label="Selling Price" />
        <InputComponent onChangeText={handleBeforepriceChange} placeholder="Price Before" label="Set Price Before" />

        <Text style={Styles.label}>
          You Will Get {saleprice - (saleprice / 100) * 20} After Sale Inc Tax and 20% Sale Commission
        </Text>

        {/* Image Selection */}
        <Text style={Styles.label}>Select Images</Text>
        <TouchableOpacity onPress={selectImage} style={Styles.imageSelect}>
          {images.length > 0 ? (
            <FlatList
              contentContainerStyle={Styles.imageList}
              data={images}
              horizontal
              renderItem={({ item }) => (
                <Avatar avatarStyle={Styles.avatar} source={{ uri: `data:image/jpeg;base64,${item}` }} size={50} />
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<Avatar avatarStyle={Styles.avatar} source={{ uri: selectPhoto }} size={50} />}
            />
          ) : (
            <Avatar avatarStyle={Styles.avatar} source={{ uri: selectPhoto }} size={50} />
          )}
        </TouchableOpacity>
      </View>

      <Button
        color="#E04E2F"
        onPress={CreateProduct}
        containerStyle={Styles.button}
        title="Post Now"
        disabled={isButtonDisabled}
      />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    marginBottom: 4,
    fontSize: 12,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
  },
  input: {
    borderRadius: 5,
    fontSize: 12,
    textAlignVertical: 'top',
    minHeight: 200,
    padding: 10,
  },
  imageSelect: {
    padding: 10,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
  },
  imageList: {
    gap: 10,
  },
  avatar: {
    borderRadius: 5,
  },
  button: {
    marginBottom: 50,
  },
});

export default UploadProduct;
