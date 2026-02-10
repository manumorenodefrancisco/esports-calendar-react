import {StyleSheet, TouchableOpacity, Text} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

type Props = {
    text: string;
    fnDeOtroComponente: () => void;
    type?: "default" | "md" | "lg";
    iconName?: any;
}

export const ButtonWithIcon = (
    {text, fnDeOtroComponente, type = "default", iconName}: Props
) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                type === "lg" ? {width: "95%", alignSelf: "center"} : null,
                type === "md" ? {width: "50%", alignSelf: "center"} : null,
            ]}
            onPress={() => {
                fnDeOtroComponente();
            }}
        >

            {(iconName) ? <FontAwesome name={iconName} size={20} color={"#0D714D"}></FontAwesome> : null}

            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#D8EEE4",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    textButton: {
        fontWeight: "600",
        fontSize: 18,
        color: "#0D714D",
        textAlign: "center",
    }
})