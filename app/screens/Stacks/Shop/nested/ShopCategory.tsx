import { View, FlatList, StyleSheet, } from "react-native"
import { Text,Avatar } from "@rneui/themed"

const ShopCategory = ({ navigation }: { navigation: any }) => {
    // CateogoryData
    const CategoryApi = [
        // Interior Collection
        {
            Title: "Interior Collection",
            Items:[
                {
                    Image:"",
                    Title:"Stearing Wheel"
                },
            ]
        },
        //Exterior Collection.
        {
            Title: "Exterior Collection",
            Items:[]
        },


    ]
    return (

        <FlatList
            style={Styles.CategoryContainer}
            data={CategoryApi}
            renderItem={({item})=>(
                <>
                <Text h4>{item.Title}</Text>
          
                </>
            )}
        />

    )
}
// Styles
const Styles = StyleSheet.create({
    CategoryContainer: {
        flex: 1
    }
})
export default ShopCategory