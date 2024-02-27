// Navigation
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const ServiceStack = createStackNavigator()



// Nested Child components
import AutoFixInitalRoute from "../Stacks/Auto/InitalRoute"


// Main  Component
const ServiceTab = () => {
    return (
        <ServiceStack.Navigator>
            {/* Inital Route */}
            <ServiceStack.Screen name="inital_service" component={AutoFixInitalRoute} />
        </ServiceStack.Navigator>
    )
}
export default ServiceTab