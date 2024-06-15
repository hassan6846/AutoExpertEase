import { View, Text, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image } from '@rneui/themed';

const Upload = () => {
  const [images, setImages] = useState<string[]>([]);

  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.6,
      base64: true
    });

    // If Selected
    if (!result.canceled) {
      const base64Images = result.assets.map(asset => 'data:image/jpeg;base64,' + asset.base64);
      console.log('Base64 Images:', base64Images); // Log base64 strings
      setImages(base64Images);
    }
  };

  const UploadFiles = async (uris: string[]) => {
    try {
      const response = await fetch('http://10.0.2.2:4001/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: uris }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload files');
      }

      const responseData = await response.json();
      console.log('Upload successful:', responseData);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Upload</Text>
      <ScrollView>
        {images.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={{ height: 200, width: 200 }} />
        ))}
      </ScrollView>
      <Button onPress={selectImage} title='Select' />
      <Button onPress={() => UploadFiles(images)} title='Upload' />
    </View>
  );
};

export default Upload;
