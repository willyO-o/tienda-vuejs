import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

axiosInstance.interceptors.request.use(configuracion => {

    const token = localStorage.getItem('token')

    if (token) {
        configuracion.headers.Authorization = 'Bearer ' + token
    }

    return configuracion

})


axiosInstance.interceptors.response.use(
    respuesta => respuesta,
    async error => {

        const requestOriginal = error.config;
        if (error.response.status == 401 && !requestOriginal.reiterado) {

            requestOriginal.reiterado = true

            try {
                const refreshToken = localStorage.getItem('refreshToken')

                const respuesta = await axiosInstance.post('/auth/refresh', {
                    refresh_token: refreshToken
                })

                const nuevoAccessToken = respuesta.data.access_token.token

                localStorage.setItem('token', nuevoAccessToken)

                requestOriginal.headers.Authorization = 'Bearer ' + nuevoAccessToken

                return axiosInstance(requestOriginal);

            } catch (errorRefresh) {

                localStorage.removeItem('token')
                localStorage.removeItem('refreshToken')
                window.location.href = '/login'
            }

        }


        return Promise.reject(error);

    }
)







export default axiosInstance
