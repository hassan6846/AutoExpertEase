import React, { useState } from 'react';
import { View, FlatList, StyleSheet, RefreshControl, Pressable } from 'react-native';
import { Avatar, ListItem, Text } from "@rneui/themed";
import ThemeProviderColors from '../../../../../provider/ThemeProvider';

const AllLessons = ({ navigation }: { navigation: any }) => {
  const [refreshing, setRefreshing] = useState(false);

  const videoData = [
    {
      id: '1',
      title: 'How To Drive a Manual Car | Tips | PakWheels',
      subTitle: 'Subheading 1',
      avatar: 'https://robohash.org/009650c6781714f2f80c3c944135f20d?set=set4&bgset=&size=400x400',
    },
    {
      id: '2',
      title: 'How To Drive A Manual Transmission + Rev Match + Heel Toe Downshift (POV Tutorial)',
      subTitle: 'Subheading 2',
      avatar: 'https://robohash.org/009650c6781714f2f80c3c944135f20d?set=set4&bgset=&size=400x400',
    },
    {
      id: '3',
      title: 'How To Drive A Manual Transmission + Rev Match + Heel Toe Downshift (POV Tutorial)',
      subTitle: 'Subheading 2',
      avatar: 'https://robohash.org/009650c6781714f2f80c3c944135f20d?set=set4&bgset=&size=400x400',
    },
    {
      id: '4',
      title: 'How To Drive A Manual Transmission + Rev Match + Heel Toe Downshift (POV Tutorial)',
      subTitle: 'Subheading 2',
      avatar: 'https://robohash.org/009650c6781714f2f80c3c944135f20d?set=set4&bgset=&size=400x400',
    },
    
    // Add more video items as needed
  ];
  
  const categoryData = [
    { category: "Beginners" },
    { category: "Intermediate" },
    { category: "Advanced" },
    { category: "Parking" },
    { category: "Highway Driving" },
    { category: "Night Driving" },
    { category: "Defensive Driving" },
    { category: "Driving in Traffic" },
    { category: "Emergency Maneuvers" },
    { category: "Driving in Bad Weather" },
    { category: "Fuel Efficiency" },
    { category: "Manual Transmission" },
    { category: "Automatic Transmission" },
    { category: "Eco-Driving" },
    { category: "Driving Etiquette" },
    { category: "Vehicle Maintenance" },
    { category: "Road Signs" },
    { category: "Road Safety" },
    { category: "Lane Changes" },
    { category: "Turning and Intersections" },
    { category: "Parallel Parking" },
    { category: "Reverse Parking" },
    { category: "Hill Starts" },
    { category: "Roundabouts" },
    { category: "Pedestrian Safety" },
    { category: "Cyclist Safety" },
    { category: "Driving Tests" },
    { category: "Insurance and Registration" },
  ];
  

  const onRefresh = () => {
    // Your refresh logic here
    // For example, fetching new data from an API
    // Once done, setRefreshing(false) to stop the refresh indicator
  };

  return (
    <View  style={styles.container}>
      <FlatList
        style={styles.categoryList}
        contentContainerStyle={styles.categoryListContent}

        data={categoryData}
        renderItem={({ item }) => (
          <Pressable style={styles.categoryItem}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.categoryText}>{item.category}</Text>
          </Pressable>
        )}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
      />
      <FlatList
        style={styles.videoList}
        contentContainerStyle={styles.videoListContent}
        data={videoData}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => (
          <ListItem onPress={() => navigation.navigate("viewvideo")} bottomDivider>
            <Avatar containerStyle={{ width: 100, borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} size={80} source={{ uri: item.avatar }} />
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: 14 }}>{item.title}</ListItem.Title>
              <View style={styles.avatarContainer}>
                <Avatar avatarStyle={{ borderRadius: 20 }} size={20} source={{ uri: item.avatar }} />
                <ListItem.Subtitle style={styles.subTitleText}>Pak Wheels</ListItem.Subtitle>
              </View>
              <ListItem.Subtitle style={{ fontSize: 12 }}>2 weeks &bull; 0 Views </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    padding: 10,
  },
  categoryList: {

     // Adjust this to control the space between the two lists
  }, 
  categoryListContent: {
    paddingVertical:10,
    paddingHorizontal: 0, // Remove padding if necessary
  },
  categoryItem: {
    width: 100, // Set a fixed width
    height: 50, // Set a fixed height
    padding: 10,
    backgroundColor: '#eee',
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center', // Center the content vertically
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center', // Center the text horizontally
  },
  videoList: {
    marginTop: 0,
  },
  videoListContent: {
    paddingVertical: 0, // Remove padding if necessary
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  subTitleText: {
    marginLeft: 5,
    fontSize: 10,
    alignSelf: 'center',
    color: ThemeProviderColors.Light.FontSubHeading,
  },
});

export default AllLessons;
