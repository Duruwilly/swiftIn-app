import { Text } from "react-native"

const FormValidationError = ({ error }: { error: string }) => {
    return (
        <Text style={{ color: "red", fontSize: 16, fontWeight: "700" }}>{error}</Text>
    )
}

export default FormValidationError