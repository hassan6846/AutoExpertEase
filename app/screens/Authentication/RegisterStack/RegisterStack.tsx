import { View } from "react-native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const Register = createStackNavigator();
//Register nested screens
import EnterName from "./nested/EnterName";



import VerifyEmailOtp from "./nested/VerifyEmailOtp";

//library
import { LinearProgress } from '@rneui/themed'
//utils
import { getHeight } from "../../../utils/GetDimension";
import { useSelector } from "react-redux";

const RegisterStack = () => {
  const progress=useSelector((state:any)=>state.auth.progress)

  return (
    <Register.Navigator

      screenOptions={{
        headerShown: true,
        headerTitle: "Register",
        header: () => (
          <View style={{ height: getHeight / 12, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#fff" }}>
            <LinearProgress color="#E04E2F" value={progress} trackColor="#D9D9D9" variant="determinate" style={{ width: '60%', height: 7, borderRadius: 5 }} />
          </View>
        )
      }}
    >
      <Register.Screen name="setname" component={EnterName} />
      <Register.Screen name="verifyemailotp" options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={VerifyEmailOtp} />
    </Register.Navigator>
  )
}

export default RegisterStack