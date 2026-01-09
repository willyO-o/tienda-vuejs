import axiosInstance from "@/helpers/axiosIntace";


const getCategorias = async () => {

    const respuesta = await axiosInstance.get('/categorias');
    return respuesta.data;

}


export {
    getCategorias,

}