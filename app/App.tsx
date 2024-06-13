import "react-native-gesture-handler"
import { View } from "react-native"
import { useEffect } from "react"
///sdks
import { StatusBar } from "expo-status-bar"
import {clearMessages} from "./slices/ChatBotSlice"
import { Provider, useSelector,useDispatch } from "react-redux"

//libraries /utils
import {  Text, Avatar,Icon } from "@rneui/themed"

import { ChatbotAvatar } from "./constants/ImagesConstants"
//TabNavigator 
import { NavigationContainer } from "@react-navigation/native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()//Stack Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const Tab = createBottomTabNavigator()

// tabs Configs
import TabsConfigs from "./configs/TabsConfigs"
import { BottomNavigator_Height } from "./configs/TabNavigatorConfigs"
//Stack Navigator







//TabsMain
import HomeTab from "./screens/BottomsTabs/HomeTab"
import EcommerceTab from "./screens/BottomsTabs/EcommerceTab"
import ServiceTab from "./screens/BottomsTabs/ServiceTab"
import ProfileTab from "./screens/BottomsTabs/ProfileTab"
import ExploreTab from "./screens/BottomsTabs/ExploreTab"

//Features


import ViewProfileImage from "./screens/Stacks/UserProfile/-nested/ViewProfileImage"
import ChatSupport from "./screens/Stacks/UserProfile/-nested/Help&Support/ChatSupport"
import Settings from "./screens/Stacks/UserProfile/-nested/Settings/Settings"
import SelectLanguage from "./screens/pages/Localization/SelectLanguage"
import PrivacyPolicy from "./screens/pages/PrivacyPolicy/PrivacyPolicy"
import MessageView from "./screens/Stacks/Messages/nested/MessageView"

//stacks and panels
import AuthStack from "./screens/Authentication/AuthStack"
import ExpertPanel from "./screens/ExpertTabs/ExpertTabMain"
import VerficationStack from "./screens/ExpertVerification/initalRoute"
import SellerTabsNavigator from "./screens/SellerTabs/Inital"

import ProfilePage from "./screens/pages/ProfilePage/ProfilePage"
import InitalOrders from "./screens/pages/OrderTracking/initial"
import AccessLocation from "./screens/pages/Permissions/AccessLocation"
import BookingInital from "./screens/pages/Bookings/inital"
//redux




import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"
let presistor=persistStore(Store)
import Store from "./store/Store"
import upload from "./screens/uploadvideo/upload"
//HomePage 
//Always Add Pages Inside Only Contains Page After logged in or Authentication Ok👍
function HomePageActivity() {

  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: BottomNavigator_Height, }, tabBarShowLabel: false,}} >
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








const Main = () => {
  const dispatch=useDispatch()
  const Auth=useSelector((state:any)=>state.auth.Isauth)



  //useEffect to CHeck on Appload
  useEffect(() => {


  })

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          Auth ? (
            <>
            <Stack.Screen name="upload" component={upload}/>
              <Stack.Screen name="Main" component={HomePageActivity} />
              {/* ProfileView */}
              <Stack.Screen name="ViewProfile" options={{cardStyle:{backgroundColor:"black"},headerTitle:"", headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerStyle: { backgroundColor: "black" }, headerShadowVisible: false, headerTransparent: true, headerTintColor: "#97ADB6" }} component={ViewProfileImage}/>
              {/* TrackOrders */}
              <Stack.Screen name="orders" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShadowVisible: false,title:"Orders Detail"}} component={InitalOrders} />

              {/* Chat Support Ai Bot. */}
              <Stack.Screen name="Support" options={{ headerShown:true,headerRight:()=>(<Icon name="delete" onPress={()=>dispatch(clearMessages())} type="material" containerStyle={{marginRight:10}}/>),headerTitle: () => (<View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}><Avatar overlayContainerStyle={{ borderRadius: 10 }} source={{ uri: ChatbotAvatar }} /><Text > AutoBot</Text></View>), cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} component={ChatSupport} />
              {/* Settings */}
              <Stack.Screen name="settings" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerTitle: "Settings", headerShadowVisible: false }} component={Settings} />
              {/* Langauge */}
              <Stack.Screen name="language" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerTitle: "Change Language", headerShadowVisible: false }} component={SelectLanguage} />
              {/* Expert TabView */}
              <Stack.Screen name="bookings" options={{headerShown:true,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerShadowVisible:false,title:"Bookings"}} component={BookingInital}/>
              <Stack.Screen name="Expert" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={ExpertPanel} />
              {/* Expert Verifcation Tab */}

              <Stack.Screen name="expertverify"  options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={VerficationStack} />

              {/* Seller Tab */}
              <Stack.Screen name="seller" options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={SellerTabsNavigator} />
              <Stack.Screen name="viewAccount" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={ProfilePage} />
             <Stack.Screen name="messageview" options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
             }}  component={MessageView}/>

            </>
          ) : (

            <>

              <Stack.Screen name="Auth"
                options={{
                  headerShown: false,
                  headerShadowVisible: false, headerTitleAlign: "center",
                }} component={AuthStack} />

              <Stack.Screen name="privacypolicy" options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PrivacyPolicy} />
              <Stack.Screen name="accesspermissions" options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={PrivacyPolicy} />

            </>

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
      <PersistGate loading={null} persistor={presistor}>
      <StatusBar style="auto" />
      <Main />
      </PersistGate>
    </Provider>
  );
}

