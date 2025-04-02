export const validatePassword = (pass)=>{
    const regex = /^\S{6,12}$/
    return regex.test(pass)
}

export const validatePasswordMessage = ' La contraseña debe tener entre 6 y 12 caracteres y sin espacios.'