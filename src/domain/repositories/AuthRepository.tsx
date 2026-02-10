import {LoginData, UserInterface} from "../entities/login-interface";

export interface AuthRepository {

    login(data: LoginData): Promise<UserInterface | void>

}