import { View } from "react-native"
import { Text } from "@rneui/themed"
// Ecommerce PageStack Navigator
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"

const EcommerceStack = createStackNavigator()
// import other Child Component pages
/**
 *  ---EcommerceTab
 *      -SearchPage
 *       -CartPage
 *        -CategoryPage
 *         -NearbyPage
 *          -SingleProductViewPage.
 *
 *  
 */
// main Parent Component
import ShopInitalRoute from "../Stacks/Shop/InitialRoute_Shop"
// Child Components
import SearchPage from "../Stacks/Shop/nested/ProductSearchPage"
import CartPage from "../Stacks/Shop/nested/CartPage"
import ShopCategory from "../Stacks/Shop/nested/ShopCategory"

// ScreenHeaderConfigs
import StackNavigatorConfigs from "../../configs/StackNavigatorConfigs"
const EcommerceTab = () => {
  return (
    <EcommerceStack.Navigator initialRouteName="ShopContainer" >
      <EcommerceStack.Screen name="ShopContainer"

        options={{
          title: StackNavigatorConfigs.ShopStack.title,

        }}
        component={ShopInitalRoute} />
      {/* SearchPage */}
      <EcommerceStack.Screen name="SearchPage" component={SearchPage} />
      {/*CartPage  */}
      <EcommerceStack.Screen name="Cart" component={CartPage} />
      {/* ShopCategory */}
      <EcommerceStack.Screen name="Category" component={ShopCategory} />
    </EcommerceStack.Navigator>
  )
}

export default EcommerceTab