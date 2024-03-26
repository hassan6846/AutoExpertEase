import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const SellerTabs = createBottomTabNavigator()



import TabsConfigs from "../../configs/TabsConfigs"


//nested
import AllProducts from "./nested/AllProducts"
import Dashboard from "./nested/Dashboard"
import Orders from "./nested/Orders"
import EditProduct from "./nested/EditProduct"
import UploadProduct from "./nested/UploadProduct"

const SellerTabsNavigator = () => {

    <SellerTabs.Navigator>
         <SellerTabs.Screen name="sellerdashboard" component={Dashboard} />
        <SellerTabs.Screen name="allproducts" component={AllProducts} />
        <SellerTabs.Screen name="orders" component={Orders} />
        <SellerTabs.Screen name="editproduct" component={EditProduct} />
        <SellerTabs.Screen name="uploadproduct" component={UploadProduct} />
    </SellerTabs.Navigator>

}
export default SellerTabsNavigator