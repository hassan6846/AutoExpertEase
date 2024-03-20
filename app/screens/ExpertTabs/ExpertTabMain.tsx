import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const ExpertTab = createBottomTabNavigator()


//child page /screens
import ExpertHailingPage from "./nested/ExpertHailingPage"
import ExpertIncomeHistory from "./nested/ExpertIncomeHistory"
import ExpertPayments from "./nested/ExpertPayments"
import ExpertRatings from "./nested/ExpertRatings"

//configs 

import { BottomNavigator_Height } from "../../configs/TabNavigatorConfigs"


//components
import TabsConfigs from "../../configs/TabsConfigs"

const ExpertPanel = () => {
    return (
        <ExpertTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    height: BottomNavigator_Height,
                }
            }}
        >
            <ExpertTab.Screen  name="ExpertHailingPage" options={{ headerShown: false,tabBarIcon:TabsConfigs.ExpertRequest.Svg}} component={ExpertHailingPage} />
            <ExpertTab.Screen name="ExpertIncomeHistory" options={{ headerShown: false,tabBarIcon:TabsConfigs.Income.Svg }} component={ExpertIncomeHistory} />
            <ExpertTab.Screen name="ExpertRatings" options={{ headerShown: false,tabBarIcon:TabsConfigs.Ratings.Svg }} component={ExpertRatings} />
            <ExpertTab.Screen name="ExpertPayments" options={{ headerShown: false,tabBarIcon:TabsConfigs.Me.Svg }} component={ExpertPayments} />

        </ExpertTab.Navigator>
    )
}
export default ExpertPanel