//navigation
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
const UserStack = createStackNavigator()


//nested child Component or pages
import ProfileInitial from "../Stacks/UserProfile/InitialRoute"
import ViewProfileImage from "../Stacks/UserProfile/-nested/ViewProfileImage"

const ProfileTab = () => {
    return (
        <UserStack.Navigator>
            {/* Initial Route  */}
            <UserStack.Screen name="profile" options={{ headerTitleAlign: "center" }} component={ProfileInitial} />
            {/* Profile ImageView */}

        </UserStack.Navigator>
    )
}
export default ProfileTab