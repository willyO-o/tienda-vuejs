import * as yup from 'yup';


export const productoValidationSchema = yup.object({
    titulo: yup.string().required('El título es obligatorio').min(5, 'El título debe tener al menos 5 caracteres'),
    precio: yup.number().required('el precio es obligatorio').min(0, 'El precio no puede ser negativo'),
    stock: yup.number("El stock debe ser un valor numerico").required('el stock es obligatorio').min(0, 'El stock no puede ser negativo'),
    categoria_id: yup.number().required('Debe seleccionar una categoría').min(1, 'Debe seleccionar una categoría válida'),
})