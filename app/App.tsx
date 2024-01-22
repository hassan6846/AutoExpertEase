//module and Library
import { TouchableOpacity, View } from "react-native"
import { Icon } from "@rneui/themed"
//Utils or localImports or Configs

//navigator (react navigation)
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
//pages or Screens

import LoginPage from "./screens/LoginScreen"
import PrivacyPolicy from "./screens/PrivacyPolicy"


//Root App Router...
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      >
        {/* LoginScreen */}
        <Stack.Screen name="login" component={LoginPage}
          options={{
          
            title: "Get Started",
            
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerLeft: () => (
              // Custom component for the back arrow
              // You can use TouchableOpacity for better touch feedback
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
{/* Privacy Policy */}
<Stack.Screen name="privacypolicy" component={PrivacyPolicy}
          options={{
            title: "Privacy & Policy",
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerLeft: () => (
              // Custom component for the back arrow
              // You can use TouchableOpacity for better touch feedback
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

