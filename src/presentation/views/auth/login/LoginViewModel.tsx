import {useState} from "react";
import {LoginData} from "../../../../domain/entities/login-interface";
import {loginUseCase} from "../../../../domain/useCases/loginUseCase";


const LoginViewModel = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const iniciarSesion = async () => {

        const data: LoginData = {
            email: email,
            password: password
        };

        if (validate()) {
            const res: any = await loginUseCase(data)
            if (res && res.success === false) {
                alert("Error al iniciar sesión")
                return
            }
            alert("Sesión iniciada")
        }
    }

    const validate = () => {
        if (!email.includes("@")) {
            alert("Correo electrónico no válido. hace falta un @.")
            return false;
        }
        if (password.length < 6) {
            alert("La contraseña debe de tener mín. 6 caracteres.")
            return false;
        }
        return true;
    }


    return {
        email,
        password,
        setEmail,
        setPassword,
        iniciarSesion
    }

}

export default LoginViewModel;