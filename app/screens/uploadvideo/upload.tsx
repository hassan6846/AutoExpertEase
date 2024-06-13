import { ScrollView, Text, Button } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const Upload = () => {
  const [video, setVideo] = useState<any>(null);

  const handleUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (result && !result.canceled) {
      const base64data = result.assets[0].base64;
      setVideo(base64data);
      uploadToServer(base64data as any);
    }
  };

  const uploadToServer = async (base64data: string) => {
    // Perform POST request to upload the base64 data to the server
    // Example code using fetch
    try {
      const response = await fetch('http://192.168.0.110:4001/api/upload', {
        method: 'POST',
        body: JSON.stringify({ base64data }), // Send the base64 data as JSON
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Base64 data uploaded successfully!');
      } else {
        console.error('Failed to upload base64 data');
      }
    } catch (error) {
      console.error('Error uploading base64 data:', error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>Upload</Text>
      <Text>{video}</Text>
      <Button title='Upload' onPress={handleUpload} />
    </ScrollView>
  );
}

export default Upload;
