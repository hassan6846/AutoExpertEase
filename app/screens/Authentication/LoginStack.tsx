import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Auth = createStackNavigator()
//Different Screen Within
import LoginPage from "./LoginScreen"
import OtpPage from "./OtpScreen"
import EmailVerfication from "./EmailVerfication"
import AccountCreationSucess from "./AccountCreationSucess"

const AuthStack = () => {
    return (
        <Auth.Navigator >
            {/* phone Auth */}
            <Auth.Screen options={{headerShown:false,}}name="AuthPhone"  component={LoginPage} />


             {/* Enter Otp */}
             <Auth.Screen 
              options={{ headerShown:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,  }}  name="AuthOtp"component={OtpPage}  />


             {/* Email Verification */}
             <Auth.Screen  name="AuthEmail" component={AccountCreationSucess} options={{headerShown:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}/>


        </Auth.Navigator>
    )
}
export default AuthStack