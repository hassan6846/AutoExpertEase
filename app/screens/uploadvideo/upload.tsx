import { View, Text, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Image } from '@rneui/themed';

// Configure file System...Directory
const imgDir = FileSystem.documentDirectory + 'images/';

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  // if Directory Not exists then create one
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

const Upload = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    ensureDirExists();
    loadImages();
  }, []);

  const loadImages = async () => {
    const files = await FileSystem.readDirectoryAsync(imgDir);
    if (files.length > 0) {
      const imageUri = imgDir + files[0]; // Only select the first image
      setImages([imageUri]);
    }
  };

  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 0.6,
    });
    // If Selected
    if (!result.canceled) {
      await saveImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri: string) => {
    await ensureDirExists();
    const filename = new Date().getTime() + '.jpg';
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImages([dest]); // Set only one image URI
  };

  const UploadFile = async (uri: string) => {
    try {
      const response = await fetch('http://localhost:4001/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: uri }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
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
        {images.map(img => (
          <Image key={img} source={{ uri: img }} style={{ height: 200, width: 200 }} />
        ))}
      </ScrollView>
      <Button onPress={selectImage} title='Select' />
      <Button onPress={() => UploadFile(images[0])} title='Upload' />
    </View>
  );
};

export default Upload;
