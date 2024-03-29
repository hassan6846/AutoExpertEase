import { StyleSheet } from "react-native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const HomeStack = createStackNavigator()

//imports modules
import { Avatar } from "@rneui/themed"
import { AvatarSrc } from "../../constants/ImagesConstants"
//nested childs
import Home from "../Stacks/Home/InitialRoute"
import ViewVideos from "../Stacks/Home/nested/ViewVideos"
import { getHeight } from "../../utils/GetDimension"



const HomeTab = () => {

  return (
    <HomeStack.Navigator initialRouteName="HomeInital" >
      <HomeStack.Screen options={{ headerRight: () => (<Avatar avatarStyle={{ borderRadius: 20 }} containerStyle={{ marginRight: 12 }} source={{ uri: AvatarSrc }} />), headerTitle: "Welcome", headerStyle: { height: getHeight / 9 } }} component={Home} name="HomeInital" />
      <HomeStack.Screen options={{
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
      }} name="viewvideo" component={ViewVideos} />
    </HomeStack.Navigator>
  )
}
// styleSheet
const Styles = StyleSheet.create({

})
export default HomeTab