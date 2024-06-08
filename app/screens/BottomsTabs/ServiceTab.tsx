// Navigation
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const ServiceStack = createStackNavigator()



// Nested Child components
import AutoFixInitalRoute from "../Stacks/Auto/InitalRoute"
import TaskLocation from "../Stacks/Auto/nested/TaskLocation"
import TaskDescription from "../Stacks/Auto/nested/TaskDescription"
import SimulatorPage from "../Stacks/Auto/nested/SimulatorPage"
import HailingPage from "../Stacks/Auto/nested/HailingPage"
import ChatExpert from "../Stacks/Auto/nested/ChatExpert"
import LocationSearch from "../Stacks/Auto/nested/LocationSearch"

// Main  Component
const ServiceTab = () => {
    return (
        <ServiceStack.Navigator >
            {/* Inital Route */}
            <ServiceStack.Screen name="inital_service" options={{ headerShadowVisible: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerTitle: "" }} component={AutoFixInitalRoute} />
            {/* Task Location */}
            <ServiceStack.Screen name="task_location" options={{ headerTitleAlign: "center", title: " Service Location", headerShadowVisible: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerLeft: () => (<></>) }} component={TaskLocation} />
            {/* Task Description */}
            <ServiceStack.Screen name="TaskDescription" options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,headerTitleAlign:"center",title:"Enter Description", headerLeft: () => (<></>)}} component={TaskDescription} />
            {/* Location Seach from api */}
            <ServiceStack.Screen name="querylocation" options={{ headerTitleAlign: "center", headerTitle: "Search Location", cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerLeft: () => (<></>) }} component={LocationSearch} />


            {/* Hailing Page */}
            <ServiceStack.Screen options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,headerTitleAlign:"center",title:"Select Offers",headerLeft: () => (<></>)}} name="hailing_page" component={HailingPage} />
            {/* Simulator Page */}
            <ServiceStack.Screen options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} name="simulator_page" component={SimulatorPage} />

            <ServiceStack.Screen options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} name="chat_expert" component={ChatExpert} />



        </ServiceStack.Navigator>
    )
}
export default ServiceTab