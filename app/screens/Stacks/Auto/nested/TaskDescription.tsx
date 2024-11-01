import React, { useState } from "react";
import { Alert } from "react-native";
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

//Utils
import { getHeight } from "../../../../utils/GetDimension";
import { bike, Sedan, truck, selectPhoto } from "../../../../constants/ImagesConstants";

//Library
import { Input, Text, Button, Avatar } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";

//States
import { useSelector, useDispatch } from "react-redux";
import { settaskId } from "../../../../slices/TaskSlice";

const TaskDescription = ({ navigation }: { navigation: any }) => {
  //dispatch
  const dispatch = useDispatch();

  //selectors
  const NearbyPlace = useSelector((state: any) => state.location.nearbyplace);
  const Latitude = useSelector((state: any) => state.location.latitude);
  const Longitude = useSelector((state: any) => state.location.longitude);
  const id = useSelector((state: any) => state.auth.userid); //posted by....

  //states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [carType, setCarType] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const cartypeData = [
    { id: 1, image: bike, title: "Bike" },
    { id: 2, image: Sedan, title: "Sedan" },
    { id: 3, image: truck, title: "Truck" },
  ];

  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.3,
      base64: true,
      selectionLimit: 2,
    });

    if (!result.canceled) {
      const base64Images = result.assets.map((asset) => asset.base64!);
      setImages(base64Images);
    }
  };

  const handlePostNow = async () => {
    setLoading(true); // Set loading to true when starting the request

    try {
      const response = await fetch(
        "https://backend-autoexpertease-production-5fd2.up.railway.app/api/post-task",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            vehciletype: carType,
            description: description,
            longitude: Longitude,
            latitude: Latitude,
            county: NearbyPlace,
            id: id,
            imageone: images[0],
            imagetwo: images[1],
          }),
        }
      );

      const data = await response.json();

      console.log(data.taskid);
      if (response.ok) {
        navigation.navigate("hailing_page");
        dispatch(settaskId(data.taskid));
      } else {
        console.error("Server error:", data);
        Alert.alert("Error", data.message || "Server error");
      }
    } catch (error) {
      console.error("Error:", error.message);
      Alert.alert(
        "Ooops",
        "It's Looks Like we are having a problem please Try again later!"
      );
    } finally {
      setLoading(false); // Set loading to false when the request is completed
    }
  };

  const isButtonDisabled =
    !title || !description || description.length < 30 || images.length < 2;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
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
        <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 5 }}>
          Vehicle Type: {carType}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            columnGap: 10,
            marginBottom: 10,
          }}
        >
          {cartypeData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCarType(item.title)}
              style={[
                Styles.avatarContainer,
                carType === item.title && Styles.selectedAvatar,
              ]}
            >
              <Avatar
                size={getHeight / 8}
                avatarStyle={Styles.avatar}
                source={{ uri: item.image }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Upload Video */}
        <TouchableOpacity
          onPress={selectImage}
          style={{ padding: 10, backgroundColor: "#f8f8f8", borderRadius: 5 }}
        >
          <Text style={{ fontSize: 12, marginBottom: 10 }}>
            Select Max 3 Images only and min 2
          </Text>
          {images.length > 0 ? (
            <FlatList
              contentContainerStyle={{ gap: 10 }}
              data={images}
              horizontal
              renderItem={({ item }) => (
                <Avatar
                  avatarStyle={{ borderRadius: 5 }}
                  containerStyle={{ borderRadius: 5 }}
                  source={{ uri: `data:image/jpeg;base64,${item}` }}
                  size={50}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={
                <Avatar
                  avatarStyle={{ borderRadius: 5 }}
                  source={{ uri: selectPhoto }}
                  size={50}
                />
              }
            />
          ) : (
            <Avatar
              avatarStyle={{ borderRadius: 5 }}
              source={{ uri: selectPhoto }}
              size={50}
            />
          )}
        </TouchableOpacity>
        {/* Upload media Ends */}
        {/* Vehicle ended */}
        <Input
          labelStyle={{ marginBottom: 4, fontSize: 12 }}
          multiline
          inputContainerStyle={{
            borderBottomWidth: 0,
            backgroundColor: "#e5e5e5",
            borderRadius: 5,
          }}
          inputStyle={Styles.input}
          label="Description"
          value={description}
          onChangeText={handleDescriptionChange}
          numberOfLines={10}
        />
        <Button
          onPress={handlePostNow}
          color="#E04E2F"
          buttonStyle={[
            Styles.ButtonStyle,
            isButtonDisabled && { backgroundColor: "gray" },
          ]}
          title={loading ? "Posting..." : "Post Now"}
          disabled={isButtonDisabled}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    borderRadius: 5,
    fontSize: 12,
    textAlignVertical: "top",
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
  selectedAvatar: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#E04E2F",
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
  },
});

export default TaskDescription;
