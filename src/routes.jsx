import { DashboardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"

const routes =[
    {path: '/auth', element: <Auth/> }, // Se completa la url 
    {path: '/*', element: <DashboardPage/>} // Lo primero que aparece es el dash
]

export default routes