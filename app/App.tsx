//module and Library


//Utils or localImports


//navigator (react navigation)
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
//pages or Screens

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* EnrollScreen */}
        <Stack.Screen name="" component={ } />
        {/* LoginScreen Phone Number */}
        <Stack.Screen name="" component={ } />
        {/* Otp Screen */}
        <Stack.Screen name="" component={ } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

