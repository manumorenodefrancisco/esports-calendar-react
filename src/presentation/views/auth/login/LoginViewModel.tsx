import { useState } from "react";
import { LoginData } from "../../../../domain/entities/login-interface";
import { loginUseCase } from "../../../../domain/useCases/loginUseCase";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginViewModel = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const iniciarSesion = async () => {
        try {
            if (!validate()) return false;

            setLoading(true);

            const data: LoginData = { email, password };
            const res: any = await loginUseCase(data);

            setLoading(false);

            if (!res || res.success === false) {
                alert(res?.message || "Credenciales incorrectas");
                return false;
            }

            // o localStorage
            await AsyncStorage.setItem("access_token", res.data.token);
            await AsyncStorage.setItem("refresh_token", res.data.refreshToken);

            alert("Sesión iniciada correctamente");
            return true;
        } catch (error) {
            alert(error);
            return false;
        }
    };

    const validate = () => {
        if (!email.includes("@")) {
            alert("Correo electrónico no válido.");
            return false;
        }
        if (password.length < 6) {
            alert("La contraseña debe tener mínimo 6 caracteres.");
            return false;
        }
        return true;
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        iniciarSesion,
        loading
    };
};

export default LoginViewModel;