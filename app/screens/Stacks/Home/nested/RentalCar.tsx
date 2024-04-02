import React, { useState } from 'react';
import { ScrollView, StyleSheet, Pressable } from 'react-native';
import { Text } from "@rneui/themed";
import ThemeProviderColors from '../../../../provider/ThemeProvider';

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
        <ScrollView style={Style.rentalContainer}>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {carTypes.map((carType, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handlePress(index)}
                        style={({ pressed }) => [
                            {
                                backgroundColor: activeIndex === index ? ThemeProviderColors.Light.Primary : "#e5e5e5",
                                borderRadius: 5,
                                paddingHorizontal: 10,
                                paddingVertical: 6,
                                marginRight: 10,
                            },
                        ]}
                    >
                        <Text style={{ color: activeIndex === index ? "#fff" : "#000", fontSize: 13 }}>{carType.label}</Text>
                    </Pressable>
                ))}
            </ScrollView>
            {/* Car listing below infinte scroll */}
        </ScrollView>
    );
};

const Style = StyleSheet.create({
    rentalContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default RentalCar;
