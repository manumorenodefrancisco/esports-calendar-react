import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./LoginStyle";
import viewModel from "./LoginViewModel"
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/RootNavigator";

const LoginView = () => {

    const {iniciarSesion, setEmail, setPassword} = viewModel();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <ScrollView style={{flex: 1}}>
            <View>

                <Text style={styles.titulo}>Iniciar sesión</Text>

                <Text style={styles.label}>
                    Correo electrónico:
                </Text>
                <TextInput
                    style={styles.textInput}
                    autoComplete={"email"}
                    placeholder={"...@example.com"}
                    keyboardType={"email-address"}
                    onChangeText={text => setEmail(text)}
                ></TextInput>


                <Text style={styles.label}>
                    Contraseña:
                </Text>
                <TextInput
                    style={styles.textInput}
                    autoComplete={"password"}
                    placeholder={"******"}
                    keyboardType={"default"}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                ></TextInput>

                <TouchableOpacity
                    style={styles.buttonSubmit}
                    onPress={() => {
                            iniciarSesion();
                            navigation.navigate("Calendar")
                    }}
                >
                    <Text style={{textAlign: "center", color: "#FFF"}}>Entrar</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{marginTop: 20}} onPress={() => {
                    navigation.navigate("Registro")
                }}>
                    <Text style={{textAlign: "center"}}>Registrarme</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default LoginView;