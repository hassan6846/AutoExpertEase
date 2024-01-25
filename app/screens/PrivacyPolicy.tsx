//modules and Libarary

import { StyleSheet, ScrollView, SafeAreaView } from "react-native"
import { Button, Text } from "@rneui/themed"

//utils

// Privacy Policy Component
const PrivacyPolicy = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.PrivacyContainer}>
            <ScrollView  >
                <Text style={styles.privacyHead} h4={true}>AutoExpertEase CUSTOMER TERMS & CONDITIONS</Text>
                <Text style={styles.impHead}>IMPORTANT:</Text>
                <Text style={styles.privacyConditons}>
                    These terms and conditions (“conditions”) define the basis upon which get will provide you with access to the get mobile application platform, pursuant to which you will be able to request certain transportation services from third party drivers by placing orders through get’s mobile application platform. These conditions (together with the documents referred to herein) set out the terms of use on which you may, as a customer, use the app and request transportation services. By using the app and ticking the acceptance box, you indicate that you accept these terms of use which apply, among other things, to all services hereinunder to be rendered to or by you via the app within the uk and that you agree to abide by them.
                    ADDITIONAL TERMS:

                    1.Service Availability:  The availability of transportation services through the app is subject to change without notice. Gett reserves the right to modify, suspend, or discontinue the service at any time.

                    2. Geographic Limitations: The services provided through the app are intended for use within the UK. Using the app outside of the UK may result in limited functionality or inability to access certain features.

                    3. User Responsibilities: Users are responsible for maintaining the confidentiality of their account information, including passwords. Any use of the app under a user's account is the user's responsibility.

                    4. Acceptance Box: By ticking the acceptance box, you acknowledge that you have read, understood, and agree to abide by all terms and conditions outlined herein, including any additional terms that may be introduced.

                    5. Modification of Terms: Gett reserves the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of the app after modifications constitutes acceptance of the updated terms.

                    6. Contact Information: It is the user's responsibility to ensure that their contact information associated with the app is accurate and up-to-date. Gett is not responsible for any communication issues arising from outdated contact details.

                    7. Governing Law:These terms and conditions are governed by the laws of the United Kingdom. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the UK courts.

                    By continuing to use the app, you acknowledge and agree to all the terms and conditions outlined above.
                </Text>
                <Button buttonStyle={styles.AcceptBtn} color="#E04E2F" title="Accept" onPress={() => navigation.goBack()} />
            </ScrollView>
        </SafeAreaView>
    )
}
// Styles
const styles = StyleSheet.create({
    PrivacyContainer: {
        overflow: "scroll",
        padding: 30,
        flex: 1,
        backgroundColor: "white"
    },
    privacyHead: {
        textAlign: "center"
    }, impHead: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '400'
    }, privacyConditons: {
        fontSize: 14,
        textAlign: "left",

    },
    AcceptBtn: {
        marginTop: 10,
        padding: 12,
        borderRadius: 10,
    }
})
export default PrivacyPolicy


