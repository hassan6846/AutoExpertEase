import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Login = createStackNavigator();

//Screen Inside login page only....
import PhoneLogin from "./nested/PhoneScreen";
import PasswordScreen from "./nested/PasswordScreen";

//libraries



const LoginStack = () => {
    return (
        <Login.Navigator
    
            screenOptions={{
                headerShown:true,
                headerTitle:"Login"
            }}
        >
            <Login.Screen  name="phonelogin" component={PhoneLogin} />
            <Login.Screen name="passlogin" component={PasswordScreen} />
        </Login.Navigator>
    )
}

export default LoginStack;