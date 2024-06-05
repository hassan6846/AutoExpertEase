import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import SelectRole from "./nested/SelectRole";
import ExpertVerification from "./nested/ExpertVerification/ExpertVerification";


const Verify = createStackNavigator();

const VerficationStack = () => {
    return (
        <Verify.Navigator
            initialRouteName="selectrole"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Verify.Screen 
                options={{ title: "Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} 
                name="selectrole" 
                component={SelectRole} 
            />
            <Verify.Screen 
                options={{ title: "Kyc Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} 
                name="expertverification" 
                component={ExpertVerification} 
            />




        </Verify.Navigator>
    );
}

export default VerficationStack;
