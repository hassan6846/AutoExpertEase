import React, { useState } from 'react';
import { View, Text, Button, ToastAndroid, Image } from 'react-native'; // Import Image component
import * as ImagePicker from 'expo-image-picker';

const API_URL = 'http://10.0.2.2:4001/api/upload'; // Your server endpoint

const Upload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [base64Image, setBase64Image] = useState<any>('');

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true // Request base64 representation
      });

      if (!result.canceled) {
        // Image picked successfully
        setBase64Image(result.assets[0].exif); // Set base64 representation to state
        uploadImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const uploadImage = async (base64Image:any) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Image }), // Sending the base64 image directly in JSON format
      });

      if (!response.ok) {
        throw new Error('Error uploading image');
      }

      const responseData = await response.json();

      if (responseData && responseData.url) {
        // Image uploaded successfully
        setImageUrl(responseData.url);
        ToastAndroid.show('Image uploaded successfully', ToastAndroid.LONG);
      } else {
        // Handle error
        console.error('Error uploading image:', responseData);
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
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200, marginVertical: 10 }} />
      ) : null}
      <Text>Uploaded Image URL: {imageUrl}</Text>
      <Text>Base64 Image: {base64Image}</Text>
    </View>
  );
};

export default Upload;
