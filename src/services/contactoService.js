import axiosInstance from "@/helpers/axiosIntace";



const registrarContacto = async (datos) => {


    const respuesta = await axiosInstance.post('/contactos', datos)

    // console.log(respuesta);

    return respuesta.data;

}


export {
    registrarContacto,

}