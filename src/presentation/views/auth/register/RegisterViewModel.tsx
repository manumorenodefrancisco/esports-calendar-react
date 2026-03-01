import {useState} from "react";
import {RegisterUseCase} from "../../../../domain/useCases/registerUseCase";

type RegisterData = {
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string;
    address: string;
}

const RegisterViewModel = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const register = async () => {
        const data: RegisterData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            address: address,
            phone: phone,
        }
        if (validate()) {
            const res: any = await RegisterUseCase(data)
            if (res && res.success === false) {
                alert("Error al registrarse")
                return
            }
            alert("Registrado")
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
        if (password !== confirmPassword) {
            alert("La contraseñas no coinciden.")
            return false;
        }
        return true;
    }

    return {
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
    }

}

export default RegisterViewModel;