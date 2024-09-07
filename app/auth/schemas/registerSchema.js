import { object, string } from 'yup'

const registerSchema = object().shape({
  email: string().email('Correo electronico invalido.').required('Correo electronico requerido.'),
  username: string().required('Nombre de usuario requerido.'),
  name: string().required('Nombre y apellidos requeridos.'),
  password: string().required('Contraseña requerida.')
})

export default registerSchema
