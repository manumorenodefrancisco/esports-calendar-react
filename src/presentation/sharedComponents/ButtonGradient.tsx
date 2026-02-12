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
                /*styles.buttonContainer,*/
                type === "lg" ? {width: "95%", alignSelf: "center"} : null,
                type === "md" ? {width: "50%", alignSelf: "center"} : null,
            ]}
            onPress={() => {
                fnDeOtroComponente();
            }}
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
    gradient: {
        flex: 1,
        borderRadius: 25, //
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontWeight: "600",//bold
        fontSize: 18,
        color: "#ffffff",
        textAlign: "center",
    }
})