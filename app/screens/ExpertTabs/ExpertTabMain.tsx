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
            <ExpertTab.Screen  name="ExpertHailingPage" options={{title:"Tasks", headerShown: true,tabBarIcon:TabsConfigs.ExpertRequest.Svg,headerTitleAlign:"center",headerLeft:()=>(<></>)}} component={ExpertHailingPage} />
            <ExpertTab.Screen name="ExpertIncomeHistory" options={{ title:"Income",headerShown: true,tabBarIcon:TabsConfigs.Income.Svg,headerTitleAlign:"center",headerLeft:()=>(<></>) }} component={ExpertIncomeHistory} />
            <ExpertTab.Screen name="ExpertRatings" options={{title:"Ratings", headerShown: true,tabBarIcon:TabsConfigs.Ratings.Svg,headerTitleAlign:"center",headerLeft:()=>(<></>) }} component={ExpertRatings} />
            <ExpertTab.Screen name="ExpertPayments" options={{ title:"Top-ups",headerShown: true,tabBarIcon:TabsConfigs.Me.Svg ,headerTitleAlign:"center",headerLeft:()=>(<></>)}} component={ExpertPayments} />

        </ExpertTab.Navigator>
    )
}
export default ExpertPanel