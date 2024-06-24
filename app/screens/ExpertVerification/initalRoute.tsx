import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import SelectRole from "./nested/SelectRole";
import ExpertVerification from "./nested/ExpertVerification/ExpertVerification";
import CarRentalVerification from "./nested/ExpertVerification/CarRentalVerification";
import VendorVerfication from "./nested/ExpertVerification/VendorVerfication";

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
                options={{ title: "Expert/Mechanic Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }}
                name="expertverification"
                component={ExpertVerification}
            />

            {/* Rental Verification */}
            <Verify.Screen
                name="rentalverification"
                component={CarRentalVerification}
                options={{ title: "Rental Car Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }}
            />
            {/* Car Posting Verification. */}
  
            <Verify.Screen
            name="vendorverification"
            component={VendorVerfication}
            options={{ title: "Vendor Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }}/>


        </Verify.Navigator>
    );
}

export default VerficationStack;
