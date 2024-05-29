import { createStackNavigator } from "@react-navigation/stack"

const Verify = createStackNavigator()

//childScreens

import SelectRole from "./nested/SelectRole"

const VerficationStack = () => {
    return (
        <Verify.Navigator
            initialRouteName="selectrole"

        >
            <Verify.Screen options={{ title: "Verification", headerTitleAlign: "center", headerLeft: () => (<></>) }} name="selectrole" component={SelectRole} />

        </Verify.Navigator>
    )
}

export default VerficationStack