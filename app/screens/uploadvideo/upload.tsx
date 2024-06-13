import React, { useState } from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const API_URL = 'http://10.0.2.2:4001/api/upload'; // Your API endpoint

const Upload = () => {
  const [selectedVideoUri, setSelectedVideoUri] = useState<string | null>(null);

  const pickVideo = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({ type: 'video/*', copyToCacheDirectory: true });
      if (!file.canceled && file.assets && file.assets.length > 0) {
        // File picked successfully
        console.log('File:', file); // Debugging line
        const uri = file.assets[0].uri;
        console.log('Video URI:', uri);  // Debugging line
        setSelectedVideoUri(uri);
      }
    } catch (error) {
      console.error('Error picking video:', error);
    }
  };

  const uploadVideo = async () => {
    if (!selectedVideoUri) {
      ToastAndroid.show('No video selected', ToastAndroid.LONG);
      return;
    }

    try {
      const fileBase64 = await FileSystem.readAsStringAsync(selectedVideoUri, { encoding: FileSystem.EncodingType.Base64 });
      const formData = new FormData();
      formData.append('video', {
        uri: selectedVideoUri,
        name: 'video.mp4',
        type: 'video/mp4',
        base64: fileBase64
      });

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        // Video uploaded successfully
        ToastAndroid.show('Video uploaded successfully', ToastAndroid.LONG);
      } else {
        // Handle error
        console.error('Error uploading video:', responseData.msg);
        ToastAndroid.show('Error uploading video', ToastAndroid.LONG);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      ToastAndroid.show('Error uploading video', ToastAndroid.LONG);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Upload Video</Text>
      <Text>{selectedVideoUri}</Text>
      <Button title="Pick Video" onPress={pickVideo} />
      <Button title="Upload Video" onPress={uploadVideo} />
    </View>
  );
};

export default Upload;
