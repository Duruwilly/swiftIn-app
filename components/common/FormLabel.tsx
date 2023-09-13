import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../constant/colors'

const FormLabel = ({ title }: { title: string }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

export default FormLabel

const styles = StyleSheet.create({
    title: {
        color: Colors.grey300,
        fontSize: 18,
        fontWeight: "700",
        // marginTop: 8
    }
})