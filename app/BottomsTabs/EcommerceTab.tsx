import { Pressable, View } from "react-native"
import { Icon, Badge } from "@rneui/themed"
// Navigation
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
const EcommerceStack = createStackNavigator()
//State

// Components

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
import ShopInitalRoute from "../screens/Stacks/Shop/InitialRoute_Shop"
import CartPage from "../screens/Stacks/Shop/nested/CartPage"
import ShopCategory from "../screens/Stacks/Shop/nested/ShopCategory"
import Search from "../screens/Stacks/Shop/nested/SearchPage"
import ProductViewPage from "../screens/Stacks/Shop/nested/ProductViewPage"
import CategoryTabs from "../screens/Stacks/Shop/nested/AllCategory/initialRoute"
import Wallet from "../screens/Stacks/Shop/nested/Wallet"
import Checkout from "../screens/Stacks/Shop/nested/Checkout"
//State

import { useDispatch, useSelector } from "react-redux"
import { ClearCart } from "../slices/CartSlice"

const EcommerceTab = ({ navigation }: { navigation: any }) => {
  const Items = useSelector((state: any) => state.cart.items)

  const dispatch = useDispatch()
  return (
    <EcommerceStack.Navigator initialRouteName="ShopContainer" >

      {/* Inital Route */}
      <EcommerceStack.Screen
        name="ShopContainer"

        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", columnGap: 5, marginRight: 13 }}>
              {/* SearchBar */}
              <Pressable style={({ pressed }) => [
                { position: "relative", padding: 3, borderRadius: 20 },
                {
                  backgroundColor: pressed ? "#d9d9d9" : '#fff'
                }
              ]}
                onPress={() => navigation.navigate('Search')}
              >
                <Icon size={25} color="#5F6368" name="search" type="material" />
              </Pressable>




              {/* Cart */}
              <Pressable onPress={() => navigation.navigate('Cart')}
                style={({ pressed }) => [
                  { position: "relative", padding: 3, borderRadius: 20 },
                  {
                    backgroundColor: pressed ? "#d9d9d9" : '#fff'
                  }
                ]}>
                <Badge containerStyle={{ position: "absolute", right: 0, top: -7, left: 10, zIndex: 99 }} value={Items.length} status="error" />
                <Icon size={25} color="#5F6368" name="shopping-cart" type="material" />
              </Pressable>
              {/* Wallet */}
              <Pressable onPress={() => navigation.navigate('wallet')}
                style={({ pressed }) => [
                  { position: "relative", padding: 3, borderRadius: 20 },
                  {
                    backgroundColor: pressed ? "#d9d9d9" : '#fff'
                  }
                ]}>
                <Badge containerStyle={{ position: "absolute", right: 0, top: -7, left: 10, zIndex: 99 }} value="0" status="error" />
                <Icon size={25} color="#5F6368" name="account-balance-wallet" type="material" />
              </Pressable>
            </View>
          )
        }}
        component={ShopInitalRoute}

      />

      {/* SearchPage */}
      <EcommerceStack.Screen
        name="Search"

        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          gestureEnabled: true,
          headerTitle: "Search Products",
          headerTitleAlign: "center"

        }}
        component={Search}



      />


      {/*CartPage  */}
      <EcommerceStack.Screen
        name="Cart"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          headerShadowVisible: false,
          headerRight: () => (
            <Icon iconStyle={{ padding: 5, borderRadius: 60 }} containerStyle={{ marginRight: 10 }} onPress={() => dispatch(ClearCart())} // Ensure the action is imported correctly
              color="#97ADB6" name="delete" type="material" />
          )
        }}
        component={CartPage} />

      {/* ShopCategory */}
      <EcommerceStack.Screen
        name="Category"
        options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
        component={ShopCategory} />
      {/* Single PRoduct View */}
      <EcommerceStack.Screen

        name="view"
        options={{

          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", columnGap: 5, marginRight: 13 }}>
              {/* SearchBar */}
              <Pressable style={({ pressed }) => [
                { position: "relative", padding: 3, borderRadius: 20 },
                {
                  backgroundColor: pressed ? "#d9d9d9" : '#fff'
                }
              ]}
                onPress={() => navigation.navigate('Search')}
              >
                <Icon size={25} color="#5F6368" name="search" type="material" />
              </Pressable>




              {/* Cart */}
              <Pressable onPress={() => navigation.navigate('Cart')}
                style={({ pressed }) => [
                  { position: "relative", padding: 3, borderRadius: 20 },
                  {
                    backgroundColor: pressed ? "#d9d9d9" : '#fff'
                  }
                ]}>
                <Badge containerStyle={{ position: "absolute", right: 0, top: -7, left: 10, zIndex: 99 }} value={Items.length} status="error" />
                <Icon size={25} color="#5F6368" name="shopping-cart" type="material" />
              </Pressable>

            </View>
          )

        }}

        component={ProductViewPage} />

      <EcommerceStack.Screen options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardShadowEnabled: false,


        headerShadowVisible: false,
        title: "All Category"
      }} name="allcategory" component={CategoryTabs} />

      <EcommerceStack.Screen options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardShadowEnabled: false,
        headerTitleAlign: "center",
        headerShadowVisible: false,
        title: "Wallet"
      }} name="wallet" component={Wallet} />


      {/* Checkout */}
      <EcommerceStack.Screen options={{
        title: "Enter Order Details",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardShadowEnabled: false,
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerLeft: () => (
          <></>
        )

      }} component={Checkout} name="checkout" />
    </EcommerceStack.Navigator>
  )
}

export default EcommerceTab