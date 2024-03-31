import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { ListItem, Switch, Icon, } from "@rneui/themed"
import ThemeProviderColors from '../../../../../provider/ThemeProvider'


const Settings = ({ navigation }: { navigation: any }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <ScrollView style={Style.container}>






            <Pressable onPress={() => navigation.navigate('language')} style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white', }, Style.pressableContainer]}>
                <Icon containerStyle={{ backgroundColor: "rgba(59, 59, 59, 0.082)", padding: 5, marginRight: 5, borderRadius: 5 }} name='translate' type='material' />
                <ListItem.Content>
                    <ListItem.Title >Language</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </Pressable>



            {/* Expert Pressable */}
            <Pressable onPress={() => navigation.navigate('language')} style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white', }, Style.pressableContainer]}>
                <Icon containerStyle={{ backgroundColor: "rgba(59, 59, 59, 0.082)", padding: 5, marginRight: 5, borderRadius: 5 }} name='engineering' type='material' />
                <ListItem.Content>
                    <ListItem.Title >Expert DashBoard</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </Pressable>


            {/* Store */}
            <Pressable onPress={() => navigation.navigate('language')} style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white', }, Style.pressableContainer]}>
                <Icon containerStyle={{ backgroundColor: "rgba(59, 59, 59, 0.082)", padding: 5, marginRight: 5, borderRadius: 5 }} name='store' type='material' />
                <ListItem.Content>
                    <ListItem.Title >Manage Store</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </Pressable>

            {/* DarkTheme toggle */}

            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white', }, Style.pressableContainer]}>
                <Icon containerStyle={{ backgroundColor: "rgba(59, 59, 59, 0.082)", padding: 5, marginRight: 5, borderRadius: 5 }} name='circle' type='material' />
                <ListItem.Content>
                    <ListItem.Title >Dark Mode</ListItem.Title>
                </ListItem.Content>
                <Switch color={ThemeProviderColors.Light.Primary} onValueChange={setOpen} value={open} />
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