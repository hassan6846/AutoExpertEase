import { View, StyleSheet } from 'react-native';
import React from 'react';
import CarCard from '../../../../../components/CarCard/CarCard';


const AllCars = () => {
  return (
    <View style={styles.container}>
      <CarCard hasAC={true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 flex:1,
 padding:10,
  },

});

export default AllCars;
