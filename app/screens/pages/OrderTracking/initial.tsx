import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
const Orders = createMaterialTopTabNavigator()
//import All Child for ORder Pages../
import TrackOrders from './nested/Stack/TrackOrders'
import OrderHistory from './nested/OrderHistory'

const InitalOrders = () => {
    return (
        <Orders.Navigator>
            <Orders.Screen options={{ title: "Current" }} name='AllOrders' component={TrackOrders} />
            <Orders.Screen options={{ title: "History" }} name='OrdersHistory' component={OrderHistory} />
        </Orders.Navigator>
    )
}

export default InitalOrders