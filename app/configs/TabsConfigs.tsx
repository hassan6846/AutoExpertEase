// Screens names identification Respectivly
//Configs are made seprate to scalable and mainable Code
// to apply value or keys to props respectivly thanks!😁
// This page only contains the Props configs option of TabScreen Option
// iF you are reading this this took time me to learn .
//Customize the Icon Focus styles here
//App Etc
import { Icon } from "@rneui/themed"
import ThemeProviderColors from "../provider/ThemeProvider"
import { Pressable, StyleSheet } from "react-native"
//note use theme provided color only to manage a better code and ui ok not 😞
const TabsConfigs = {
    // HomeScreen 
    Home: {
        Svg: ({ focused }: { focused: any }) => (
            <Pressable android_ripple={{ color: '#CCD5D5', borderless: true, }}>
                <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="home-filled" type="material" />
            </Pressable>
        )
    },
    // ShopScreen
    Shop: {

        Svg: ({ focused }: { focused: any }) => (
            <Pressable android_ripple={{ color: '#CCD5D5', borderless: true }}>
                <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="storefront" type="material" />
            </Pressable>
        )
    },
    //Service
    Service: {
        Svg: ({ focused }: { focused: any }) => (
            <Pressable android_ripple={{ color: '#CCD5D5', borderless: true }}>
                <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="home-repair-service" type="material" />
            </Pressable>
        )
    },
    //Explore
    Explore: {
        Svg: ({ focused }: { focused: any }) => (
            <Pressable android_ripple={{ color: '#CCD5D5', borderless: true }}>
                <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="chat" type="material" />
            </Pressable>
        )
    },
    //Profile
    Profile: {
        Svg: ({ focused }: { focused: any }) => (
            <Pressable android_ripple={{ color: '#CCD5D5', borderless: true }}>
                <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="person" type="material" />
            </Pressable>
        )
    },
    //Dashboard

}
export default TabsConfigs

// Styles
const BottomTabBarStyles = StyleSheet.create({

})