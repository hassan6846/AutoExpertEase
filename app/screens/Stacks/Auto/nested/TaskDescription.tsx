import React, { useState } from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native';
import { getHeight } from '../../../../utils/GetDimension';
import { Input, LinearProgress, Text, Button, Avatar, Icon } from '@rneui/themed';
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { bike, Sedan, truck } from '../../../../constants/ImagesConstants';

const TaskDescription = ({ navigation }: { navigation: any }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageCount, setImageCount] = useState(0);

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handleImagePress = () => {
    // Logic to select images
  };

  const handlePostNow = () => {
    // Logic to post task
    navigation.navigate('hailing_page');
  };

  // Disable button if any field is empty or description length is less than 30
  const isButtonDisabled = !title || !description || description.length < 30 || imageCount < 2;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearProgress trackColor={ThemeProviderColors.Light.Primary} />
      <ScrollView style={Styles.container}>

        {/* Input */}
        <View style={Styles.InputContainer}>
          <Input
            onChangeText={handleTitleChange}
            value={title}
            inputContainerStyle={Styles.InputVoid}
            inputStyle={Styles.InputMain}
            containerStyle={Styles.InputCont}
            placeholder="Title"
          />
        </View>
        {/* Input MainVOid*/}
        {/* Vehicle type */}
        <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>Vehicle Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", columnGap: 10 }}>
          <TouchableOpacity onPress={() => handleImagePress()} style={Styles.avatarContainer}>
            <Avatar size={getHeight / 8} avatarStyle={Styles.avatar} source={{ uri: bike }} />
          </TouchableOpacity>
          {/* Add onPress for Sedan and Truck avatars */}
          <TouchableOpacity onPress={() => handleImagePress()} style={Styles.avatarContainer}>
            <Avatar size={getHeight / 8} avatarStyle={Styles.avatar} source={{ uri: Sedan }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress()} style={Styles.avatarContainer}>
            <Avatar size={getHeight / 8} avatarStyle={Styles.avatar} source={{ uri: truck }} />
          </TouchableOpacity>
        </ScrollView>

        {/* Upload Video */}
        <View style={Styles.uploadContainer}>
          <Text style={{ color: ThemeProviderColors.Light.FontSubHeading }}>Upload Media Image or Video</Text>
          <TouchableOpacity onPress={() => handleImagePress()} style={Styles.uploadButton}>
            <Icon color="#adacac" type='material' name='publish' containerStyle={Styles.uploadIcon} size={30} />
          </TouchableOpacity>
        </View>
        {/* Upload media Ends */}
        {/* Vehicle ended */}
        <Input
          labelStyle={{ marginBottom: 4, fontSize: 12 }}
          multiline
          inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: "#e5e5e5", borderRadius: 5 }}
          inputStyle={Styles.input}
          label="Description"
          value={description}
          onChangeText={handleDescriptionChange}
          numberOfLines={10}
        />
        <Button
          onPress={handlePostNow}
          color={ThemeProviderColors.Light.Primary}
          buttonStyle={[Styles.ButtonStyle, isButtonDisabled && { backgroundColor: 'gray' }]}
          title="Post Now"
          disabled={isButtonDisabled}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    borderRadius: 5,
    fontSize: 12,
    textAlignVertical: 'top',
    minHeight: 200,
    padding: 10,
  },
  ButtonStyle: {
    marginBottom: 90,
  },
  InputContainer: {
    height: getHeight / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  InputVoid: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 0,
    borderRadius: 5,
    fontSize: 12,
  },
  InputMain: {
    paddingLeft: 10,
    fontSize: 14,
  },
  InputCont: {
    width: "100%",
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    objectFit: "contain",
  },
  uploadContainer: {
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 10,
    height: getHeight / 5,
    marginTop: 10,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  uploadButton: {
    marginTop: 20,
  },
  uploadIcon: {
    marginTop: 20,
  }
});

export default TaskDescription;
