import { useState } from 'react';
import { KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import FormInput from '../components/common/FormInput'
import PrimaryButton from '../components/common/PrimaryButton';
import FormValidationError from '../components/FormValidationError';
import { Colors } from '../constant/colors'
import { validateEmail, validatePassword } from '../helpers/FormValidation';
import { Ionicons } from '@expo/vector-icons'

type RegisterFormDataType = {
    fullName: string,
    email: string,
    country: string,
    mobileNumber: string,
    password: string
}

const RegisterScreen = ({ navigation }: any) => {

    const [passwordErrors, setPasswordErrors] = useState<{ password: string, newPassword: string }>({
        password: "",
        newPassword: ""
    });
    const [emailErrors, setEmailErrors] = useState<{ emailError: string }>({
        emailError: ""
    });

    const [registerFormData, setRegisterFormData] = useState<RegisterFormDataType>({
        fullName: "",
        email: '',
        country: "",
        mobileNumber: "",
        password: '',
    });

    const handleRegisterChange = (name: keyof RegisterFormDataType, value: string) => {
        setRegisterFormData({ ...registerFormData, [name]: value });

        if (name === "email") {
            validateEmail({ id: name, value, emailErrors, setEmailErrors })
        } else if (name === "password") {
            validatePassword({ id: name, value, passwordErrors, setPasswordErrors })
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView style={styles.screen}>
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.navigate("Login")} style={{ marginBottom: 10 }}>
                            <Ionicons name="md-arrow-back" size={30} color="black" />
                        </Pressable>
                        <View>
                            <Text style={styles.signInText}>Sign Up</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputContent}>
                                <FormInput
                                    label='Full Name'
                                    value={registerFormData.fullName}
                                    onChangeText={(text: string) => handleRegisterChange('fullName', text)}
                                />
                            </View>
                            <View style={styles.inputContent}>
                                <FormInput
                                    label='Email'
                                    value={registerFormData.email}
                                    onChangeText={(text: string) => handleRegisterChange('email', text)}
                                    keyboardType="email-address"
                                />
                                {emailErrors.emailError && (
                                    <FormValidationError error={emailErrors.emailError} />
                                )}
                            </View>
                            <View style={styles.inputContent}>
                                <FormInput
                                    label='Country'
                                    value={registerFormData.country}
                                    onChangeText={(text: string) => handleRegisterChange('country', text)}
                                />
                            </View>
                            <View style={styles.inputContent}>
                                <FormInput
                                    label='Mobile Number'
                                    value={registerFormData.mobileNumber}
                                    onChangeText={(text: string) => handleRegisterChange('mobileNumber', text)}
                                />
                            </View>
                            <View style={styles.inputContent}>
                                <FormInput
                                    label='Password'
                                    value={registerFormData.password}
                                    onChangeText={(text: string) => handleRegisterChange('password', text)}
                                    secureTextEntry
                                />
                                {passwordErrors.password && (
                                    <FormValidationError error={passwordErrors.password} />
                                )}
                            </View>
                            <Pressable onPress={() => navigation.navigate("Home")}>
                                <Text style={[styles.questionText, { textAlign: "right", marginVertical: 10 }]}>Forgot your password?</Text>
                            </Pressable>
                            <View style={{ marginTop: 15 }}>
                                <PrimaryButton>Sign up</PrimaryButton>
                            </View>
                            <Pressable onPress={() => navigation.navigate("Login")}>
                                <Text style={[styles.questionText, { textAlign: "center", marginVertical: 24 }]}>Already have an account? sign in</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        padding: 24,
        marginTop: 10
    },
    signInText: {
        color: Colors.primary400,
        fontWeight: "700",
        fontSize: 35
    },
    inputContainer: {
        marginTop: 16
    },
    inputContent: {
        marginVertical: 13
    },
    questionText: {
        color: Colors.primary400,
        textDecorationLine: "underline",
        fontSize: 16,
        fontWeight: "700",
    },
})