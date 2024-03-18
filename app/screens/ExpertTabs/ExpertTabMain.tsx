import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const ExpertTab = createBottomTabNavigator()


//child page /screens
import ExpertHailingPage from "./nested/ExpertHailingPage"
import ExpertIncomeHistory from "./nested/ExpertIncomeHistory"
import ExpertPayments from "./nested/ExpertPayments"
import ExpertRatings from "./nested/ExpertRatings"

//configs 
import ThemeProviderColors from "../../provider/ThemeProvider"
import { BottomNavigator_Height } from "../../configs/TabNavigatorConfigs"



//icons
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
            <ExpertTab.Screen name="ExpertHailingPage" options={{ headerShown: false }} component={ExpertHailingPage} />
            <ExpertTab.Screen name="ExpertIncomeHistory" options={{ headerShown: false }} component={ExpertIncomeHistory} />
            <ExpertTab.Screen name="ExpertPayments" options={{ headerShown: false }} component={ExpertPayments} />
            <ExpertTab.Screen name="ExpertRatings" options={{ headerShown: false }} component={ExpertRatings} />
        </ExpertTab.Navigator>
    )
}
export default ExpertPanel