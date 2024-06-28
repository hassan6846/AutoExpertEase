import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Linking, RefreshControl, ActivityIndicator } from "react-native";
import { Avatar, Icon, Button, Text } from "@rneui/themed";

const ExpertHailingPage = ({ navigation }: { navigation: any }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  useEffect(() => {
    fetchTasks(); // Initial fetch on component mount
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://10.0.2.2:4001/api/get-tasks", {
        method: "GET",
      });
      const data = await response.json();
      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading state to false after fetch completes
    }
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
      refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
    >
      {loading ? ( // Display ActivityIndicator while loading
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
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
                color="#D9D9D9"
                containerStyle={styles.buttonContainer}
                title="Send Offer"
                onPress={() => {
                  // Handle button press, e.g., navigate to offer screen
                }}
              />
            </View>
          </View>
        ))
      )}
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
    fontSize: 15,
    marginBottom: 5,
  },
  subtitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitleText: {
    fontSize: 13,
    color: "#97ADB6",
    marginLeft: 5,
  },
  buttonContainer: {
    width: "40%",
    alignSelf: "flex-end",
    marginTop: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
});

export default ExpertHailingPage;
