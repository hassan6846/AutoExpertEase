import { StyleSheet, View } from "react-native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const HomeStack = createStackNavigator()

//imports modules
import { Avatar,  } from "@rneui/themed"
import { AvatarSrc } from "../../constants/ImagesConstants"
//utils

import { getHeight } from "../../utils/GetDimension"
//nested childs
import Home from "../Stacks/Home/InitialRoute"
/////////////////////////////////////////////////////////
// Lesson Section
import AllLessons from "../Stacks/Home/nested/drivinglessons/AllLessons"
import VideoView from "../Stacks/Home/nested/drivinglessons/nested/VideoView"

const HomeTab = () => {

  return (
    <HomeStack.Navigator initialRouteName="HomeInital" >

      <HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS, headerRight: () => (<Avatar avatarStyle={{ borderRadius: 20 }} containerStyle={{ marginRight: 12 }} source={{ uri: AvatarSrc }} />), headerTitle: "Welcome", headerStyle: { height: getHeight / 9 } }} component={Home} name="HomeInital" />
      <HomeStack.Screen  options={{headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,title:"Video Feed",headerLeft:()=><></>,headerTitleAlign:"center"}} component={AllLessons} name="allvideos" />
      <HomeStack.Screen  options={{headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,title:"",headerTitleAlign:"center"}} component={VideoView} name="viewvideo" />



    </HomeStack.Navigator>
  )
}
// styleSheet
const Styles = StyleSheet.create({

})
export default HomeTab