import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ProfileStyle";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonGradient } from "../../../sharedComponents/ButtonGradient";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootNavigator";

export const ProfileView = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const initialUsername = "";
    const initialEmail = "";
    const initialPhone = "";

    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(initialUsername);
    const [email, setEmail] = useState(initialEmail);
    const [phone, setPhone] = useState(initialPhone);

    const onCancel = () => {
        setUsername(initialUsername);
        setEmail(initialEmail);
        setPhone(initialPhone);
        setIsEditing(false);
    };

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <View style={styles.avatar}>
                        <FontAwesome name="user" size={36} color="#111111" />
                    </View>
                    <Text style={styles.name}>{username || initialUsername}</Text>
                    <Text style={styles.email}>{email || initialEmail}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Datos</Text>

                    <View style={styles.row}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            editable={isEditing}
                            placeholder="Username"
                            placeholderTextColor="#6B6B6B"
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            editable={isEditing}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder="tu@email.com"
                            placeholderTextColor="#6B6B6B"
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput
                            style={styles.input}
                            value={phone}
                            onChangeText={setPhone}
                            editable={isEditing}
                            keyboardType="phone-pad"
                            placeholder="+34 123 45 67 89"
                            placeholderTextColor="#6B6B6B"
                        />
                    </View>

                    {!isEditing ? (
                        <View style={{ marginTop: 6 }}>
                            <ButtonGradient
                                text="Editar perfil"
                                fnDeOtroComponente={() => setIsEditing(true)}
                            />
                        </View>
                    ) : (
                        <View style={styles.actionsRow}>
                            <TouchableOpacity
                                activeOpacity={0.85}
                                style={styles.actionGhost}
                                onPress={onCancel}
                            >
                                <Text style={styles.actionGhostText}>Cancelar</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <ButtonGradient
                                    text="Guardar"
                                    fnDeOtroComponente={() => setIsEditing(false)}
                                />
                            </View>
                        </View>
                    )}
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Cuenta</Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.dangerButton}
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [{ name: "Home" }],
                            })
                        }
                    >
                        <Text style={styles.dangerText}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};