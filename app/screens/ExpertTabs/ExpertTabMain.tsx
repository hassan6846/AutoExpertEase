import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const ExpertTab = createBottomTabNavigator()
import ThemeProviderColors from "../../provider/ThemeProvider"

//child page /screens
import ExpertHailingPage from "./nested/ExpertHailingPage"
import ExpertIncomeHistory from "./nested/ExpertIncomeHistory"
import ExpertPayments from "./nested/ExpertPayments"
import ExpertRatings from "./nested/ExpertRatings"






const ExpertPanel = () => {
    return (
        <ExpertTab.Navigator 
        screenOptions={{
            tabBarStyle: {
                backgroundColor: ThemeProviderColors.Light.Primary,
            },
           
        }}
        >
           <ExpertTab.Screen name="ExpertHailingPage" component={ExpertHailingPage} />
            <ExpertTab.Screen name="ExpertIncomeHistory" component={ExpertIncomeHistory} />
            <ExpertTab.Screen name="ExpertPayments" component={ExpertPayments} />
            <ExpertTab.Screen name="ExpertRatings" component={ExpertRatings} />
        </ExpertTab.Navigator>
    )
}
export default ExpertPanel