//navigation
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
const UserStack = createStackNavigator()


//nested child Component or pages
import ProfileInitial from "../Stacks/UserProfile/InitialRoute"
const ProfileTab = () => {
    return (
        <UserStack.Navigator>
            {/* Initial Route  */}
            <UserStack.Screen name="profile" options={{ headerShown: false }} component={ProfileInitial} />
        </UserStack.Navigator>
    )
}
export default ProfileTab