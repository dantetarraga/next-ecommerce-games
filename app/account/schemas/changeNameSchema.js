const { object, string } = require('yup')

export const changeNameSchema = object().shape({
  firstname: string().required('El nombre es requerido'),
  lastname: string().required('El apellido es requerido')
})
