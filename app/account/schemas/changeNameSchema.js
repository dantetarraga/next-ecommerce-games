const { object, string } = require('yup')

export const changeNameSchema = object().shape({
  firstName: string().required('El nombre es requerido'),
  lastName: string().required('El apellido es requerido')
})
