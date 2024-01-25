//module and Library
import { TouchableOpacity, View } from "react-native"
import "react-native-gesture-handler"
import { Icon } from "@rneui/themed"
//Utils or localImports or Configs

//navigator (react navigation)
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
//pages or Screens

import LoginPage from "./screens/LoginScreen"
import PrivacyPolicy from "./screens/PrivacyPolicy"
import SelectLanguage from "./screens/SelectLanguage"

// Animation


//Root App Router...
export default function App({ navigation }: { navigation: any }) {
  // animation

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="selectLanguage"
      >
        {/* LoginScreen */}
        <Stack.Screen name="login" component={LoginPage}
          options={{
            title: "Get Started",

            headerShadowVisible: false,
            headerTitleAlign: "center",

            headerLeft: () => (
              <TouchableOpacity activeOpacity={0.7}
                style={{ height: "auto", borderRadius: 50, shadowColor: "#97ADB6" }}
              >
                <Icon
                  size={18}
                  iconStyle={{ fontSize: 30 }}
                  name="chevron-left"
                  type="evilicon"
                  raised={true}
                />
              </TouchableOpacity>
            ),
          }}
        />
        {/* Privacy Policy */}
        <Stack.Screen name="privacypolicy" component={PrivacyPolicy}
          options={{

            title: "Privacy & Policy",
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerLeft: () => (

              <TouchableOpacity activeOpacity={0.7}

                style={{ height: "auto", borderRadius: 50, shadowColor: "#97ADB6" }}
              >
                <Icon
                  size={18}
                  iconStyle={{ fontSize: 30 }}
                  name="chevron-left"
                  type="evilicon"

                  raised={true}
                />
                {/* Use the appropriate icon library */}
              </TouchableOpacity>
            ),
          }}

        />
        {/* Settings Page */}
        <Stack.Screen name="selectLanguage" component={SelectLanguage}
          options={{
            title: "Settings",
            headerShadowVisible: false,
            headerTitleAlign: "left",

            headerLeft: () => (
              <TouchableOpacity activeOpacity={0.7}
                style={{ height: "auto", borderRadius: 50, shadowColor: "#97ADB6" }}
              >
                <Icon
                  size={18}
                  iconStyle={{ fontSize: 30 }}
                  name="chevron-left"
                  type="evilicon"
                  raised={true}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

