import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Login = createStackNavigator();

//Screen Inside login page only....
import PhoneLogin from "./nested/PhoneScreen";
import PasswordScreen from "./nested/PasswordScreen";
import { View } from "react-native";
import { getHeight } from "../../../utils/GetDimension";

//libraries

import { LinearProgress } from "@rneui/themed"

const LoginStack = () => {
    return (
        <Login.Navigator

            screenOptions={{
                headerShown: true,
                headerTitle: "Login",
                header: () => (
                    <View style={{ height: getHeight / 12, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#fff" }}>
                        <LinearProgress color="#E04E2F" value={0.5} trackColor="#D9D9D9" variant="determinate" style={{ width: '60%', height: 7, borderRadius: 5 }} />
                    </View>
                )
            }}
        >
            <Login.Screen name="phonelogin" options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={PhoneLogin} />
            <Login.Screen name="passlogin"  options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={PasswordScreen} />
        </Login.Navigator>
    )
}

export default LoginStack;