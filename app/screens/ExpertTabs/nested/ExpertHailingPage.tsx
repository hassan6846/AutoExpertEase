import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Linking,
  RefreshControl,
  ActivityIndicator,
  Modal,
} from "react-native";
import { Avatar, Icon, Button, Text, Input } from "@rneui/themed";
import { useSelector } from "react-redux";

const ExpertHailingPage = ({ navigation }: { navigation: any }) => {
  const [tasks, setTasks] = useState<any>([]);
  const [location, setLocation] = useState(null);
  const [watcher, setWatcher] = useState(null);

  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<any>(null); // State to hold selected task details
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility
  const Latitude = useSelector((state: any) => state.location.latitude);
  const Longitude = useSelector((state: any) => state.location.longitude);
  const userId = useSelector((state: any) => state.auth.userid);

  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);

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
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyB0QWaVmpZyDejTE9ybNN3SeUM-Bh8bawA`
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

    console.log("Sending offer with details:", {
      taskid: selectedTask._id,
      price,
      coordinates: `${Latitude},${Longitude}`,
      time,
      distance,
      userid: userId,
    });

    if (!selectedTask._id || !price || !Latitude || !Longitude || !time || !distance || !userId) {
      console.error("Missing required fields:", {
        taskid: selectedTask._id,
        price,
        coordinates: `${Latitude},${Longitude}`,
        time,
        distance,
        userid: userId,
      });
      return;
    }

    try {
      const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/sendoffer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskid: selectedTask._id,
          price,
          coordinates: `${Latitude},${Longitude}`,
          time,
          distance,
          userid: userId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Offer sent successfully", data);
        setModalVisible(false); // Close modal on success
      } else {
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
        tasks.map((task: any, index: any) => (
          <View key={index} style={styles.card}>
            <Avatar
              containerStyle={{ width: "24%", height: 100, borderRadius: 5 }}
              avatarStyle={{ borderRadius: 5 }}
              source={{ uri: task.image[0] }} // Assuming the first image URL in the array
            />
            <View style={styles.content}>
              <View>
                <Text style={styles.title}>{task.title}</Text>
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
                    {task.NearbyPlace}
                  </Text>
                </View>
              </View>
              <Button
                titleStyle={{ fontSize: 12 }}
                color="#D9D9D9"
                containerStyle={styles.buttonContainer}
                title="View Details"
                onPress={() => fetchSingleTask(task._id)}
              />
            </View>
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
                <Text style={styles.modalText}>{selectedTask.description}</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Avatar
                    containerStyle={{ width: 150, height: 200 }}
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
                  value={price.toString()}
                  onChangeText={(value) => setPrice(parseFloat(value))}
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
    padding: 10,
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
    fontSize: 12,
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
