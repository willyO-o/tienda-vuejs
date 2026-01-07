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


export default axiosInstance
