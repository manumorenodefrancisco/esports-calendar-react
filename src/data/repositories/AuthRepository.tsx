import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {LoginData, UserInterface} from "../../domain/entities/login-interface";
import {DataResponseAPI} from "../sources/remote/models/DataResponseAPI";
import APITiendaOnline from "../sources/remote/api/APITiendaOnline";
import {AxiosError} from "axios";


export class AuthRepositoryImpl implements AuthRepository {

    async login(data: LoginData): Promise<DataResponseAPI> {
        try {
            const response = await APITiendaOnline.post("/login/", data)
            return response.data;
            //return Promise.resolve(response.data)
        }
        catch (error) {
            let e = (error as AxiosError)
            return e.response?.data as DataResponseAPI;
            //return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as DataResponseAPI);
        }
    }

    async register(data: any): Promise<DataResponseAPI> {
        try {
            const response = await APITiendaOnline.post("/registro/", data)
            return Promise.resolve(response.data)
        }
        catch (error) {
            let e = (error as AxiosError)
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as DataResponseAPI);
        }
    }

}