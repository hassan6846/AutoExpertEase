// Screens names identification Respectivly
//Configs are made seprate to scalable and mainable Code
// to apply value or keys to props respectivly thanks!😁
// This page only contains the Props configs option of TabScreen Option
// iF you are reading this this took time me to learn .
//Customize the Icon Focus styles here
//App Etc
import { Icon,Text,Avatar } from "@rneui/themed"
import ThemeProviderColors from "../provider/ThemeProvider"
import { TouchableOpacity, StyleSheet, Pressable } from "react-native"
import { AvatarSrc } from "../constants/ImagesConstants"
//note use theme provided color only to manage a better code and ui ok not 😞
const TabsConfigs = {
    // HomeScreen 
    Home: {
        Svg: ({ focused }: { focused: any }) => (
           <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="home-filled" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Home</Text>

            </>
        )
    },
    // ShopScreen
    Shop: {

        Svg: ({ focused }: { focused: any }) => (
            <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="storefront" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Shop</Text>
            </>
        )
    },
    //Service
    Service: {
        Svg: ({ focused }: { focused: any }) => (
            <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="home-repair-service" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Experts</Text>
            </>
        )
    },
    //Explore
    Explore: {
        Svg: ({ focused }: { focused: any }) => (
            <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="chat" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Messages</Text>
            </>
        )
    },
    //Profile
    Profile: {
        Svg: ({ focused }: { focused: any }) => (
            <>
            <Avatar  avatarStyle={{borderWidth:2,borderColor:focused?ThemeProviderColors.Light.Primary:"#5F6368"}} rounded  source={{uri:AvatarSrc}} size={25}/>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>You</Text>
            </>
        )
    },
    //Dashboard

}
export default TabsConfigs

// Styles
const BottomTabBarStyles = StyleSheet.create({

})