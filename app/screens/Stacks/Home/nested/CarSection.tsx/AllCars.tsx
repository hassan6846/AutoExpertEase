import { View, StyleSheet } from 'react-native';
import React from 'react';
import CarCard from '../../../../../components/CarCard/CarCard';


const AllCars = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <CarCard  onPress={()=>navigation.navigate('cardetail')} hasAC={true}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

 padding:10,

  },

});

export default AllCars;
