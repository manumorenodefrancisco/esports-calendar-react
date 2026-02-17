import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./HomeStyle";
import {ButtonGradient} from "../../../sharedComponents/ButtonGradient";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../navigation/RootNavigator";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";


export const HomeView = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.layout}>
                <View style={styles.content}>
                    <Image
                        source={require("../../../../../assets/altanto.jpg")}
                        resizeMode={"contain"}
                        style={styles.logo}
                    />

                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonWidth}>
                            <ButtonGradient
                                text={"Iniciar Sesión"}
                                fnDeOtroComponente={() => navigation.navigate("Login")}
                            />
                        </View>

                        <View style={styles.buttonWidth}>
                            <ButtonGradient
                                text={"Registrarse"}
                                fnDeOtroComponente={() => navigation.navigate("Registro")}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.contactButton}
                            onPress={() => {
                                // Junior-friendly: dejamos el hook para cuando exista pantalla/enlace de contacto
                                // navigation.navigate("Contacto")
                            }}
                            activeOpacity={0.85}
                        >
                            <Text style={styles.contactText}>Contacta con nosotros</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.socialRow}>
                        <TouchableOpacity style={styles.socialButton} onPress={() => {}} activeOpacity={0.7}>
                            <FontAwesome name="instagram" size={42} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton} onPress={() => {}} activeOpacity={0.7}>
                            <FontAwesome name="facebook" size={42} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton} onPress={() => {}} activeOpacity={0.7}>
                            <FontAwesome name="twitter" size={42} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}
