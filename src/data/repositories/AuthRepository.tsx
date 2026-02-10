import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {LoginData, UserInterface} from "../../domain/entities/login-interface";


export class AuthRepositoryImpl implements AuthRepository {


    // @ts-ignore
    login(data: LoginData): Promise<UserInterface | void> {
        console.log("hola mundo")
    }

}