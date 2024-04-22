import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
//Stack
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"

const OrdersDetails = createStackNavigator()
//Child Screen
import OrdersDetail from './nested/OrdersDetail'
import AllOrders from './nested/AllOrders'

const TrackOrders = () => {
  return (
    <OrdersDetails.Navigator>
      <OrdersDetails.Screen name='OrderStack' options={{headerShown:false}} component={AllOrders} />
      <OrdersDetails.Screen name='OrderDetail' options={{headerShown:false}} component={OrdersDetail} />

    </OrdersDetails.Navigator>
  )
}
const Styles = StyleSheet.create({

})
export default TrackOrders