import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f9fafb",
    },
    scroll: {flex: 1},
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 100, // para que no lo tape el tab bar
        gap: 14,
    },
    header: {
        alignItems: "center",
        gap: 8,
        marginBottom: 4,
    },
    avatar: {
        width: 84,
        height: 84,
        borderRadius: 42,
        backgroundColor: "#E5E7EB",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "800",
        color: "#111827",
    },
    email: {
        fontSize: 13,
        color: "#6b7280",
    },
    card: {
        backgroundColor: "#D9D9D9",
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 14,
        gap: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: "800",
        color: "#111111",
        marginBottom: 2,
    },
    label: {
        fontSize: 12,
        fontWeight: "800",
        color: "#111111",
        marginBottom: 6,
    },
    input: {
        backgroundColor: "#C9C9C9",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        color: "#111111",
    },
    row: {
        gap: 6,
    },
    actionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginTop: 6,
    },
    actionGhost: {
        flex: 1,
        backgroundColor: "#C9C9C9",
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    actionGhostText: {
        fontSize: 14,
        fontWeight: "800",
        color: "#111111",
    },
    dangerButton: {
        backgroundColor: "#EF4444",
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    dangerText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "800",
    },
});

