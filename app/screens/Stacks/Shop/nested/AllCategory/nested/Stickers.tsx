import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, RefreshControl } from 'react-native';
import { Avatar } from "@rneui/themed"; // Ensure Button is imported correctly
import ThemeProviderColors from '../../../../../../provider/ThemeProvider';
import { getWidth } from '../../../../../../utils/GetDimension';

const Stickers = ({ navigation }: { navigation: any }) => {
  const [products, setProducts] = useState<any[]>([]);
  const QueryString = "stickers";
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://backend-autoexpertease-production-5fd2.up.railway.app/api/products/category/${QueryString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
      setIsRefreshing(false); // Ensure to set refreshing state to false after data is fetched
    } catch (error) {
      console.error('Error fetching products:', error);
      setIsLoading(false);
      setIsRefreshing(false); // Ensure to set refreshing state to false on error
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true); // Set refreshing state to true on pull-down refresh
    fetchProducts(); // Fetch data again
  };

  // Render loading indicator while fetching data
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#fff" }}>
        <ActivityIndicator size="large" color="#E04E2F" />
      </View>
    );
  }

  // Render products once data is fetched
  return (
    <FlatList
      style={{ paddingHorizontal: 10, backgroundColor: "#fff" }}
      data={products}
      numColumns={2} // Display items in 2 columns
      renderItem={({ item }) => (
        <TouchableOpacity key={item._id} style={{ width: getWidth * 0.45, marginHorizontal: 5, marginBottom: 20 }}>
          <Avatar
            onPress={() => navigation.navigate("view", { productId: item._id })}
            overlayContainerStyle={{ borderRadius: 5 }}
            containerStyle={{ width: "100%", height: 240, borderRadius: 3 }}
            avatarStyle={{ resizeMode: "cover", width: '100%', height: '100%', borderRadius: 5 }}
            source={{ uri: item.image[0] }}
          />
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 16, fontWeight: "900", marginTop: 4 }}>{item.price.saleprice} Rs</Text>
            <Text style={{ textDecorationLine: "line-through", fontSize: 12, color: "red", marginLeft: 5 }}>{item.price.beforePrice}</Text>
          </View>
          <Text style={{ fontSize: 10, fontWeight: "500", padding: 4, color: ThemeProviderColors.Light.FontSubHeading }}>
            {item.name.length > 30 ? `${item.name.substring(0, 30)}...` : item.name}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item._id}
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
  );
};

export default Stickers;
