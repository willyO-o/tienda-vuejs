

const convertirImagen = (textoJson) => {
    const imagenes = JSON.parse(textoJson) || []
    return imagenes
}


const primeraImagen = (textoJson) => {
    const imagenes = convertirImagen(textoJson)
    return imagenes[0] || ''

}


export {
    convertirImagen,
    primeraImagen,
}