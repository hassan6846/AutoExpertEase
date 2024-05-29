import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Messages from "../Stacks/Messages/InitialRoute"
import Notifications from "../Stacks/Messages/Notifications"
import ThemeProviderColors from "../../provider/ThemeProvider"

const Tabs = createMaterialTopTabNavigator()

const ExploreTab = () => {
    return (
        <Tabs.Navigator screenOptions={{
            
            tabBarIndicatorStyle: { backgroundColor: ThemeProviderColors.Light.Primary }
        }}>
            <Tabs.Screen name="Messages" component={Messages} />
            <Tabs.Screen name="notification" component={Notifications} />
        </Tabs.Navigator>
    )
}

export default ExploreTab