import * as yup from 'yup';

export const contactoValidationSchema = yup.object({
    nombre_completo: yup.string().required('El nombre completo es obligatorio'),
    correo: yup.string().email('Ingresa un correo válido').required('Ingresa tu coreo electronico'),
    mensaje: yup.string().min(10, 'Ingresa almenos 10 caracteres').required('El mensaje es obligatorio'),
})
