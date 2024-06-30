import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator,Alert } from 'react-native';
import { Button, Text, Avatar, Icon } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { addItemToCart } from '../../../../slices/CartSlice';
import { useDispatch,useSelector } from 'react-redux';


const ProductViewPage = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { productId } = route.params as { productId: string }; // Type assertion to specify the shape of route.params
  const addedToCartItems = useSelector((state: any) => state.cart.items); // Redux state for added items
  const id = useSelector((state: any) => state.auth.userid);

  const [product, setProduct] = useState<any>(null); // State to hold product details
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // State to track selected image index
 const [buttonTitle,setButtonTitle] = useState<string>("Add to Cart");
  const FeaturesArray = [
    {
      name: 'Free Delivery',
      value: true,
      icon: "local-shipping",
      color: "#007787",
      backgroundColor: "#f6f6f6",
    },
    {
      name: 'Secure Transfer',
      value: true,
      icon: "payments",
      color: "#3F0686",
      backgroundColor: "#f6f6f6",
    },
    {
      name: 'Non Refundable',
      value: true,
      icon: "sync-disabled",
      color: "#3F0686",
      backgroundColor: "#f6f6f6",
    },
    {
      name: 'Return Warranty',
      value: true,
      icon: "verified-user",
      color: "#3F0686",
      backgroundColor: "#f6f6f6",
    }
  ];
  const handleAddToCart = (item: any) => {
    if (id === product.PostedBy) {
      Alert.alert("OOps", "You cannot order your own items Please Select Another Product Being Posted by another seller.");
      return;
    }
  setButtonTitle("Added");
    dispatch(addItemToCart(item)); // Dispatch action to add item to Redux cart
};
const isItemAddedToCart = (_id: string) => {
  return addedToCartItems.includes(_id);
};

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://backend-autoexpertease-production-5fd2.up.railway.app/api/product/${productId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }

        const data = await response.json();
        setProduct(data.product); // Set product details to state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleAvatarPress = (index: number) => {
    setSelectedIndex(index); // Update selectedIndex when Avatar is pressed
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E04E2F" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>No product found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
          <Avatar 
            avatarStyle={{ borderRadius: 5 }} 
            containerStyle={{ height: 250, width: "90%", marginBottom: 5 }} 
            source={{ uri: product.image[selectedIndex] }} // Use selectedIndex to display the selected image
          />
        </View>
        <View style={styles.imageRow}>
          {product.image.map((image: any, index: number) => (
            <Avatar
              key={index}
              size={60}
              containerStyle={{ marginLeft: 5 }}
              avatarStyle={StyleSheet.flatten([
                { borderRadius: 5 },
                { borderColor: selectedIndex === index ? "#E04E2F" : 'transparent', borderWidth: 2 }
              ])}
              source={{ uri: image }}
              onPress={() => handleAvatarPress(index)} // Call handleAvatarPress with index
            />
          ))}
        </View>
        <Text style={{ paddingHorizontal: 20, marginTop: 5, color: "#302F33", fontWeight: "100", fontSize: 20 }}>
          {product.name}
        </Text>
        <View style={{ flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 10, backgroundColor: "#f6f6f6", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginTop: 10, marginBottom: 10, marginLeft: 5 }}>
            {product.productcategory.category}
          </Text>
          <Text style={{ fontSize: 10, backgroundColor: "#f6f6f6", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginTop: 10, marginBottom: 10, marginLeft: 5 }}>
            {product.productcategory.subcategory}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 10 }}>
          <Text style={{ marginRight: 5, color: "#302F33", fontWeight: "400", fontSize: 18 }}>PKR{product.price.saleprice}</Text>
          <Text style={{ fontSize: 12, fontWeight: "100", textDecorationLine: "line-through", color: "#97ADB6" }}>{product.price.beforePrice}</Text>
        </View>
        <View>
          <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, justifyContent: "center", columnGap: 10 }}>
            {FeaturesArray.map((feature, index) => (
              <View key={index} style={{ backgroundColor: feature.backgroundColor, flexDirection: 'column', alignItems: 'center', borderRadius: 5, paddingHorizontal: 5, paddingVertical: 8 }}>
                <Icon containerStyle={{ marginRight: 3 }} name={feature.icon} />
                <Text style={{ fontSize: 10, fontWeight: "100" }}>{feature.name}</Text>
              </View>
            ))}
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 14 }}>Description</Text>
            <Text style={{ color: "#97ADB6", fontWeight: "100" }}>
              {product.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Button 
                 disabled={isItemAddedToCart(product._id)} // Disable button if item is already added to cart
                 onPress={() => handleAddToCart(product)}
      color="#E04E2F" title={buttonTitle} containerStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 60, // Adjust based on the button's height
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 30,
  },
});

export default ProductViewPage;
