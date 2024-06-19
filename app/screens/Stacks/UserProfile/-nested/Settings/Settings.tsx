import {StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'
//Library Imports
import { ListItem, Icon } from "@rneui/themed"



const Settings = ({ navigation }: { navigation: any }) => {

    return (
        <ScrollView style={Style.container}>
            <Pressable onPress={() => navigation.navigate('language')} style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white', }, Style.pressableContainer]}>
                <Icon containerStyle={{ backgroundColor: "rgba(59, 59, 59, 0.082)", padding: 5, marginRight: 5, borderRadius: 5 }} name='translate' type='material' />
                <ListItem.Content>
                    <ListItem.Title >Language</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </Pressable>


        </ScrollView>
    )
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    pressableContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center"
    }
})
export default Settings