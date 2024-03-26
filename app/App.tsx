import "react-native-gesture-handler"
import { View, Dimensions } from "react-native"
const getHeight = Dimensions.get("screen").height
import * as Network from "expo-network"
import { StatusBar } from "expo-status-bar"
import { LinearProgress, Text } from "@rneui/themed"
import SplashScreen from "expo-splash-screen"

//TabNavigator 
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// tabs Configs
import TabsConfigs from "./configs/TabsConfigs"
import { BottomNavigator_Height } from "./configs/TabNavigatorConfigs"
//Stack Navigator

import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Tab = createBottomTabNavigator()// Tab Navigator
const Stack = createStackNavigator()//Stack Navigator


//TabsMain

import EcommerceTab from "./screens/BottomsTabs/EcommerceTab"
import ServiceTab from "./screens/BottomsTabs/ServiceTab"
import ProfileTab from "./screens/BottomsTabs/ProfileTab"
import ExploreTab from "./screens/BottomsTabs/ExploreTab"

//Features
import OfflinePage from "./screens/pages/OfflinePage/OfflinePage"
import Enrollment from "./screens/pages/Enrollment/Enrollment"

import ViewProfileImage from "./screens/Stacks/UserProfile/-nested/ViewProfileImage"
// Context and Providers
import ChatSupport from "./screens/Stacks/UserProfile/-nested/Help&Support/ChatSupport"
import { useEffect, useState } from "react"
import AuthStack from "./screens/Authentication/LoginStack"
import Settings from "./screens/Stacks/UserProfile/-nested/Settings/Settings"
import ExpertPanel from "./screens/ExpertTabs/ExpertTabMain"
import Store from "./store/Store"
import { RootState } from "./interface/AuthInterface"
import SelectLanguage from "./screens/pages/Localization/SelectLanguage"


//HomePage 
//Always Add Pages Inside Only Contains Page After logged in or Authentication Ok👍
function HomePageActivity() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: BottomNavigator_Height, }, tabBarShowLabel: false, }} >
      {/* Home */}
      <Tab.Screen name="Home" component={HomeTab} options={{ headerShown: false, tabBarIcon: TabsConfigs.Home.Svg, }} />

      {/* ShopTab */}
      <Tab.Screen name="Shop" component={EcommerceTab} options={{ headerShown: false, tabBarIcon: TabsConfigs.Shop.Svg, }} />

      {/* Service Tabs */}
      <Tab.Screen name="Service" component={ServiceTab} options={{ headerShown: false, tabBarIcon: TabsConfigs.Service.Svg }} />
      {/* Explore More Tabs. */}
      <Tab.Screen
        component={ExploreTab} name="Inbox" options={{ headerShadowVisible: false, tabBarIcon: TabsConfigs.Explore.Svg }} />
      {/* user ProfilePage */}
      <Tab.Screen component={ProfileTab} name="Profie" options={{ headerTitleAlign: "center", tabBarShowLabel: false, headerShown: false, tabBarIcon: TabsConfigs.Profile.Svg, }} />
    </Tab.Navigator>
  )
}

import { Provider, useSelector } from "react-redux"
import { Avatar } from "@rneui/base"
import { ChatbotAvatar } from "./constants/ImagesConstants"
import HomeTab from "./screens/BottomsTabs/HomeTab"
import VerficationStack from "./screens/ExpertVerification/initalRoute"
import SellerTabsNavigator from "./screens/SellerTabs/Inital"



const Main = () => {
  const [Auth, SetAuth] = useState(true)
  const progress = useSelector((state: RootState) => state.auth.Progress)
  const activeColor = useSelector((state: RootState) => state.auth.HeaderColor)//dynamic
  const [isConnected, setIsConnected] = useState<any | null>(false); // Initially, connection status is unknown
  //check if connected to internet or not

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
              <Stack.Screen name="Support" options={{ headerShown: true, headerTitle: () => (<View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}><Avatar overlayContainerStyle={{ borderRadius: 10 }} source={{ uri: ChatbotAvatar }} /><Text > AutoBot</Text></View>), cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} component={ChatSupport} />
              {/* Settings */}
              <Stack.Screen name="settings" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerTitle: "Settings", headerShadowVisible: false }} component={Settings} />
              {/* Langauge */}
              <Stack.Screen name="language" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerTitle: "Change Language", headerShadowVisible: false }} component={SelectLanguage} />
              {/* Expert TabView */}
              <Stack.Screen name="Expert" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={ExpertPanel} />
              {/* Expert Verifcation Tab */}

              <Stack.Screen name="expertverify" options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={VerficationStack} />

              {/* Seller Tab */}
              <Stack.Screen name="seller" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={SellerTabsNavigator} />



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

