import axiosInstance from '@/helpers/axiosIntace'




const getProductos = async (parametros = { limit: 10, page: 1 }) => {


    const respuesta = await axiosInstance.get('productos', {
        params: parametros
    })

    return respuesta.data

}



export {
    getProductos,
}



