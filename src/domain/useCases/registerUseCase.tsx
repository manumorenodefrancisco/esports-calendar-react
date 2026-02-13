import {AuthRepositoryImpl} from "../../data/repositories/AuthRepository";


const {register} = new AuthRepositoryImpl();

export const RegisterUseCase = async (data: any) => {
    return await register(data)
}
