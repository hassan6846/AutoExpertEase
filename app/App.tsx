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


//TabsMain
import Home from "./screens/BottomsTabs/HomeTab"
import EcommerceTab from "./screens/BottomsTabs/EcommerceTab"
import ServiceTab from "./screens/BottomsTabs/ServiceTab"
import ProfileTab from "./screens/BottomsTabs/ProfileTab"
import ExploreTab from "./screens/BottomsTabs/ExploreTab"

//Features
import OfflinePage from "./screens/pages/OfflinePage/OfflinePage"
import Enrollment from "./screens/pages/Enrollment/Enrollment"
import LoginPage from "./screens/Authentication/LoginScreen"
import ViewProfileImage from "./screens/Stacks/UserProfile/-nested/ViewProfileImage"
// Context and Providers
import { NetworkInfo, Auth } from "./context/DemoContext"

//Fonts




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
          tabBarShowLabel: false,
          tabBarIcon: TabsConfigs.Home.Svg

        }} />

      {/* ShopTab */}
      <Tab.Screen name="Shop"
        component={EcommerceTab}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: TabsConfigs.Shop.Svg,


        }}
      />

      {/* Service Tabs */}
      <Tab.Screen name="Service"
        component={ServiceTab}

        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: TabsConfigs.Service.Svg
        }}
      />
      {/* Explore More Tabs. */}
      <Tab.Screen
        component={ExploreTab}
        name="Explore"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: TabsConfigs.Explore.Svg
        }}
      />
      {/* user ProfilePage */}
      <Tab.Screen
        component={ProfileTab}
        name="Profile"

        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          headerShown: false,
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>


        <Stack.Screen name="Main" component={HomePageActivity} />
        <Stack.Screen name="Login" options={{ headerShown: true, headerTitle: "GetStarted", headerTitleAlign: "center" }} component={LoginPage} />
        <Stack.Screen name="ViewProfile"
          options={{
            headerShown: true,

            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: "black"
            },
            headerShadowVisible: false,
            headerTransparent: true,
            headerTintColor:"#97ADB6"

          }}
          component={ViewProfileImage} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

