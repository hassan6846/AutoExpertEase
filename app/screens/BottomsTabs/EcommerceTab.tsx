import { View } from "react-native"
import { Icon } from "@rneui/themed"
// Ecommerce PageStack Navigator
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
import StackNavigatorConfigs from "../../configs/StackNavigatorConfigs"
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
import CartPage from "../Stacks/Shop/nested/CartPage"
import ShopCategory from "../Stacks/Shop/nested/ShopCategory"
import Search from "../Stacks/Shop/nested/SearchPage"

const EcommerceTab = ({ navigation }: { navigation: any }) => {
  return (
    <EcommerceStack.Navigator initialRouteName="ShopContainer" >
      <EcommerceStack.Screen name="ShopContainer"
        options={{
          title: StackNavigatorConfigs.ShopStack.title,
          headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", columnGap: 5, marginRight: 13 }}>
              <Icon onPress={() => navigation.navigate('Search')} size={25} color="#5F6368" name="search" type="material" />
              <Icon size={25} color="#5F6368" name="notifications" type="material" />
              <Icon onPress={() => navigation.navigate('Cart')} size={25} color="#5F6368" name="shopping-cart" type="material" />
            </View>
          )
        }}
        component={ShopInitalRoute} />
      {/* SearchPage */}
      <EcommerceStack.Screen
        name="Search"
        options={{ cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid }}
        component={Search} />
      {/*CartPage  */}
      <EcommerceStack.Screen options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} name="Cart" component={CartPage} />
      {/* ShopCategory */}
      <EcommerceStack.Screen options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} name="Category" component={ShopCategory} />
    </EcommerceStack.Navigator>
  )
}

export default EcommerceTab