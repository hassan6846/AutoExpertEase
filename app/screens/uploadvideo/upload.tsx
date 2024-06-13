import React from 'react';
import { View, Text, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const API_URL = 'http://10.0.2.2:4001/api/upload'; // Your API endpoint

const Upload = () => {
  const pickVideo = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
      if (!file.canceled) {
        // File picked successfully
        uploadVideo(file.assets[0].file);
      }
    } catch (error) {
      console.error('Error picking video:', error);
    }
  };

  const uploadVideo = async (videoUri) => {
    try {
      // Send only the URI to the server
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uri: videoUri }),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Video uploaded successfully
        console.log('Video uploaded successfully');
      } else {
        // Handle error
        console.error('Error uploading video:', responseData.msg);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Upload Video</Text>
      <Button title="Pick Video" onPress={pickVideo} />
    </View>
  );
};

export default Upload;
