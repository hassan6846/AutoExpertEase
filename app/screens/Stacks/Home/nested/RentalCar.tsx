import React, { useState } from 'react';
import { ScrollView, StyleSheet, Pressable, View } from 'react-native';
import { Text } from "@rneui/themed";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import CarCard from '../../../../components/CarCard/CarCard';

const RentalCar = () => {
    const carTypes = [
        { label: 'Sedan' },
        { label: 'SUV' },
        { label: 'Trucks' },
        { label: 'Bikes' },
        { label: 'RVs' },
        { label: 'Motorcycles' },
        { label: 'Luxury Cars' },
        { label: 'Coupes' },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handlePress = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <ScrollView  style={Style.rentalContainer}>
   <Text style={Style.Heading}>Categories</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {carTypes.map((carType, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handlePress(index)}
                        style={({ pressed }) => [
                            {
                                backgroundColor: activeIndex === index ? ThemeProviderColors.Light.Primary : "#f8f8f8",
                                borderRadius: 5,
                                paddingHorizontal: 10,
                                paddingVertical: 6,
                                marginRight: 10,
                            },
                        ]}
                    >
                        <Text style={{ color: activeIndex === index ? "#fff" : "#D1D0D4", fontSize: 13 }}>{carType.label}</Text>
                    </Pressable>
                ))}
            </ScrollView>
            <Text style={Style.Heading}>Best Rental Cars</Text>
           <View style={{flex:1,backgroundColor:'#fff',flexWrap:'wrap',flexDirection:'row',alignSelf:'center',rowGap:10,justifyContent:"space-between",paddingHorizontal:8,marginTop:10}}>
          
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           <CarCard/>
           </View>
        </ScrollView>
    );
};

const Style = StyleSheet.create({
    rentalContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    Heading:{
        marginTop: 10,
        fontSize: 18, fontWeight: "bold",
        marginBottom: 10,
        marginLeft:10,
    }
});

export default RentalCar;
