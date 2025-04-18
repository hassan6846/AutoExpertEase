
import {Alert} from "react-native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
const HomeStack = createStackNavigator()

//imports modules
import { Avatar,Icon  } from "@rneui/themed"

//utils
import { getHeight } from "../utils/GetDimension"
//nested childs

/////////////////////////////////////////////////////////
// Lesson Section


//Car Bc ALiShan  ki mkc.
import AllCars from "../screens/Stacks/Home/nested/CarSection/AllCars"
import ViewCarDetails from "../screens/Stacks/Home/nested/CarSection/nested/ViewCarDetails"
import BookingSteps from "../screens/Stacks/Home/nested/CarSection/nested/BookingSteps"
import PostCar from "../screens/Stacks/Home/nested/CarSection/nested/PostCar"
//State manegment
import { useSelector } from "react-redux"
import HomeInital from "../screens/Stacks/Home/InitialRoute"

const HomeTab = ({ navigation }: { navigation: any }) => {
  //Select Avatar
  const id = useSelector((state: any) => state.auth.userid);

  const avatar=useSelector((state:any)=>state.user.avatar)
//Check Can PostCars..
const CanPostCars = async () => {
  try {
    const response = await fetch(`https://backend-autoexpertease-production-5fd2.up.railway.app/api/can-post/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
   
    //if can post cars=false then show alert and not allow to post cars..
    if (!data.canPostCars) {
      Alert.alert(
        "Sorry",
        "You can't post new cars right now. Please check your role and permissions or Request to become a Car Poster Agency Verify YOur self with kyc information",
        [
          {
            text: "Request Now",
            onPress: () => {
              navigation.navigate("expertverify",{screen:"expertverification"});
              // Handle the "Request Now" action here
            },
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ]
      );      return false;
    }
//if true then navigate to post car page..
      navigation.navigate("postcar")
    console.log(data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    // Handle error, e.g., show error message to user
  }
};
  return (
    <HomeStack.Navigator initialRouteName="HomeInital" >
      {/* Inital Home Route */}
      <HomeStack.Screen options={{headerShadowVisible:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS, headerRight: () => (<Avatar avatarStyle={{ borderRadius: 20 }} containerStyle={{ marginRight: 12 }} source={{ uri: avatar }} />), headerTitle: "Welcome", headerStyle: { height: getHeight / 9 } }} component={HomeInital} name="HomeInital" />
      {/* Fetch All Videos.. */}


{/* Post Video */}
{/* All Cars */}
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:"Browse Rental Cars",headerRight:()=>(<Icon name="add" onPress={CanPostCars}  type="material" iconStyle={{padding:5,borderRadius:60}} containerStyle={{marginRight:10}}/>)}} name="allcars" component={AllCars} />
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:""}} name="cardetail" component={ViewCarDetails} />
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:""}} name="bookingsteps" component={BookingSteps} />
<HomeStack.Screen options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerLeft:()=><></>,headerTitleAlign:"center",title:"Post A Car"}} name="postcar" component={PostCar} />


    </HomeStack.Navigator>
  )
}

export default HomeTab