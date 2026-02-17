import {ScrollView, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./RegisterStyle";
import ViewModel from "./RegisterViewModel";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/RootNavigator";
import {ButtonGradient} from "../../../sharedComponents/ButtonGradient";

const RegisterView = () => {

    const {
        email,
        password,
        confirmPassword,
        phone,
        address,
        setEmail,
        setPassword,
        setConfirmPassword,
        setAddress,
        setPhone,
        register
    } = ViewModel();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps={"handled"}
            >
                <View style={styles.card}>
                    <Text style={styles.title}>Registro</Text>
                    <Text style={styles.subtitle}>Crea una cuenta para comenzar</Text>

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        autoComplete={"email"}
                        placeholder={"tu@email.com"}
                        placeholderTextColor={"#6B6B6B"}
                        keyboardType={"email-address"}
                        autoCapitalize={"none"}
                        value={email}
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
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />

                    <Text style={styles.label}>Repetir contraseña</Text>
                    <TextInput
                        style={styles.input}
                        autoComplete={"password"}
                        placeholder={"********"}
                        placeholderTextColor={"#6B6B6B"}
                        keyboardType={"default"}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                    />

                    <Text style={styles.label}>Dirección</Text>
                    <TextInput
                        style={styles.input}
                        autoComplete={"address-line1"}
                        placeholder={"Tu dirección"}
                        placeholderTextColor={"#6B6B6B"}
                        keyboardType={"default"}
                        value={address}
                        onChangeText={text => setAddress(text)}
                    />

                    <Text style={styles.label}>Teléfono</Text>
                    <TextInput
                        style={styles.input}
                        autoComplete={"tel"}
                        placeholder={"+34 123 45 67 89"}
                        placeholderTextColor={"#6B6B6B"}
                        keyboardType={"phone-pad"}
                        value={phone}
                        onChangeText={text => setPhone(text)}
                    />

                    <View style={styles.buttonContainer}>
                        <ButtonGradient text={"Registrarse"} fnDeOtroComponente={() => register()} />
                    </View>

                    <Text style={styles.footerText}>
                        ¿Ya tienes cuenta?{" "}
                        <Text
                            style={styles.footerLink}
                            onPress={() => {
                                navigation.navigate("Login");
                            }}
                        >
                            Inicia sesión
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterView;