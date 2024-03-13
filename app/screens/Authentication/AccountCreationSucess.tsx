import { View, StyleSheet, Dimensions } from 'react-native'
const getHeight = Dimensions.get("screen").height
import { Text } from "@rneui/themed"
import LottieView from "lottie-react-native"
import CustomButton from '../../components/ButtonProps/ButtonProps'
import { Audio } from "expo-av"
import { useEffect } from 'react'

const AccountCreationSucess = () => {
    useEffect(() => {
        const playSound = async () => {
            const soundObject = new Audio.Sound();
            try {
                await soundObject.loadAsync(require("../../assets/sound/HailingSound.mp3"));
                await soundObject.playAsync();
            } catch (error) {
                console.error('Failed to load sound', error);
            }
        };

        playSound();
        

    })


    return (
        <View style={Styles.Sucess_wrapper}>
            <Text h4 style={Styles.PageHeader}>Account Created</Text>
            {/* LottieFile Player */}
            <View style={{ width: "100%", alignItems: "center" }}>
                <LottieView

                    autoPlay
                    source={require('../../assets/lottie/success.json')}

                    style={{ height: getHeight / 3.5 }}
                />
                <Text style={{ textAlign: "center", fontSize: 10, fontWeight: "500", paddingHorizontal: 24 }}>Your Account is Created Successfully and you will be redirected in a Second.</Text>

            </View>
            {/* end lottie Player svg */}
            <CustomButton BtnRadius={5} title="Done 👍" />
            <Text style={Styles.TermText}>
                By providing my phone number, I hereby agree and accept the Terms of Service and Privacy Policy in use of the  app.
            </Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    Sucess_wrapper: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,

        justifyContent: "space-evenly"
    },
    PageHeader: {
        textAlign: "center"
    },
    TermText: {
        textAlign: "center",
        paddingHorizontal: 7
    }
})
export default AccountCreationSucess