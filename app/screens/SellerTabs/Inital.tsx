import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const SellerTabs = createBottomTabNavigator()


//config
import DashConfig from "../../configs/DashboarConfig"
import { BottomNavigator_Height } from "../../configs/TabNavigatorConfigs"
//nested
import AllProducts from "./nested/AllProducts"
import Dashboard from "./nested/Dashboard"
import Orders from "./nested/Orders"
import UploadProduct from "./nested/UploadProduct"


const SellerTabsNavigator = () => {

    return (
        <SellerTabs.Navigator

            screenOptions={{
              
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: BottomNavigator_Height,
                }
            }}>
            <SellerTabs.Screen   options={{headerShown:true,headerTitleAlign:'center',title:"Dashboard",tabBarIcon:DashConfig.Dashboard.Icon}}   name="sellerdashboard" component={Dashboard} />
            <SellerTabs.Screen options={{headerShown:true,headerTitleAlign:'center',title:"Products",tabBarIcon:DashConfig.Products.Icon}}    name="allproducts" component={AllProducts} />
            <SellerTabs.Screen  options={{headerShown:true,headerTitleAlign:'center',title:"Orders",tabBarIcon:DashConfig.Orders.Icon}}   name="orders" component={Orders} />
            <SellerTabs.Screen options={{headerShown:true,headerTitleAlign:'center',title:"Add Products",tabBarIcon:DashConfig.AddProducts.Icon}}    name="uploadproduct" component={UploadProduct} />
        </SellerTabs.Navigator>
    )

}
export default SellerTabsNavigator