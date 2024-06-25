import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import ThemeProviderColors from '../../../../../../provider/ThemeProvider';
import { useSelector } from 'react-redux';
import { AvatarSrc } from '../../../../../../constants/ImagesConstants';

const AllOrders = ({ navigation }: { navigation: any }) => {
  const id = useSelector((state: any) => state.auth.userid);
  const [orders, setOrders] = useState<any[]>([]); // Initialize orders state as an empty array
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string>(''); // Error state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:4001/api/order/${id}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();

        // Check if data.order is an array before setting state
        if (Array.isArray(data.order)) {
          setOrders(data.order);
        } else {
          throw new Error('Unexpected response format');
        }

        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders. Please try again.'); // Set error message on error
        setLoading(false); // Set loading to false on error
      }
    };

    fetchOrders();
  }, [id]);

  if (loading) {
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator size="large" color={ThemeProviderColors.Light.Primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={Styles.errorContainer}>
        <Text style={Styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={Styles.OrderWrapper}>
      {orders.length === 0 ? (
        <View style={Styles.noOrdersContainer}>
          <Text>No orders found</Text>
        </View>
      ) : (
        orders.map((order: any) => (
          <View key={order._id} style={Styles.HistoryCard}>
            <View style={Styles.OrderTxtDetails}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: ThemeProviderColors.Light.FontSubHeading }}>
                Order Id :#{order.OrderId}
              </Text>
              <Text style={{ fontSize: 12, color: ThemeProviderColors.Light.FontSubHeading }}>
                {order.orderedAt}
              </Text>
              <Text style={{ color: order.orderState ? 'green' : 'red', fontSize: 12 }}>
                {order.orderState ? 'Completed' : 'Processing'}{' '}
                <Icon
                  type='material'
                  name={order.orderState ? 'check-circle' : 'schedule'}
                  size={10}
                  color={order.orderState ? 'green' : 'red'}
                />
              </Text>
            </View>

            <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', paddingVertical: 10 }}>
              {order.products.map((product: any) => (
                <Avatar
                  key={product._id}
                  size={60}
                  containerStyle={{ borderRadius: 5, marginRight: 10 }}
                  avatarStyle={{ borderRadius: 5 }}
                  source={{ uri: product.image[0] }}
                />
              ))}
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Rs {order.TotalAmount} </Text>
              <Text
                style={{
                  backgroundColor: ThemeProviderColors.Light.Primary,
                  color: '#fff',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
               {order.PaymentMethod==='online'? 'Paid Online' : 'COD'}
              </Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  OrderWrapper: {
    backgroundColor: '#f9f9f9',
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  noOrdersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  HistoryCard: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  OrderTxtDetails: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
});

export default AllOrders;
