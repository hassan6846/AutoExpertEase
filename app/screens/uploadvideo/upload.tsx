import React, { useState } from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const API_URL = 'http://10.0.2.2:4001/api/upload'; // Your API endpoint

const Upload = () => {
  const [imageUrl, setImageUrl] = useState('');

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        // Image picked successfully
        uploadImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const uploadImage = async (uri:any) => {
    try {
      const formData = new FormData();
      formData.append('imageData', uri);

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseData = await response.json();

      if (response.ok) {
        // Image uploaded successfully
        setImageUrl(responseData.url);
        ToastAndroid.show('Image uploaded successfully', ToastAndroid.LONG);
      } else {
        // Handle error
        console.error('Error uploading image:', responseData.msg);
        ToastAndroid.show('Error uploading image', ToastAndroid.LONG);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      ToastAndroid.show('Error uploading image', ToastAndroid.LONG);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Upload Image</Text>
      <Button title="Pick Image" onPress={pickImage} />
      <Text>Uploaded Image URL: {imageUrl}</Text>
    </View>
  );
};

export default Upload;
