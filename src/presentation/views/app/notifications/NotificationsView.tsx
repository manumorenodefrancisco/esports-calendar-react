import React from "react";
import {Text, View} from "react-native";
import {styles} from "./NotificationsStyle";

export const NotificationsView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notificaciones</Text>
            <Text style={styles.subtitle}>Aquí verás avisos y recordatorios.</Text>
        </View>
    );
};

