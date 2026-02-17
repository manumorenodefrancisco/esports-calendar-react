import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fafb",
        padding: 16,
        paddingTop: 80,
        paddingBottom: 90,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 16,
        color: "#111827",
        textAlign: "center"
    },
    selectedText: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: "600",
        color: "#4f46e5",
        textAlign: "center"
    },
    eventContainer: {
        marginTop: 20
    },
    eventCard: {
        backgroundColor: "#ffffff",
        padding: 14,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827"
    }
});
