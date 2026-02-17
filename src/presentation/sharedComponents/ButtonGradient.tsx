import {StyleSheet, TouchableOpacity, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
//import {FontAwesome} from "@expo/vector-icons";

type Props = {
    text: string;
    fnDeOtroComponente: () => void;
    type?: "default" | "md" | "lg";
}

export const ButtonGradient = (
    {text, fnDeOtroComponente, type = "default"}: Props
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
            activeOpacity={0.85}
        >
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']} // Colores de tu HomeView
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.textButton}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        borderRadius: 12,
        overflow: "hidden",
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        minHeight: 44,
    },
    textButton: {
        fontWeight: "600",//bold
        fontSize: 18,
        color: "#ffffff",
        textAlign: "center",
    }
})