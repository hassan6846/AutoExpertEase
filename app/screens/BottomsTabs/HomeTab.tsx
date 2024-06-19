
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const HomeStack = createStackNavigator()

//imports modules
import { Avatar,Icon  } from "@rneui/themed"

//utils
import { getHeight } from "../../utils/GetDimension"
//nested childs

/////////////////////////////////////////////////////////
// Lesson Section
import AllLessons from "../Stacks/Home/nested/drivinglessons/AllLessons"
import VideoView from "../Stacks/Home/nested/drivinglessons/nested/VideoView"
import PostVideo from "../Stacks/Home/nested/drivinglessons/nested/PostVideo"
//Car Bc ALiShan  ki mkc.
import AllCars from "../Stacks/Home/nested/CarSection/AllCars"
import ViewCarDetails from "../Stacks/Home/nested/CarSection/nested/ViewCarDetails"
import BookingSteps from "../Stacks/Home/nested/CarSection/nested/BookingSteps"
import PostCar from "../Stacks/Home/nested/CarSection/nested/PostCar"
//State manegment
import { useSelector } from "react-redux"
import HomeInital from "../Stacks/Home/InitialRoute"

const HomeTab = ({ navigation }: { navigation: any }) => {
  //Select Avatar
  const avatar=useSelector((state:any)=>state.user.avatar)

  return (
    <HomeStack.Navigator initialRouteName="HomeInital" >
      {/* Inital Home Route */}
      <HomeStack.Screen options={{headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS, headerRight: () => (<Avatar avatarStyle={{ borderRadius: 20 }} containerStyle={{ marginRight: 12 }} source={{ uri: avatar }} />), headerTitle: "Welcome", headerStyle: { height: getHeight / 9 } }} component={HomeInital} name="HomeInital" />
      {/* Fetch All Videos.. */}
      <HomeStack.Screen  options={{headerShown:false,headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,title:"",headerTitleAlign:"center"}} component={VideoView} name="viewvideo" />

      <HomeStack.Screen  options={{headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,title:"Video Feed",headerLeft:()=><></>,headerTitleAlign:"center",headerRight:()=><>
      <Icon name="add" type="material"iconStyle={{borderRadius:30,padding:10}} onPress={()=>navigation.navigate("postvideo")} containerStyle={{marginRight:10}}/>
      </>}} component={AllLessons} name="allvideos" />

{/* Post Video */}
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:"Post Lesson"}} name="postvideo" component={PostVideo} />
{/* All Cars */}
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:"Browse Rental Cars",headerRight:()=>(<Icon name="add" type="material" containerStyle={{marginRight:10}}/>)}} name="allcars" component={AllCars} />
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:""}} name="cardetail" component={ViewCarDetails} />
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:""}} name="bookingsteps" component={BookingSteps} />
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:"Post A Car"}} name="postcar" component={PostCar} />


    </HomeStack.Navigator>
  )
}

export default HomeTab