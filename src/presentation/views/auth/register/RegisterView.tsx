import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./RegisterStyle";
import viewModel from "./RegisterViewModel";

const RegisterView = () => {

    const {email, password, confirmPassword, phone, address, setEmail, setPassword, setConfirmPassword, setAddress, setPhone, register} = viewModel()

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style={styles.titulo}>Registro</Text>

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

            <Text style={styles.label}>
                Repetir contraseña:
            </Text>
            <TextInput
                style={styles.textInput}
                autoComplete={"password"}
                placeholder={"******"}
                keyboardType={"default"}
                secureTextEntry={true}
                onChangeText={text => setConfirmPassword(text)}
            ></TextInput>

            <Text style={styles.label}>
                Dirección:
            </Text>
            <TextInput
                style={styles.textInput}
                autoComplete={"address-line1"}
                keyboardType={"default"}
                onChangeText={text => setAddress(text)}
            ></TextInput>

            <Text style={styles.label}>
                Teléfono:
            </Text>
            <TextInput
                style={styles.textInput}
                autoComplete={"tel"}
                placeholder={"+34 123 45 67 89"}
                keyboardType={"phone-pad"}
                onChangeText={text => setPhone(text)}
            ></TextInput>

            <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={() => {register()}}
            >
                <Text style={{textAlign: "center", color: "#FFF"}}>Registrarme</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterView;