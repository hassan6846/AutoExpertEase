import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Linking,
  ToastAndroid,
  RefreshControl,
  ActivityIndicator,
  Modal,
} from "react-native";
import { Avatar, Icon, Button, Text, Input } from "@rneui/themed";
import { useSelector } from "react-redux";

const ExpertHailingPage = ({ navigation }: { navigation: any }) => {
  const [tasks, setTasks] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<any>(null); // State to hold selected task details
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility
  const Latitude = useSelector((state: any) => state.location.latitude);
  const Longitude = useSelector((state: any) => state.location.longitude);
  const userId = useSelector((state: any) => state.auth.userid);
  const avatar = useSelector((state: any) => state.user.avatar);

  const [price, setPrice] = useState(""); // State for offer price
  const [time, setTime] = useState(0); // State for estimated time
  const [distance, setDistance] = useState(0); // State for distance

  useEffect(() => {
    fetchTasks(); // Initial fetch on component mount
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "https://backend-autoexpertease-production-5fd2.up.railway.app/api/get-tasks",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading state to false after fetch completes
    }
  };

  const fetchSingleTask = async (id: any) => {
    try {
      const response = await fetch(
        `https://backend-autoexpertease-production-5fd2.up.railway.app/api/get-tasks/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setSelectedTask(data.task); // Set selected task details from response

      // Fetch time and distance from Google Maps API
      fetchDirections(
        `${Latitude},${Longitude}`,
        `${data.task.LocationCoordinates.Latitude},${data.task.LocationCoordinates.Longitude}`
      );

      setModalVisible(true); // Show modal
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDirections = async (origin: string, destination: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=YOUR_GOOGLE_MAPS_API_KEY`
      );
      const data = await response.json();
      const route = data.routes[0].legs[0];

      setTime(route.duration.value / 60); // Convert seconds to minutes
      setDistance(route.distance.value / 1000); // Convert meters to kilometers
    } catch (error) {
      console.log("Error fetching directions:", error);
    }
  };

  const sendOffer = async () => {
    if (!selectedTask) return;

    // Parse price to float
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      console.error("Price must be a valid number");
      return;
    }

    console.log("Sending offer with details:", {
      taskid: selectedTask._id,
      price: parsedPrice,
      longitude: Longitude,
      latitude: Latitude,
      time,
      distance,
      userid: userId,
      avatar: avatar,
    });

    try {
      const response = await fetch(
        "https://backend-autoexpertease-production-5fd2.up.railway.app/api/sendoffer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            taskid: selectedTask._id,
            price: parsedPrice,
            longitude: Longitude.toString(),
            latitude:Latitude.toString(),
            time:time.toString(),
            distance:time.toString(),
            userid: userId,
            avatar: avatar,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Offer sent successfully", data);
        ToastAndroid.show("Offer sent successfully", ToastAndroid.SHORT); // Show toast message

        setModalVisible(false); // Close modal on success
      } else {
        ToastAndroid.show("Network Problem Try Again !", ToastAndroid.SHORT); // Show toast message

        console.log("Failed to send offer", data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false); // Close modal
  };

  const openMapApp = (latitude: string, longitude: string) => {
    const url = `https://maps.google.com/?q=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const onRefresh = () => {
    setLoading(true); // Set loading state to true on refresh
    fetchTasks(); // Fetch tasks again
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        </View>
      ) : (
        tasks
          .filter((task: any) => task.Postedby !== userId)
          .map((task: any, index: any) => (
            <View key={index} style={styles.card}>
              <Avatar
                containerStyle={{ width: "24%", height: 100, borderRadius: 5 }}
                avatarStyle={{ borderRadius: 5 }}
                source={{ uri: task.image[0] }} // Assuming the first image URL in the array
              />
              <View style={styles.content}>
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.title}>
                      {task.title.length > 20
                        ? task.title.substring(0, 90) + "..."
                        : task.title}
                    </Text>
                    <Text style={styles.subtitle}>
                      {new Date(task.createdAt).toLocaleTimeString()}
                    </Text>
                  </View>

                  <View style={styles.subtitle}>
                    <Icon size={15} color="#E04E2F" name="pin-drop" />
                    <Text
                      style={styles.subtitleText}
                      onPress={() =>
                        openMapApp(
                          task.LocationCoordinates.Latitude,
                          task.LocationCoordinates.Longitude
                        )
                      }
                    >
                      {task.NearbyPlace.length > 20
                        ? task.NearbyPlace.substring(0, 60) + "..."
                        : task.NearbyPlace}
                    </Text>
                  </View>
                </View>
              </View>
              <Button
                buttonStyle={{ marginBottom: 10, marginRight: 10 }}
                titleStyle={{ fontSize: 12 }}
                color="#D9D9D9"
                containerStyle={styles.buttonContainer}
                title="View Details"
                onPress={() => fetchSingleTask(task._id)}
              />
            </View>
          ))
      )}

      {/* Modal to display task details */}
      <Modal
        style={{ position: "relative" }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedTask && (
              <>
                <Text style={styles.modalTitle}>{selectedTask.title}</Text>
                <Text style={styles.modalText}>
                  {selectedTask.description}
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Avatar
                    containerStyle={{ width: "50%", height: 200 }}
                    avatarStyle={{ borderRadius: 5 }}
                    source={{ uri: selectedTask.image[0] }}
                  />
                  <Avatar
                    containerStyle={{ width: 150, height: 200 }}
                    avatarStyle={{ borderRadius: 5 }}
                    source={{ uri: selectedTask.image[1] }}
                  />
                </View>
                <Icon
                  color="#D9D9D9"
                  type="material"
                  iconStyle={{ padding: 5, borderRadius: 60 }}
                  name="close"
                  containerStyle={styles.modalButton}
                  onPress={closeModal}
                />
                <Input
                  labelStyle={styles.labelStyle}
                  inputContainerStyle={styles.InputVoid}
                  placeholder="Offer Price"
                  inputStyle={styles.InputMain}
                  containerStyle={styles.InputCont}
                  value={price}
                  onChangeText={(value) => setPrice(value)}
                />
                <Text>Estimated Time: {time} minutes</Text>
                <Text>Distance: {distance} km</Text>
                <Button
                  containerStyle={{ marginTop: 10, width: "80%" }}
                  title="Send Offer"
                  onPress={sendOffer}
                />
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 13,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  subtitleText: {
    fontSize: 10,
    color: "#E04E2F",
    marginLeft: 5,
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  loader: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalButton: {
    position: "absolute",
    top: -20,
    right: -20,
  },
  labelStyle: {
    fontSize: 14,
    marginBottom: 5,
  },
  InputVoid: {
    borderBottomWidth: 0,
  },
  InputMain: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 14,
  },
  InputCont: {
    width: "100%",
    marginTop: 10,
  },
});

export default ExpertHailingPage;
