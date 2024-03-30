import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
const ProfileTab = createMaterialTopTabNavigator()

import Videos from "./nested/Videos"
import Reviews from "./nested/Reviews"
import About from "./nested/About"

const ProfilePage = () => {
  return (
    <ProfileTab.Navigator>
      <ProfileTab.Screen name="Videos" component={Videos} />
      <ProfileTab.Screen name="Reviews" component={Reviews} />
      <ProfileTab.Screen name="About" component={About} />
    </ProfileTab.Navigator>
  )
}

export default ProfilePage