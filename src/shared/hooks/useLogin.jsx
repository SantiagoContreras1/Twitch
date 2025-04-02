import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Direcciona a otras rutas
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast"; // Muestra mensajes
import { login } from "../../service/api";

export const useLogin = ()=>{
    const [isLoading, setIsLoading] = useState(false)//Ver si esta cargando o aun no
    const navigate = useNavigate()


    const login = async (email,password)=>{
        setIsLoading(true)
        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)

        if (response.error){
            return toast.error(response.error?.response?.data || ' Hubo un error al iniciar sesion pelotudito.')
        }

        const {userDetails} = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))
        navigate('/')
    }

    return{
        login,
        isLoading
    }

}