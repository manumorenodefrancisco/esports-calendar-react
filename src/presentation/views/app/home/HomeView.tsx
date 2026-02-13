import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, View} from "react-native";
import {styles} from "./HomeStyle";
import {ButtonGradient} from "../../../sharedComponents/ButtonGradient";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../navigation/RootNavigator";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient'; // o 'react-native-linear-gradient'


export const HomeView = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 30, paddingBottom: 20 }}>

                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <Image source={require('../../../../../assets/altanto.jpg')} resizeMode={"cover"} style={styles.image} />
                    <Text style={styles.titleView}>E-Calendar</Text>
                </View>

                <View>
                    <Text style={styles.titleView}>Iniciar sesión</Text>
                    <ButtonGradient
                        text={"Iniciar sesión"}
                        fnDeOtroComponente={() => navigation.navigate("Login")}
                    />
                </View>

                <View>
                    <Text style={styles.titleView}>Registrarse</Text>
                    <ButtonGradient
                        text={"Registrarme"}
                        fnDeOtroComponente={() => navigation.navigate("Registro")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
