import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Login = createStackNavigator();

//Screen Inside login page only....
import PhoneLogin from "./nested/PhoneScreen";
import PasswordScreen from "./nested/PasswordScreen";


//libraries and imports
import { View } from "react-native";
import { getHeight } from "../../../utils/GetDimension";
import { LinearProgress } from "@rneui/themed"
import { useSelector } from "react-redux";

const LoginStack = () => {
    const progress=useSelector((state:any)=>state.auth.Progress)
    const color=useSelector((state:any)=>state.auth.HeaderColor)
    return (
        <Login.Navigator

            screenOptions={{
                headerShown: true,
                headerTitle: "Login",
                header: () => (
                    <View style={{ height: getHeight / 12, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#fff" }}>
                        <LinearProgress color={color} value={progress} trackColor="#D9D9D9" variant="determinate" style={{ width: '60%', height: 7, borderRadius: 5 }} />
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