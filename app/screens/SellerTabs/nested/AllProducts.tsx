import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { Text, Avatar } from "@rneui/themed";
import { useSelector } from 'react-redux';
import { getHeight, getWidth } from '../../../utils/GetDimension';

const AllProducts = () => {
  const id = useSelector((state: any) => state.auth.userid);
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [id]); // Dependency array to re-fetch data when id changes

  const fetchData = async () => {
    try {
      const response = await fetch(`https://backend-autoexpertease-production-5fd2.up.railway.app/api/products/vendor/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.products); // Assuming data is structured as { success: true, products: [...] }
      console.log(data.products);
    } catch (error) {
      console.error('Error fetching products:', error.message);
      // Handle error, e.g., show error message to user
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  }, []);

  const renderProductItem = ({ item }:{item:any}) => (
    <View style={styles.productContainer}>
      <Avatar
        containerStyle={styles.avatar}
        overlayContainerStyle={styles.avatarOverlay}
        source={{ uri: item.image[0] }} // Assuming item.image is the URL of the product image
      />

      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={3}>
          {item.name}
        </Text>

        <View style={styles.categoryChip}>
          <Text style={styles.categoryText}>{item.productcategory.category}</Text>
          <Text style={styles.categoryText}>{item.productcategory.subcategory}</Text>
          {/* Assuming you want to display category from productcategory */}
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.priceDetails}>
            <Text style={styles.price}>{item.price.saleprice} Rs</Text>
            {/* Assuming saleprice is the correct field for sale price */}
            <Text style={styles.oldPrice}>{item.price.beforePrice}</Text>
            {/* Assuming beforePrice is the correct field for old price */}
          </View>

          <View style={styles.actionButtons}>
            {/* Action buttons or actions */}
            <Text style={{ 
              backgroundColor: item.productStatus ? "#E04E2F" : "#97ADB6",
              fontSize: 12,
              paddingHorizontal: 10,
              color: "#fff",
              borderRadius: 5
            }}>
              {item.productStatus ? "Active" : "Inactive"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{ padding: 10 }}
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item._id.toString()} // Assuming each product has a unique id
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#E04E2F', '#97ADB6']} // Color options for the refresh indicator on Android
          progressBackgroundColor="#ffffff" // Background color of the refresh indicator on Android
          tintColor="#E04E2F" // Color of the refresh indicator on iOS
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    height: getHeight/ 8,
    width: getWidth/ 3.5,
    borderRadius: 5,
  },
  avatarOverlay: {
    borderRadius: 5,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  categoryChip: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  categoryText: {
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    color: 'gray',
    fontSize: 12,
    marginLeft:5,
    borderRadius: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  priceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 10,
    color: 'gray',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default AllProducts;
