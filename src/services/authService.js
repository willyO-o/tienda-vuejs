import axiosInstance from "@/helpers/axiosIntace";


const login = async (datosUsuario) => {

    const respuesta = await axiosInstance.post('/auth/login', datosUsuario);

    return respuesta.data;

}

const getDatosUsuario = async () => {

    const respuesta = await axiosInstance.get('auth/me')

    return respuesta.data;

}

const logout = async () => {
    const respuesta = await axiosInstance.post('auth/logout', {
        refresh_token: localStorage.getItem('refreshToken')
    })

    return respuesta.data;
}

export {
    login,
    getDatosUsuario,
    logout
}