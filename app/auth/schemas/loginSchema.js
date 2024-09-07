import { object, string } from 'yup'

const loginSchema = object().shape({
  identifier: string().required('Correo electronico o nombre de usuario requerido.'),
  password: string().required('Contraseña requerida.')
})

export default loginSchema
