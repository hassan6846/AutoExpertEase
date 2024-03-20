import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Avatar } from '@rneui/themed';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const ShopCategory = ({ navigation }: { navigation: any }) => {
    // CategoryData
    const CategoryApi = [
        // Interior Collection
        {
            Title: 'Interior Collection',
            Items: [
                {
                    Image:
                        'https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/hxrsdy4knmgbuzkyhfgv.png',
                    title: 'Steering Wheel',
                },
                {
                    Image:
                        'https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/wj5viu4cfdqiseszzecl.png',
                    title: 'Seating & Furniture.',
                },
                {
                    Image:
                        'https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/okkapuadloin5grwt73l.png',
                    title: 'Ash Tray',
                },
                {
                    Image:
                        'https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/wj5viu4cfdqiseszzecl.png',
                    title: 'Floor Mats',
                },
                {
                    Image:
                        'https://res.cloudinary.com/diml3oeaw/image/upload/v1709258666/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/fkminxuekzhsfhdft1mk.png',
                    title: 'Automotive Shades',
                },
                {
                    Image:
                        'https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/o4rzekp4iuyn21arbcub.png',
                    title: 'Speakers',
                },
                {
                    Image:
                        'https://res.cloudinary.com/diml3oeaw/image/upload/v1709258667/AutoExpertEase/Assets/ShopCateogryApi_Images/Interior/gtkvs3nyspdlwmigpkr7.png',
                    title: 'Hangings',
                },

            ],
        },
        // Exterior Collection.
        {
            Title: 'Exterior Collection',
            Items: [],
        },
    ];

    return (
        <FlatList
            style={Styles.CategoryContainer}
            data={CategoryApi}
            renderItem={({ item }) => (
                <>
             
                   <View>
                   <Avatar size={60} source={{uri:AvatarSrc}}/>

                   </View>
                  
                            
                   
                   

                </>
            )}
            keyExtractor={(item) => item.Title}
        />
    );
};

// Styles
const Styles = StyleSheet.create({
    CategoryContainer: {
        flex: 1,
        backgroundColor:"#fff"
    },
 
});


export default ShopCategory;
