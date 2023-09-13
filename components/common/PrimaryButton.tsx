import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constant/colors'

type propsType = {
    onPress?: () => void,
    children: string
}

const PrimaryButton = ({ onPress, children }: propsType) => {
    return (
        <View style={styles.button}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: Colors.primary800 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        overflow: "hidden",
        width: "100%",
        // elevation: 8,
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 50 },
        // shadowRadius: 10,
        // shadowOpacity: 0.75
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary800,
        paddingVertical: 17,

    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "700"
    },
    pressed: {
        opacity: 0.9
    }
})