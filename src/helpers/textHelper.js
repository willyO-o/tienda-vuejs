


const extractoTexto = (texto, longitud = 50) => {

    if (texto.length <= longitud) {
        return texto;
    }

    return texto.substring(0, longitud) + '...';

}



export {
    extractoTexto,

}