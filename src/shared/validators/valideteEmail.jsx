export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidateMessage = 'Ingresa una direccion de correo válida, BRO.'