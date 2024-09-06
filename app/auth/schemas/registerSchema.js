import { object, string } from 'yup'

const registerSchema = object().shape({
  email: string().email().required(),
  username: string().required(),
  name: string().required(),
  password: string().required()
})

export default registerSchema
