import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import ThemeProviderColors from "../../../provider/ThemeProvider";

const PrivacyPolicy = ({ navigation }: { navigation: any }) => {



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
              
                scrollEventThrottle={16}
            >
                <Text style={styles.header} h4={true}>
                    AutoExpertEase CUSTOMER TERMS & CONDITIONS
                </Text>
                <View style={styles.section}>
                    <Text style={styles.subHeader}>IMPORTANT:</Text>
                    <Text style={styles.text}>
                        These terms and conditions (“conditions”) define the basis upon which get will provide you with access to the get mobile application platform, pursuant to which you will be able to request certain transportation services from third party drivers by placing orders through get’s mobile application platform. These conditions (together with the documents referred to herein) set out the terms of use on which you may, as a customer, use the app and request transportation services. By using the app and ticking the acceptance box, you indicate that you accept these terms of use which apply, among other things, to all services hereinunder to be rendered to or by you via the app within the uk and that you agree to abide by them.
                    </Text>
                    <Text style={styles.text}>
                        ADDITIONAL TERMS:
                    </Text>
                    <Text style={styles.text}>
                        1. Service Availability: The availability of transportation services through the app is subject to change without notice. Gett reserves the right to modify, suspend, or discontinue the service at any time.
                    </Text>
                    <Text style={styles.text}>
                        2. Geographic Limitations: The services provided through the app are intended for use within the Pk. Using the app outside of the UK may result in limited functionality or inability to access certain features.
                    </Text>
                    <Text style={styles.text}>
                        3. User Responsibilities: Users are responsible for maintaining the confidentiality of their account information, including passwords. Any use of the app under a user's account is the user's responsibility.
                    </Text>
                    <Text style={styles.text}>
                        4. Acceptance Box: By ticking the acceptance box, you acknowledge that you have read, understood, and agree to abide by all terms and conditions outlined herein, including any additional terms that may be introduced.
                    </Text>
                    <Text style={styles.text}>
                        5. Modification of Terms: Gett reserves the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of the app after modifications constitutes acceptance of the updated terms.
                    </Text>
                    <Text style={styles.text}>
                        6. Contact Information: It is the user's responsibility to ensure that their contact information associated with the app is accurate and up-to-date. Gett is not responsible for any communication issues arising from outdated contact details.
                    </Text>
                    <Text style={styles.text}>
                        7. Governing Law: These terms and conditions are governed by the laws of Pakistan. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the UK courts.
                    </Text>
                    <Text style={styles.text}>
                        By continuing to use the app, you acknowledge and agree to all the terms and conditions outlined above.
                    </Text>
                </View>
                <Button
                    buttonStyle={[styles.button]}
                    title="Accept"
                  
                    onPress={() => navigation.navigate("LoginStack")}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    scrollContainer: {
        padding: 20,
    },
    header: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "#E04E2F",
        marginVertical: 20,
    },
    section: {
        marginVertical: 10,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: "600",
        color: "#E04E2F",
        marginBottom: 10,
    },
    text: {
        fontSize: 13.3,
        color: ThemeProviderColors.Light.FontSubHeading,
        lineHeight: 24,
        textAlign: "justify",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#E04E2F",
        padding: 15,
        borderRadius: 10,
        marginVertical: 20,
    },
    disabledButton: {
        opacity: 0.5,
    },
});

export default PrivacyPolicy;
