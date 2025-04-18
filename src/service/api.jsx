<<<<<<< HEAD
import axios from "axios";

// Nos va a servir para hacer peticiones http
const apiClient = axios.create({
    baseURL: "http://127.0.0.0:8080/twitch/v1",
    timeout: 20000
})


export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    }catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post("/auth/register",data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
=======
import axios from "axios";

// Nos va a servir para hacer peticiones http
const apiClient = axios.create({
    baseURL: "http://127.0.0.0:8000/twitch/v1",
    timeout: 10000
})



export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login',data)
    } catch (e) {
        return{
            status: false,
            message: e.message
        }
    }
>>>>>>> 677a8fb (Avance de Twitch)
}