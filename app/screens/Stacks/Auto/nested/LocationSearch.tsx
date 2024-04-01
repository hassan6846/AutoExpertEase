import { KeyboardAvoidingView, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { Input, Text,Divider } from '@rneui/themed';
import { getHeight as Height } from '../../../../utils/GetDimension';
import React, { useEffect, useState } from 'react';

const AccessTOken = 'pk.eyJ1IjoiaGFzc2Fuc2hlcml5YXIiLCJhIjoiY2xybnIxam00MTg0djJscXI1bXVxNTR3aCJ9.4r9apA2hHuxU3tOoGDVZbQ';
const resultLimit=8
const LocationSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ place_name: string,text:string }[]>([]);

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
                <Input onChangeText={setQuery} inputContainerStyle={Style.InputVoid} inputStyle={Style.InputMain} containerStyle={Style.InputCont} placeholder="Enter Your Location" />
            </View>
            <ScrollView contentContainerStyle={{display:"flex",flexDirection:'column',rowGap:6}} style={Style.DropdownContainer}>
                {results.map((location, index) => (
                    <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? 'rgba(136, 141, 145, 0.274)' : 'white',
                        paddingVertical: 3,
                        paddingHorizontal: 5,
                        borderRadius:5,
                      },
                    ]}
                    key={index}
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
        flex: 1,
        paddingHorizontal:20,
    }
});

export default LocationSearch;
