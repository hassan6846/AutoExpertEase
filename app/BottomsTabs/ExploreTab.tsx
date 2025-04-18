import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
const Tabs = createMaterialTopTabNavigator()

import Messages from "../screens/Stacks/Messages/InitialRoute"
import Notifications from "../screens/Stacks/Messages/Notifications"


//utils
import ThemeProviderColors from "../provider/ThemeProvider"


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