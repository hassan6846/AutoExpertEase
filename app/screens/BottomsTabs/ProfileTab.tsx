//navigation
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
const UserStack = createStackNavigator()


//nested child Component or pages
import ProfileInitial from "../Stacks/UserProfile/InitialRoute"

const ProfileTab = () => {
    return (
        <UserStack.Navigator>
            {/* Initial Route  */}
            <UserStack.Screen name="profile" options={{ cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerTitleAlign: "center" ,headerTitle:"Profile",headerShadowVisible:false,cardStyle:{backgroundColor:"black",}}}  component={ProfileInitial} />
            {/* Settings */}


        </UserStack.Navigator>
    )
}
export default ProfileTab