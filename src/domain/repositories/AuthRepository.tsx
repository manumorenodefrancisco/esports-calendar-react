import {LoginData, UserInterface} from "../entities/login-interface";
import {DataResponseAPI} from "../../data/sources/remote/models/DataResponseAPI";

export interface AuthRepository {

    //login(data: LoginData): Promise<UserInterface | void>
    // login(data: LoginData): Promise<DataResponseAPI>
    register(data: any): Promise<DataResponseAPI>

}