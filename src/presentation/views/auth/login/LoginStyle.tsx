import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    card: {
        width: "100%",
        maxWidth: 380,
        backgroundColor: "#D9D9D9",
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111111",
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 12,
        color: "#444444",
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        fontWeight: "700",
        color: "#111111",
        marginBottom: 6,
    },
    input: {
        backgroundColor: "#C9C9C9",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 14,
        color: "#111111",
    },
    buttonContainer: {
        marginTop: 4,
    },
    footerText: {
        marginTop: 14,
        textAlign: "center",
        color: "#333333",
        fontSize: 13,
    },
    footerLink: {
        color: "#1F3A93",
        fontWeight: "700",
    },
});