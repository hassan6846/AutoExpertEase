import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Register = createStackNavigator();
//Register nested screens
import EnterName from "./nested/EnterName";



import VerifyEmailOtp from "./nested/VerifyEmailOtp";

//library
//utils

const RegisterStack = () => {

  return (
    <Register.Navigator

      screenOptions={{
        headerShown: true,
        headerTitle: "Register",


      }}
    >
      <Register.Screen name="setname" component={EnterName} />
      <Register.Screen name="verifyemailotp" options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={VerifyEmailOtp} />
    </Register.Navigator>
  )
}

export default RegisterStack