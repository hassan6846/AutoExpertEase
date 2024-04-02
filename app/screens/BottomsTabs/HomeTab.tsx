import { StyleSheet, View } from "react-native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const HomeStack = createStackNavigator()

//imports modules
import { Avatar, Text, Icon } from "@rneui/themed"
import { AvatarSrc } from "../../constants/ImagesConstants"
//utils

import { getHeight } from "../../utils/GetDimension"
//nested childs
import Home from "../Stacks/Home/InitialRoute"
import ViewVideos from "../Stacks/Home/nested/ViewVideos"
import SearchVideoPage from "../Stacks/Home/nested/SearchVideoPage"
import PostVideo from "../Stacks/Home/nested/PostVideo"
import SearchResultVideo from "../Stacks/Home/nested/SearchResultVideo"
import RentalCar from "../Stacks/Home/nested/RentalCar"
const HomeTab = () => {

  return (
    <HomeStack.Navigator initialRouteName="HomeInital" >
      <HomeStack.Screen options={{ headerRight: () => (<Avatar avatarStyle={{ borderRadius: 20 }} containerStyle={{ marginRight: 12 }} source={{ uri: AvatarSrc }} />), headerTitle: "Welcome", headerStyle: { height: getHeight / 9 } }} component={Home} name="HomeInital" />
      <HomeStack.Screen options={{

        headerTitle: "",
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>

            <Icon containerStyle={{ marginRight: 10 }} type="material" name="search" />

            <Icon containerStyle={{ marginRight: 10 }} type="material" name="notifications" />
            <Icon containerStyle={{ marginRight: 10 }} type="material" name="add" />
</View>),
cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} name="viewvideo" component={ViewVideos} />
      {/* SearchPage */}
      <HomeStack.Screen name="searchvideo" component={SearchVideoPage} />
      <HomeStack.Screen name="postvideo" component={PostVideo} />
      <HomeStack.Screen name="videoresults" component={SearchResultVideo} />
      <HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} name="rentalcars" component={RentalCar}/>


    </HomeStack.Navigator>
  )
}
// styleSheet
const Styles = StyleSheet.create({

})
export default HomeTab