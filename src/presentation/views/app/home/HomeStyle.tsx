import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
    },
    layout: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 16,
        paddingBottom: 16,
    },
    content: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        marginTop: -32,
    },
    logo: {
        width: 240,
        height: 240,
        borderRadius: 32,
        backgroundColor: "#FFFFFF",
    },
    buttonsContainer: {
        width: "100%",
        alignItems: "center",
        gap: 12,
        marginTop: 8,
    },
    buttonWidth: {
        width: "85%",
    },
    contactButton: {
        width: "85%",
        backgroundColor: "#7A7A7A",
        borderRadius: 12,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    contactText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    socialRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 34,
        marginTop: 10,
    },
    socialButton: {
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
    },
});
