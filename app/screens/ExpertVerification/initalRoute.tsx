import { createStackNavigator } from "@react-navigation/stack"

const Verify = createStackNavigator()

//childScreens
import TrackInfo from "./nested/TrackInfo"
import ScanFace from "./nested/ScanFace"
import ScanCnic from "./nested/ScanCnic"
import EnterInformation from "./nested/EnterInformation"
import AllDone from "./nested/AllDone"

const VerficationStack = () => {
    return (
        <Verify.Navigator
        initialRouteName="scancnic"
        screenOptions={{
            cardStyle: {
                backgroundColor: "#fff",
            },
            
        }}
        >
            <Verify.Screen name="trackinfo" component={TrackInfo} />
            <Verify.Screen name="scanface" component={ScanFace} />
            <Verify.Screen name="scancnic" component={ScanCnic} />
            <Verify.Screen name="enterinformation" component={EnterInformation} />
            <Verify.Screen name="alldone" component={AllDone} />
        </Verify.Navigator>
    )
}

export default VerficationStack