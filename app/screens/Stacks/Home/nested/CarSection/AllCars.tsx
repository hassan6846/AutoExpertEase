import { View, StyleSheet, FlatList, Text, TouchableOpacity,RefreshControl,ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Avatar } from '@rneui/themed';
import { getWidth } from '../../../../../utils/GetDimension';

const AllCars = ({ navigation }: { navigation: any }) => {
  const [cars, setCars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);
  const onRefresh = () => {
    setIsRefreshing(true); // Set refreshing state to true on pull-down refresh
    fetchCars(); // Fetch data again
  };
  const fetchCars = async () => {
    try {
      const response = await fetch('http://10.0.2.2:4001/api/car', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setCars(data);
      console.log(data);
      setIsLoading(false);
      setIsRefreshing(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity key={item._id} style={{ width: getWidth * 0.45, marginHorizontal: 5, marginBottom: 20 }}>
    <Avatar
      onPress={() => navigation.navigate('cardetail',{carId: item._id  })}
      overlayContainerStyle={{ borderRadius: 5 }}
      containerStyle={{ width: "100%", height: 240, borderRadius: 3 }}
      avatarStyle={{ resizeMode: "cover", width: '100%', height: '100%', borderRadius: 5 }}
      source={{ uri: item.images[0][0] }}
    />
    
       <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"flex-start",gap:10 }}>
       <Text style={{ fontSize: 12, color: "#97ADB6", marginLeft: 5 }}>{item.name}</Text>

          </View>
          <Text style={{ fontSize: 12, color: "#97ADB6", marginLeft: 5 }}>Rs{item.pricePerDay}/day </Text>

  </TouchableOpacity>
  );
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#fff" }}>
        <ActivityIndicator size="large" color="#E04E2F" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
      
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        onRefresh={fetchCars}
        refreshing={isRefreshing}
        numColumns={2} // Display items in 2 columns

        contentContainerStyle={{ paddingBottom: 20, marginTop: 5 }} // Adjust padding at the bottom of the list
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={['#E04E2F']} // Custom color for the refresh indicator (Android)
          tintColor={'#E04E2F'} // Custom color for the refresh indicator (iOS)
        />
      }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    width: '45%',
    marginHorizontal: 5,
    marginBottom: 20,
  },
  avatarOverlay: {
    borderRadius: 5,
  },
  avatarContainer: {
    width: '100%',
    height: 240,
    borderRadius: 3,
  },
  avatar: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  salePrice: {
    fontSize: 16,
    fontWeight: '900',
    marginTop: 4,
  },
  beforePrice: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: 'red',
    marginLeft: 5,
  },
  name: {
    fontSize: 10,
    fontWeight: '500',
    padding: 4,
    color: '#888',
  },
});

export default AllCars;
