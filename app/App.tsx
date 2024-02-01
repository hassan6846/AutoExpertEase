//module and Library
import { TouchableOpacity, View } from "react-native"
import "react-native-gesture-handler"
import { Icon, ThemeProvider } from "@rneui/themed"
//Utils or localImports or Configs
import theme from "./context/ThemeContext"

//navigator (react navigation)
import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
// const Stack = createStackNavigator()

// Tab Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const Tab = createBottomTabNavigator()

//pages or Screens

import LoginPage from "./screens/LoginScreen"
import PrivacyPolicy from "./screens/PrivacyPolicy"
import SelectLanguage from "./screens/SelectLanguage"
import OtpPage from "./screens/OtpScreen"

// Tabs Root Pages
import Home from "./screens/HomeTab"
import EcommerceTab from "./screens/EcommerceTab"
import ServiceTab from "./screens/ServiceTab"
import ProfileTab from "./screens/ProfileTab"
import ExploreTab from "./screens/ExploreTab"
// tabs Configs
import TabsConfigs from "./configs/TabsConfigs"

//pages/screens
//OFlinePage
import OfflinePage from "./screens/OfflinePage"
import { BottomNavigator_Height } from "./configs/TabNavigatorConfigs"
export default function App({ navigation }: { navigation: any }) {
  // animation

  return (
    <NavigationContainer>
      {/* Bottom Tab Navigator */}
      <Tab.Navigator
 screenOptions={{
  tabBarStyle:{
   height:BottomNavigator_Height,
  }
 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: TabsConfigs.Home.tabLabel,
            tabBarIcon: TabsConfigs.Home.Svg

          }} />

        {/* ShopTab */}
        <Tab.Screen name="Shop"
          component={EcommerceTab}
          options={{
            tabBarLabel: TabsConfigs.Shop.tabLabel,
            tabBarIcon: TabsConfigs.Shop.Svg
          }}
        />

        {/* Service Tabs */}
        <Tab.Screen name="Service"
          component={ServiceTab}
          options={{
            tabBarLabel: TabsConfigs.Service.tabLabel,
            tabBarIcon: TabsConfigs.Service.Svg
          }}
        />
        {/* Explore More Tabs. */}
        <Tab.Screen
          component={ExploreTab}
          name="Explore"
          options={{
            tabBarLabel: TabsConfigs.Explore.tabLabel,
            tabBarIcon: TabsConfigs.Explore.Svg
          }}
        />
        {/* user ProfilePage */}
        <Tab.Screen
          component={ProfileTab}
          name="Profile"
          options={{
            headerTitleAlign: "center",
            tabBarLabel: TabsConfigs.Profile.tabLabel,
            tabBarIcon: TabsConfigs.Profile.Svg,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

