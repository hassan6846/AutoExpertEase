import { KeyboardAvoidingView, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
//library
import { Input, Text, Divider } from '@rneui/themed';
//utils
import { getHeight as Height } from '../../../../utils/GetDimension';
//States
import { useDispatch } from 'react-redux';
import { SetNearbyPlace } from '../../../../slices/LocationSlice';

const AccessTOken = 'pk.eyJ1IjoiaGFzc2Fuc2hlcml5YXIiLCJhIjoiY2xybnIxam00MTg0djJscXI1bXVxNTR3aCJ9.4r9apA2hHuxU3tOoGDVZbQ';
const resultLimit = 8;

const LocationSearch = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ place_name: string, text: string }[]>([]);

    const fetchLocations = async () => {
        try {
            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=ip&autocomplete=true&limit=${resultLimit}&country=pk&access_token=${AccessTOken}`);
            const data = await response.json();
            if (data.features) {
                setResults(data.features);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleResultPress = (placeName: string) => {
        dispatch(SetNearbyPlace(placeName));
        navigation.navigate("task_location")
    
    };

    useEffect(() => {
        if (query.trim() !== '') {
            fetchLocations();
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <KeyboardAvoidingView style={Style.QueryContainer}>
            <View style={Style.InputContainer}>
                <Input   onChangeText={setQuery} inputContainerStyle={Style.InputVoid} inputStyle={Style.InputMain} containerStyle={Style.InputCont} placeholder="Enter Your Location" />
            </View>
            <ScrollView contentContainerStyle={Style.DropdownContainer}>
                {results.map((location, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handleResultPress(location.place_name)}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(136, 141, 145, 0.274)' : 'white',
                                paddingVertical: 3,
                                paddingHorizontal: 5,
                                borderRadius: 5,
                            },
                        ]}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{location.text}</Text>
                        <Text style={{ fontSize: 12, marginBottom: 5 }}>{location.place_name}</Text>
                        <Divider />
                    </Pressable>
                ))}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const Style = StyleSheet.create({
    QueryContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    InputContainer: {
        height: Height / 10,
        justifyContent: "center",
        alignItems: "center"
    },
    InputMain: {
        paddingLeft: 10,
        fontSize: 14
    },
    InputVoid: {
        backgroundColor: "#e5e5e5",
        borderBottomWidth: 0,
        borderRadius: 5,
        fontSize: 12
    },
    InputCont: {
        width: "90%"
    },
    DropdownContainer: {
        paddingHorizontal: 20,
    }
});

export default LocationSearch;
