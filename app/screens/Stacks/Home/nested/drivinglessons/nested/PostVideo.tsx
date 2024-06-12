import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'; // Import ToastAndroid
import { Text, Avatar, Input } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import { VideoPlaceHolder } from '../../../../../../constants/ImagesConstants';
import { Icon } from '@rneui/base';
import ThemeProviderColors from '../../../../../../provider/ThemeProvider';
import InputComponent from '../../../../../../components/InputComponent/InputComponent';
import { useSelector } from 'react-redux';

const PostVideo: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState<any>(null); // Changed to videoUrl
  const [loading, setLoading] = useState(false); // Loading state for the button

  // useSelector
  const id = useSelector((state:any) => state.auth.userid);

  // Function to handle video selection
  const handleVideoSelect = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      ToastAndroid.show('Permission Denied. Please enable camera roll permissions.', ToastAndroid.SHORT); // Show toast message for permission denied
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        
        allowsMultipleSelection:false,

      });

      if (!result.canceled) {
        setVideoUrl(result.assets[0].uri);
      }
    }
  };

  // Function to handle post button press
  const handlePost = async () => {
    if (!isFormValid()) {
      ToastAndroid.show('Please fill all required fields.', ToastAndroid.SHORT); // Show toast message for incomplete fields
      return;
    }

    setLoading(true); // Set loading state to true when posting video

    try {
      const requestData = {
        title,
        description,
        category,
        videourl: videoUrl,
        userid: id,
      };

      const response = await fetch('http://10.0.2.2:4001/api/video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Failed to post video');
      }

      // Show success toast
      ToastAndroid.show('Video posted successfully', ToastAndroid.SHORT);

      // Reset form and loading state
      setTitle('');
      setCategory('');
      setDescription('');
      setVideoUrl(null);
    } catch (error) {
      console.error('Error posting video:', error);
      ToastAndroid.show('Failed to post video. Please try again.', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  // Enable/disable post button based on form validation and loading state
  const isFormValid = () => {
    return title.trim() !== '' && category.trim() !== '' && description.trim() !== '' && videoUrl !== null && !loading;
  };

  return (
    <ScrollView style={styles.container}>
      <Avatar source={{ uri: videoUrl || VideoPlaceHolder }} containerStyle={styles.avatarContainer} avatarStyle={{ objectFit: 'contain' }} size={200}>
        <Icon onPress={handleVideoSelect} containerStyle={styles.iconContainer} type='material' name='open-in-new' />
      </Avatar>
      {videoUrl && <Text style={styles.imageText}>Video Selected {videoUrl}</Text>}
      <InputComponent
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <InputComponent
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Input
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.textArea}
        multiline
        inputStyle={{ fontSize: 14 }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        textAlignVertical="top"
      />
      <TouchableOpacity
        style={[styles.postButton, { backgroundColor: isFormValid() ? ThemeProviderColors.Light.Primary : 'gray' }]}
        onPress={handlePost}
        disabled={!isFormValid()}
      >
        <Text style={styles.postButtonText}>{loading ? 'Posting...' : 'Post Now'} {id}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  avatarContainer: {
    width: '100%',
    backgroundColor: "#e5e5e5",
    padding: 10,
    borderRadius: 5,
    position: 'relative',
    marginBottom: 5
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 20
  },
  imageText: {
    color: ThemeProviderColors.Light.FontSubHeading,
    fontSize: 9,
    marginLeft: 7,
    marginBottom: 30
  },
  textArea: {
    backgroundColor: '#e5e5e5',
    height: 230,
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  postButton: {
    backgroundColor: '#007AFF',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostVideo;
