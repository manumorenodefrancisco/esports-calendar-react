import axios from "axios";

// 10.0.2.2 -> Localhost con android.
// localhost o 127.0.0.1 -> Localhost otro SO que no sea android
// 192.168.1.165 -> Poner la IP funciona en ambas plataformas

const APITiendaOnline = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    }
})

export default APITiendaOnline;