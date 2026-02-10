import {AuthRepositoryImpl} from "../../data/repositories/AuthRepository";
import {LoginData} from "../entities/login-interface";

const {login} = new AuthRepositoryImpl();

export const loginUseCase = async (data: LoginData) => {
    return await login(data)
}