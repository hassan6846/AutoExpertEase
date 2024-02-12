import "react-native-gesture-handler"
import { TouchableOpacity, View } from "react-native"
import { Provider } from "react-redux"
import { StatusBar } from "expo-status-bar"



//navigator
//TabNavigator 
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// tabs Configs
import TabsConfigs from "./configs/TabsConfigs"
import { BottomNavigator_Height } from "./configs/TabNavigatorConfigs"
//Stack Navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
// Tab Navigator
const Tab = createBottomTabNavigator()
//Stack Navigator
const Stack = createStackNavigator()


//TabsParentsRoots
import Home from "./screens/BottomsTabs/HomeTab"
import EcommerceTab from "./screens/BottomsTabs/EcommerceTab"
import ServiceTab from "./screens/BottomsTabs/ServiceTab"
import ProfileTab from "./screens/BottomsTabs/ProfileTab"
import ExploreTab from "./screens/BottomsTabs/ExploreTab"
//OfflineScreen
import OfflinePage from "./screens/pages/OfflinePage/OfflinePage"
//LoginScreen
import LoginPage from "./screens/Authentication/LoginScreen"
// Demo Providers Text
import { NetworkInfo, Auth } from "./context/DemoContext"
import Enrollment from "./screens/pages/Enrollment/Enrollment"


//HomePage 
//Always Add Pages Inside Only Contains Page After logged in or Authentication Ok👍
function HomePageActivity() {
  return (
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
        name="Profile"
        options={{
          headerTitleAlign: "center",
          tabBarLabel: TabsConfigs.Profile.tabLabel,
          tabBarIcon: TabsConfigs.Profile.Svg,
        }}
      />
    </Tab.Navigator>
  )
}



//Main       
export default function App({ navigation }: { navigation: any }) {
  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      <Stack.Navigator>
        {NetworkInfo.isOnline ? (
          Auth.isAuthenticated ? (
            <Stack.Screen name="Main" options={{ headerShown: false }} component={LoginPage} />
          ) : (
            <HomePageActivity />
          )
        ) : null}
      </Stack.Navigator>

    </NavigationContainer>
  );
}

