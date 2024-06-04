import React, { useState, useRef, useEffect, createRef } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";
import { Button, Icon, Input, Text } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import ThemeProviderColors from "../../../../provider/ThemeProvider";
import { SetProgressValueBar, SetPhone } from "../../../../slices/AuthSlice";
import { RootState } from "../../../../store/Store";

const PhoneLogin = ({ navigation }: { navigation: any }) => {
    const progress = useSelector((state: RootState) => state.auth.Progress);
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const InputRef = useRef<any>(null);

    const handleInputChange = (text: string) => {
        setPhoneNumber(text);
        dispatch(SetPhone(text));
    };

    const handleSubmit = () => {
        console.log("Clicked");
    };

    useEffect(() => {
        dispatch(SetProgressValueBar(0.1));
        if (InputRef.current) {
            InputRef.current.focus();
        }
        return () => {
            dispatch(SetProgressValueBar(0));
        };
    }, [dispatch]);

    const isButtonDisabled = phoneNumber.length !== 12;

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.LoginContainer}>
                    <Text style={styles.LoginHeading} h3={true} >Enter Phone Number for Verification</Text>
                    <Text style={styles.LoginSub}>This number  will be used for all ride-related communication. You shall receive an SMS with code for verification.</Text>
                    <Input
                        ref={InputRef}
                        onChangeText={handleInputChange}
                        labelStyle={{ marginBottom: 5, fontSize: 10 }}
                        label="Phone"
                        inputContainerStyle={styles.LoginInputCont}
                        rightIcon={<TouchableOpacity activeOpacity={0.7}><Icon name="close" reverseColor="#66696D" reverse={true} color="#e3e3e3" iconStyle={{ fontSize: 15, fontWeight: "bold" }} type="evilicon" size={8} raised={true} /></TouchableOpacity>}
                        placeholder="923332739790"
                        keyboardType="number-pad"
                    />
                    <Button
                        onPress={() => {
                            navigation.navigate("passlogin");
                            handleSubmit();
                        }}
                        buttonStyle={styles.LoginButton}
                        color="#E04E2F"
                        title="Next"
                        disabled={isButtonDisabled}
                    />
                    <Text style={styles.LoginConsent}>By providing my phone number, I hereby agree and accept the <Text style={styles.LoginLink} onPress={() => navigation.push("privacypolicy")}>Terms of Service</Text> and <Text onPress={() => navigation.push("privacypolicy")} style={styles.LoginLink}>Privacy Policy</Text> in use of the  app.</Text>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <Text style={styles.LoginConsent}>Don't have an account?</Text>
                        <Button
                            onPress={() => navigation.navigate("RegisterStack")}
                            buttonStyle={{ borderRadius: 30, paddingHorizontal: 6, paddingVertical: 10 }}
                            color={ThemeProviderColors.Light.Primary}
                            containerStyle={{ paddingHorizontal: 60 }}
                            title="Register"
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    LoginContainer: {
        padding: 30,
        flex: 1,
        backgroundColor: "#fff"
    },
    scrollContainer: {
        height: "100%"
    },
    LoginHeading: {
        marginTop: 10,
        textAlign: 'left',
        marginBottom: 15,
    },
    LoginSub: {
        marginBottom: 10,
        color: "#97ADB6",
        textAlign: 'left'
    },
    LoginInputCont: {
        width: "100%",
        borderRadius: 5,
        marginBottom: 2,
        padding: 2,
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    LoginButton: {
        padding: 12,
        borderRadius: 10,
    },
    LoginLink: {
        textDecorationLine: "underline",
        fontWeight: "500",
        color: "#E04E2F"
    },
    LoginConsent: {
        marginTop: 10,
        color: "#97ADB6",
        padding: 5,
        textAlign: "center"
    }
});

export default PhoneLogin;
