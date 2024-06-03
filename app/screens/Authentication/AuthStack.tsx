import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Auth = createStackNavigator()
//Different Screen Within
import LoginStack from "./LoginStack/LoginStack"
import RegisterStack from "./RegisterStack/RegisterStack"

const AuthStack = () => {
    return (
        <Auth.Navigator
    
        >
            <Auth.Screen name="LoginStack"  component={LoginStack} options={{ headerShown: false }} />
            <Auth.Screen name="RegisterStack"  component={RegisterStack} options={{ headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }} />
        </Auth.Navigator>
    )
}
export default AuthStack