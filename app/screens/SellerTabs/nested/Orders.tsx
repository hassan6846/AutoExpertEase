import { View, Text, ScrollView, StyleSheet, Alert, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
// library
import { Icon, Avatar } from '@rneui/themed';
// utils
import ThemeProviderColors from '../../../provider/ThemeProvider';
// state
import { useSelector } from 'react-redux';

const Orders = () => {
  const id = useSelector((state: any) => state.auth.userid);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:4001/api/vendor/get-orders/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setOrders(data.order);
      } catch (error) {
        Alert.alert('Oops! Something went wrong.', 'Please try again later.');
        console.log(error);
      }
    };
    getOrders();
  }, [id]);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) {
      return description;
    }
    return `${description.substring(0, maxLength)}...`;
  };

  return (
    <ScrollView style={styles.container}>
      {orders.map((order, orderIndex) => (
        <View key={orderIndex} style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <Text style={styles.orderText}>Tracking ID: #{order.OrderId}</Text>
            <Text style={styles.orderText}>{new Date(order.orderedAt).toLocaleString()}</Text>
            <Text style={styles.orderText}>
              {order.PaymentMethod === 'cod' ? (
                <>
                  COD <Icon type="material" name="money" size={12} color="orange" />
                </>
              ) : (
                <>
                  Paid <Icon type="material" name="payment" size={12} color="green" />
                </>
              )}
            </Text>
          </View>
          {order.products.map((product:any, productIndex:any) => (
            <View key={productIndex} style={styles.productCard}>
              <Image source={{ uri: product.image[0] }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDescription}>{truncateDescription(product.description, 100)}</Text>
                <Text style={styles.productPrice}>${product.price.saleprice}</Text>
                <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
              </View>
            </View>
          ))}
          <View style={styles.orderDetails}>
            <View style={styles.detailItem}>
              <Icon type="material" name="phone" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
              <Text style={styles.detailText}>Buyer Contact: {order.shippingInfo.phoneNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon type="material" name="pin-drop" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
              <Text style={styles.detailText}>Address: {order.shippingInfo.address}</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon type="material" name="attach-money" size={18} color={ThemeProviderColors.Light.FontSubHeading} />
              <Text style={styles.detailText}>Total Amount: ${order.TotalAmount}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  orderCard: {
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  orderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: ThemeProviderColors.Light.FontSubHeading,
  },
  productCard: {
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: ThemeProviderColors.Light.FontSubHeading,
  },
  productDescription: {
    fontSize: 12,
    color: ThemeProviderColors.Light.FontSubHeading,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  productQuantity: {
    fontSize: 12,
    color: ThemeProviderColors.Light.FontSubHeading,
  },
  orderDetails: {
    marginTop: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 5,
    fontSize: 12,
    color: ThemeProviderColors.Light.FontSubHeading,
  },
});

export default Orders;
