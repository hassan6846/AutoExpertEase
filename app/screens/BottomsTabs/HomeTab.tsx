
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const HomeStack = createStackNavigator()

//imports modules
import { Avatar,Icon  } from "@rneui/themed"
import { AvatarSrc } from "../../constants/ImagesConstants"
//utils

import { getHeight } from "../../utils/GetDimension"
//nested childs
import Home from "../Stacks/Home/InitialRoute"
/////////////////////////////////////////////////////////
// Lesson Section
import AllLessons from "../Stacks/Home/nested/drivinglessons/AllLessons"
import VideoView from "../Stacks/Home/nested/drivinglessons/nested/VideoView"
import PostVideo from "../Stacks/Home/nested/drivinglessons/nested/PostVideo"
//Car Bc ALiShan  ki mkc.
import AllCars from "../Stacks/Home/nested/CarSection.tsx/AllCars"

const HomeTab = ({ navigation }: { navigation: any }) => {

  return (
    <HomeStack.Navigator initialRouteName="HomeInital" >
      {/* Inital Home Route */}
      <HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS, headerRight: () => (<Avatar avatarStyle={{ borderRadius: 20 }} containerStyle={{ marginRight: 12 }} source={{ uri: AvatarSrc }} />), headerTitle: "Welcome", headerStyle: { height: getHeight / 9 } }} component={Home} name="HomeInital" />
      {/* Fetch All Videos.. */}
      <HomeStack.Screen  options={{headerShown:false,headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,title:"",headerTitleAlign:"center"}} component={VideoView} name="viewvideo" />

      <HomeStack.Screen  options={{headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,title:"Video Feed",headerLeft:()=><></>,headerTitleAlign:"center",headerRight:()=><>
      <Icon name="add" type="material"iconStyle={{borderRadius:30,padding:10}} onPress={()=>navigation.navigate("postvideo")} containerStyle={{marginRight:10}}/>
      </>}} component={AllLessons} name="allvideos" />

{/* Post Video */}
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:"Post Lesson"}} name="postvideo" component={PostVideo} />
{/* All Cars */}
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:"Browse Rental Cars"}} name="allcars" component={AllCars} />



    </HomeStack.Navigator>
  )
}

export default HomeTab