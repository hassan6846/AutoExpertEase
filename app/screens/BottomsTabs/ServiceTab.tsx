// Navigation
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const ServiceStack = createStackNavigator()



// Nested Child components
import AutoFixInitalRoute from "../Stacks/Auto/InitalRoute"
import TaskLocation from "../Stacks/Auto/nested/TaskLocation"
import TaskDescription from "../Stacks/Auto/nested/TaskDescription"
import SimulatorPage from "../Stacks/Auto/nested/SimulatorPage"
import HailingPage from "../Stacks/Auto/nested/HailingPage"

// Main  Component
const ServiceTab = () => {
    return (
        <ServiceStack.Navigator >
            {/* Inital Route */}
            <ServiceStack.Screen name="inital_service" component={AutoFixInitalRoute} />
            {/* Task Location */}
            <ServiceStack.Screen name="task_location"
                options={{
                    headerShadowVisible: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}

                component={TaskLocation} />
            {/* Task Description */}
            <ServiceStack.Screen name="task_description" options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={TaskDescription} />
            {/* Simulator Page */}
            <ServiceStack.Screen name="simulator_page" component={SimulatorPage} />


            {/* Hailing Page */}
            <ServiceStack.Screen name="hailing_page" component={HailingPage} />

        </ServiceStack.Navigator>
    )
}
export default ServiceTab