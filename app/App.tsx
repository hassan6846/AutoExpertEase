import "react-native-gesture-handler"
import { View, Dimensions } from "react-native"
const getHeight = Dimensions.get("screen").height

import { StatusBar } from "expo-status-bar"
import { LinearProgress, Text } from "@rneui/themed"

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
import ChatSupport from "./screens/Stacks/UserProfile/-nested/Help&Support/ChatSupport"
import { useState } from "react"
import AuthStack from "./screens/Authentication/LoginStack"
import Settings from "./screens/Stacks/UserProfile/-nested/Settings/Settings"
import ExpertPanel from "./screens/ExpertTabs/ExpertTabMain"
import Store from "./store/Store"
import { RootState } from "./interface/AuthInterface"


/**
 * 
 * Async Storage To check if user visited first time or not. 
 */
//storage




//HomePage 
//Always Add Pages Inside Only Contains Page After logged in or Authentication Ok👍
function HomePageActivity() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: BottomNavigator_Height,

        },
        tabBarShowLabel: false,

      }}
    >
      <Tab.Screen
        // postion absoulte styling

        name="Home"
        component={Home}
        options={{

          tabBarIcon: TabsConfigs.Home.Svg

        }}

      />

      {/* ShopTab */}
      <Tab.Screen name="Shop"
        component={EcommerceTab}
        options={{
          headerShown: false,

          tabBarIcon: TabsConfigs.Shop.Svg,


        }
        }
      />

      {/* Service Tabs */}
      <Tab.Screen name="Service"
        component={ServiceTab}


        options={{
          headerShown: false,
          tabBarIcon: TabsConfigs.Service.Svg
        }}
      />
      {/* Explore More Tabs. */}
      <Tab.Screen
        component={ExploreTab}
        name="Inbox"
        options={{
          headerShadowVisible: false,
          tabBarIcon: TabsConfigs.Explore.Svg
        }}
      />
      {/* user ProfilePage */}
      <Tab.Screen
        component={ProfileTab}
        name="Profie"

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

import { Provider, useSelector } from "react-redux"
import { Avatar } from "@rneui/base"
import { ChatbotAvatar } from "./constants/ImagesConstants"



const Main = () => {
  const [Auth, SetAuth] = useState(true)
  const progress = useSelector((state: RootState) => state.auth.Progress)
  const activeColor=useSelector((state:RootState)=>state.auth.HeaderColor)//dynamic
  return (
    <NavigationContainer >

      <StatusBar style="auto" />


      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {

          Auth ? (
            <>
              <Stack.Screen name="Main" component={HomePageActivity} />

              {/* ProfileView */}
              <Stack.Screen name="ViewProfile" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerStyle: { backgroundColor: "black" }, headerShadowVisible: false, headerTransparent: true, headerTintColor: "#97ADB6" }} component={ViewProfileImage} />

              {/* Chat Support Ai Bot. */}
              <Stack.Screen name="Support" options={{ headerShown: true ,headerTitle:()=>(<View style={{flexDirection:"row",alignItems:"center",columnGap:5}}><Avatar source={{uri:ChatbotAvatar}}/><Text > AutoBot</Text></View>), cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} component={ChatSupport} />
              {/* Settings */}
              <Stack.Screen name="settings" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,headerTitle:"Settings",headerShadowVisible:false}} component={Settings} />
              {/* Expert TabView */}
              <Stack.Screen name="Expert" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={ExpertPanel} />




            </>
          ) : (



            <Stack.Screen name="Login"
              options={{

                headerShown: true,

                header: () => (
                  <View style={{ width: "100%", height: getHeight / 10, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#fff" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}>Get Started</Text>
                    <LinearProgress variant="determinate" color={activeColor} value={progress} trackColor="#d9d9d9" style={{ width: "60%", height: 8, borderRadius: 5 }} />
                  </View>
                ),
                headerShadowVisible: false, headerTitleAlign: "center",
              }} component={AuthStack} />

          )
        }





      </Stack.Navigator>
    </NavigationContainer>
  )
}



//Main       
export default function App() {


  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

