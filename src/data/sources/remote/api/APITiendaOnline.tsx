import axios from "axios";
import {Platform} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = Platform.OS === "android"
    ? "http://10.0.2.2:8000/api"
    : "http://localhost:8000/api";

const APITiendaOnline = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    }
});

APITiendaOnline.interceptors.request.use(
    async (config) => {

        const excludedRoutes = ["/login/", "/register/", "/home/"];

        const isExcluded = excludedRoutes.some(route =>
            config.url?.includes(route)
        );

        if (!isExcluded) {
            const token = await AsyncStorage.getItem("access_token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    }
);

export default APITiendaOnline;
