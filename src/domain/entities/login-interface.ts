// Estructura de los datos que enviamos al Backend
export type LoginData = {
    email: string,
    password: string,
}

// Convertimos y estructuramos los datos que recibimos del Backend
export interface UserInterface {
    id: number;
    email: string;
    username: string;
    token: string;
    refresh_token: string;
}

