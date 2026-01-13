import axiosInstance from '@/helpers/axiosIntace'




const getProductos = async (parametros = { limit: 10, page: 1 }) => {


    const respuesta = await axiosInstance.get('productos', {
        params: parametros
    })

    return respuesta.data

}

const getProductoId = async (idProcucto) => {

    const respuesta = await axiosInstance.get('productos/' + idProcucto)

    return respuesta.data
}


const setProducto = async (datos) => {

    const respuesta = await axiosInstance.post('productos', datos)

    return respuesta.data

}

const updateProducto = async (datos, idProducto) => {

    const respuesta = await axiosInstance.put('productos/' + idProducto, datos)

    return respuesta.data

}




const deleteProducto = async (idProcucto) => {
    const respuesta = await axiosInstance.delete('productos/' + idProcucto)

    return respuesta.data
}



export {
    getProductos,
    getProductoId,
    setProducto,
    deleteProducto,
    updateProducto
}



