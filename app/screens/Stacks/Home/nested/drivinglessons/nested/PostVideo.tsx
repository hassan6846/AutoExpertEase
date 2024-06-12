import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Text, Avatar, Input } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import { VideoPlaceHolder } from '../../../../../../constants/ImagesConstants';
import { Icon } from '@rneui/base';
import ThemeProviderColors from '../../../../../../provider/ThemeProvider';
import InputComponent from '../../../../../../components/InputComponent/InputComponent';

const PostVideo: React.FC = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<string | null>(null);

  // Function to handle image selection
  const handleImageSelect = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  // Function to handle post button press
  const handlePost = () => {
    // Post logic here...
    console.log('Posting Video...');
  };

  // Enable/disable post button based on form validation
  const isFormValid = () => {
    return title.trim() !== '' && image !== null;
  };

  return (
    <ScrollView style={styles.container}>
      <Avatar source={{ uri: image || VideoPlaceHolder }} containerStyle={styles.avatarContainer} avatarStyle={{ objectFit: 'contain' }} size={200}>
        <Icon onPress={handleImageSelect} containerStyle={styles.iconContainer} type='material' name='open-in-new' />
      </Avatar>
      {image && <Text style={styles.imageText}>Video Selected {image}</Text>}
      <InputComponent placeholder="Title "/>
      <InputComponent placeholder="category "/>

      <Input
        placeholder="Description"
        value={title}
        onChangeText={setTitle}
        style={styles.textArea}
        multiline 
   inputStyle={{fontSize:14}}
        inputContainerStyle={{borderBottomWidth:0}}
        
        textAlignVertical="top"
      />
      <TouchableOpacity
        style={[styles.postButton, { backgroundColor: isFormValid() ? ThemeProviderColors.Light.Primary : 'gray' }]}
        onPress={handlePost}
        disabled={!isFormValid()}
      >
        <Text style={styles.postButtonText}>Post Now</Text>
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
