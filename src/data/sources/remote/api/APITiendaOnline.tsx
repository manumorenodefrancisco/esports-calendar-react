import axios from "axios";
import {Platform} from "react-native";

const baseURL = Platform.OS === "android"
    ? "http://10.0.2.2:8000/api"
    : "http://localhost:8000/api";

const APITiendaOnline = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    }
});

export default APITiendaOnline;
