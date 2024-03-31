import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"

const Register = createStackNavigator();

//Register nested screens
import EnterName from "./nested/EnterName";
import EnterPhone from "./nested/EnterPhone";
import EnterEmail from "./nested/EnterEmail";
import SetPassword from "./nested/SetPassword";
import VerifyOtp from "./nested/VerifyOtp";
import VerifyEmailOtp from "./nested/VerifyEmailOtp";

import AccountCreationSucess from "../AccountCreationSucess";

const RegisterStack = () => {
  return (
    <Register.Navigator
        
    screenOptions={{
      headerShown:true,
      headerTitle:"Register"
  }}
    >
      <Register.Screen name="setname" component={EnterName} />
      <Register.Screen name="setphone" component={EnterPhone} />
      <Register.Screen name="setemail" component={EnterEmail} />
      <Register.Screen name="setpassword" component={SetPassword} />
      <Register.Screen name="verifyotp" component={VerifyOtp} />
      <Register.Screen name="verifyemailotp" component={VerifyEmailOtp} />

    </Register.Navigator>
  )
}

export default RegisterStack