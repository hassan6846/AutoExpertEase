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

import LoginPage from "./screens/Authentication/LoginScreen"
import PrivacyPolicy from "./screens/pages/PrivacyPolicy/PrivacyPolicy"
import SelectLanguage from "./screens/pages/Localization/SelectLanguage"
import OtpPage from "./screens/Authentication/OtpScreen"

// Tabs Root Pages
import Home from "./screens/BottomsTabs/HomeTab"
import EcommerceTab from "./screens/BottomsTabs/EcommerceTab"
import ServiceTab from "./screens/BottomsTabs/ServiceTab"
import ProfileTab from "./screens/BottomsTabs/ProfileTab"
import ExploreTab from "./screens/BottomsTabs/ExploreTab"
// tabs Configs
import TabsConfigs from "./configs/TabsConfigs"

//pages/screens
//OFlinePage
import OfflinePage from "./screens/pages/OfflinePage/OfflinePage"
import { BottomNavigator_Height } from "./configs/TabNavigatorConfigs"
export default function App({ navigation }: { navigation: any }) {
  // animation

  return (
    <NavigationContainer>
      {/* Bottom Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: BottomNavigator_Height,
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
            headerShown: false,
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
          name="Me"
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

