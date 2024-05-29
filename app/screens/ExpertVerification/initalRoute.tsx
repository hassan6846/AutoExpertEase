import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import SelectRole from "./nested/SelectRole";
import ExpertVerification from "./nested/ExpertVerification/ExpertVerification";
import VehicleListingVerification from "./nested/VehicleListingVerification/VehicleListingVerification";
import RentalVerification from "./nested/RentalVerification/RentalVerification";
import VendorVerification from "./nested/VendorVerification/VendorVerification";
import InstructorVerification from "./nested/InstructorVerification.tsx/InstructorVerification";

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
                options={{ title: "Expert Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} 
                name="expertverification" 
                component={ExpertVerification} 
            />
            <Verify.Screen 
                options={{ title: "Vehicle Listing Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} 
                name="vehiclelistingverification" 
                component={VehicleListingVerification} 
            />
            <Verify.Screen 
                options={{ title: "Rental Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} 
                name="rentalverification" 
                component={RentalVerification} 
            />
            <Verify.Screen 
                options={{ title: "Vendor Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} 
                name="vendorverification" 
                component={VendorVerification} 
            />
            <Verify.Screen 
                options={{ title: "Instructor Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} 
                name="instructorverification" 
                component={InstructorVerification} 
            />
        </Verify.Navigator>
    );
}

export default VerficationStack;
