import { View } from "react-native"
import { Icon } from "@rneui/themed"
// Navigation
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
const EcommerceStack = createStackNavigator()
import StackNavigatorConfigs from "../../configs/StackNavigatorConfigs"

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

//Nested Child Components
import ShopInitalRoute from "../Stacks/Shop/InitialRoute_Shop"
import CartPage from "../Stacks/Shop/nested/CartPage"
import ShopCategory from "../Stacks/Shop/nested/ShopCategory"
import Search from "../Stacks/Shop/nested/SearchPage"

const EcommerceTab = ({ navigation }: { navigation: any }) => {
  return (
    <EcommerceStack.Navigator initialRouteName="ShopContainer" >

      {/* Inital Route */}
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
      <EcommerceStack.Screen
        name="Cart"
        options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
        component={CartPage} />

      {/* ShopCategory */}
      <EcommerceStack.Screen
        name="Category"
        options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
        component={ShopCategory} />

    </EcommerceStack.Navigator>
  )
}

export default EcommerceTab