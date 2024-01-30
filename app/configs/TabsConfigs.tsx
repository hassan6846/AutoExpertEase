// Screens names identification Respectivly
//Configs are made seprate to scalable and mainable Code
// to apply value or keys to props respectivly thanks!😁
// This page only contains the Props configs option of TabScreen Option
// iF you are reading this this took time me to learn .
//Customize the Icon Focus styles here
//App Etc
import { Icon } from "@rneui/themed"
//note use theme provided color only to manage a better code and ui ok not 😞
const TabsConfigs = {
    // HomeScreen 
    Home: {
        tabLabel: "Home",
        Svg: () => (
            <Icon color="#5F6368" name="home-filled" type="material" />
        )
    },
    Shop: {
        tabLabel: "Shop",
        Svg: () => (
            <Icon color="#5F6368" name="storefront" type="material" />
        )
    },
    Service: {
        tabLabel: "Auto Fix",
        Svg: () => (
            <Icon color="#5F6368" name="home-repair-service" type="material" />
        )
    },
    Explore: {
        tabLabel: "More",
        Svg: () => (
            <Icon color="#5F6368" name="explore" type="material" />
        )
    },
    Profile: {
        tabLabel: "Profile",
        Svg: () => (
            <Icon color="#5F6368" name="person" type="material" />
        )
    },
    // If he is a buissness or a Seller
    Buissness: {

    }
}
export default TabsConfigs