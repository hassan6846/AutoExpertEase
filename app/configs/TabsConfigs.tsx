// Screens names identification Respectivly
//Configs are made seprate to scalable and mainable Code
// to apply value or keys to props respectivly thanks!😁
// This page only contains the Props configs option of TabScreen Option
// iF you are reading this this took time me to learn .
//Customize the Icon Focus styles here
//App Etc
import { Icon } from "@rneui/themed"
import ThemeProviderColors from "../provider/ThemeProvider"
//note use theme provided color only to manage a better code and ui ok not 😞
const TabsConfigs = {
    // HomeScreen 
    Home: {
        tabLabel: "Home",
        Svg: ({ focused }: { focused: any }) => (
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="home-filled" type="material" />
        )
    },
    // ShopScreen
    Shop: {
        tabLabel: "Shop",
        Svg: ({ focused }: { focused: any }) => (
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="storefront" type="material" />
        )
    },
    //Service
    Service: {
        tabLabel: "Auto Fix",
        Svg: ({ focused }: { focused: any }) => (
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="home-repair-service" type="material" />
        )
    },
    //Explore
    Explore: {
        tabLabel: "Messages",
        Svg: ({ focused }: { focused: any }) => (
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="chat" type="material" />
        )
    },
    //Profile
    Profile: {
        tabLabel: "Me",
        Svg: ({ focused }: { focused: any }) => (
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="person" type="material" />
        )
    },
    // If he is a buissness or a Seller
    Buissness: {

    }
}
export default TabsConfigs
