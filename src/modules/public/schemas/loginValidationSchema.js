import * as yup from 'yup'


export const loginValidationSchema = yup.object({
    email: yup.string().email('Ingresa un correo válido').required('El correo es obligatorio'),
    password: yup.string().required('la contraseña es obligatoria'),
})