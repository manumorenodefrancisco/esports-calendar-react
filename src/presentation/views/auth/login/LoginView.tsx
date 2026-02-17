import {ScrollView, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./LoginStyle";
import viewModel from "./LoginViewModel"
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/RootNavigator";
import {ButtonGradient} from "../../../sharedComponents/ButtonGradient";

const LoginView = () => {

    const {iniciarSesion, setEmail, setPassword} = viewModel();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps={"handled"}
            >
                <View style={styles.card}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                    <Text style={styles.subtitle}>Ingresa tus credenciales para acceder</Text>

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        autoComplete={"email"}
                        placeholder={"tu@email.com"}
                        placeholderTextColor={"#6B6B6B"}
                        keyboardType={"email-address"}
                        autoCapitalize={"none"}
                        onChangeText={text => setEmail(text)}
                    />

                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        autoComplete={"password"}
                        placeholder={"********"}
                        placeholderTextColor={"#6B6B6B"}
                        keyboardType={"default"}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />

                    <View style={styles.buttonContainer}>
                        <ButtonGradient
                            text={"Iniciar Sesión"}
                            fnDeOtroComponente={async () => {
                                await iniciarSesion();
                                navigation.reset({
                                    index: 0,
                                    routes: [{name: "AppTabs"}],
                                });
                            }}
                        />
                    </View>

                    <Text style={styles.footerText}>
                        ¿No tienes cuenta?{" "}
                        <Text
                            style={styles.footerLink}
                            onPress={() => {
                                navigation.navigate("Registro");
                            }}
                        >
                            Regístrate
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginView;