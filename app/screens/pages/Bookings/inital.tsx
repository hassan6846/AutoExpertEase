import React from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
const Bookings=createMaterialTopTabNavigator()
//Nested Page
import CarBookings from './nested/CarBookings'
import PostedCars from './nested/PostedCars'


const BookingInital = () => {
  return (
     <Bookings.Navigator>
      <Bookings.Screen component={CarBookings}  name='carbookings'/>
      <Bookings.Screen  component={PostedCars} name='postedcars'/>
     </Bookings.Navigator>
  )
}

export default BookingInital;