//modules and Libarary

import { View, Text } from "react-native"

//utils

// Privacy Policy Component
const PrivacyPolicy = ({ navigation }: { navigation: any }) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('login')}>Goback</Text>
        </View>
    )
}
export default PrivacyPolicy


