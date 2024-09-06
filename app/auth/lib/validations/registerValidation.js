import { string } from 'yup'

export const initialValues = () => ({
  email: '',
  username: '',
  name: '',
  password: ''
})

export const validationSchema = () => ({
  email: string().email().required(),
  username: string().required(),
  name: string().required(),
  password: string().required()
})
