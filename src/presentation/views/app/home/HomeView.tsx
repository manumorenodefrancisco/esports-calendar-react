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
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <View style={{paddingTop: 20}}>
                <Image source={require('../../../../../assets/altanto.jpg')} resizeMode={"cover"}/>
                <Text style={styles.titleView}>Calendario</Text>
            </View>
                {/**/}

            <ButtonGradient
                text={"Iniciar sesión"}
                fnDeOtroComponente={() => {
                    navigation.navigate("Login");
                }}
            />
            <ButtonGradient
                text={"Registrarme"}
                fnDeOtroComponente={() => {
                    navigation.navigate("Registro");
                }}
            />

        </SafeAreaView>
    )
}
