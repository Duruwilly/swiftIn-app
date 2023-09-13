import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import FormInput from '../components/common/FormInput'
import PrimaryButton from '../components/common/PrimaryButton';
import { Colors } from '../constant/colors'

type LoginFormDataType = {
    email: string,
    password: string
}

const LoginScreen = ({ navigation }: any) => {
    const [loginFormData, setLoginFormData] = useState<LoginFormDataType>({
        email: '',
        password: '',
    });

    const handleChange = (name: keyof LoginFormDataType, value: string) => {
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    return (
        <ScrollView style={styles.screen}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.signInText}>Sign In</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputContent}>
                            <FormInput
                                label='Your Email'
                                value={loginFormData.email}
                                onChangeText={(text: string) => handleChange('email', text)}
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.inputContent}>
                            <FormInput
                                label='Password'
                                value={loginFormData.password}
                                onChangeText={(text: string) => handleChange('password', text)}
                                secureTextEntry
                            />
                        </View>
                        <Pressable onPress={() => navigation.navigate("Home")}>
                            <Text style={[styles.questionText, { textAlign: "right", marginVertical: 10 }]}>Forgot your password?</Text>
                        </Pressable>
                        <View style={{ marginTop: 15 }}>
                            <PrimaryButton>Login</PrimaryButton>
                        </View>
                        <Pressable onPress={() => navigation.navigate("Register")}>
                            <Text style={[styles.questionText, { textAlign: "center", marginVertical: 24 }]}>Don't have an account? sign up</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default LoginScreen

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
        fontSize: 17,
        fontWeight: "700",
    },
})