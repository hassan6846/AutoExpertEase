import { Pressable, View, Dimensions } from "react-native"
const height = Dimensions.get("screen").height
import { Icon, SearchBar, Text, Badge } from "@rneui/themed"
// Navigation
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
const EcommerceStack = createStackNavigator()


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
import ShopInitalRoute from "../Stacks/Shop/InitialRoute_Shop"
import CartPage from "../Stacks/Shop/nested/CartPage"
import ShopCategory from "../Stacks/Shop/nested/ShopCategory"
import Search from "../Stacks/Shop/nested/SearchPage"
import ProductViewPage from "../Stacks/Shop/nested/ProductViewPage"
import SearchResults from "../Stacks/Shop/nested/SearchResults"
import CategoryTabs from "../Stacks/Shop/nested/AllCategory/initialRoute"

const EcommerceTab = ({ navigation }: { navigation: any }) => {
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

              {/* Notification */}
              <Pressable style={({ pressed }) => [
                { position: "relative", padding: 3, borderRadius: 20 },
                {
                  backgroundColor: pressed ? "#d9d9d9" : '#fff'
                }
              ]}>
                <Badge containerStyle={{ position: "absolute", right: 0, top: 0, left: 10, zIndex: 99 }} status="error" />
                <Icon size={25} color="#5F6368" name="notifications" type="material" />
              </Pressable>


              {/* Cart */}
              <Pressable onPress={() => navigation.navigate('Cart')}
                style={({ pressed }) => [
                  { position: "relative", padding: 3, borderRadius: 20 },
                  {
                    backgroundColor: pressed ? "#d9d9d9" : '#fff'
                  }
                ]}>
                <Badge containerStyle={{ position: "absolute", right: 0, top: -7, left: 10, zIndex: 99 }} value="5" status="error" />
                <Icon size={25} color="#5F6368" name="shopping-cart" type="material" />
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
      {/* Search Results */}
      <EcommerceStack.Screen
        name="searchresults"
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureEnabled: true,
          headerShadowVisible: false
        }}

        component={SearchResults} />

      {/*CartPage  */}
      <EcommerceStack.Screen
        name="Cart"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          headerShadowVisible: false
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
                <Badge containerStyle={{ position: "absolute", right: 0, top: -7, left: 10, zIndex: 99 }} value="5" status="error" />
                <Icon size={25} color="#5F6368" name="shopping-cart" type="material" />
              </Pressable>

            </View>
          )

        }}

        component={ProductViewPage} />
        <EcommerceStack.Screen name="category" component={CategoryTabs}/>
    </EcommerceStack.Navigator>
  )
}

export default EcommerceTab