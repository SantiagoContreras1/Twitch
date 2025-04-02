export const validationAvatarUrl = (url)=>{
    const regex = /^(ftp|http|https):\/\/[^ "]+$/ // Formato de imagen
    return regex.test(url)
}

export const avatarValidationMessage = 'Esta no es una URL valida boludito.'