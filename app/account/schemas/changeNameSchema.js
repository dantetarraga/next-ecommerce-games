const { object, string } = require('yup')

export const changeNameSchema = object().shape({
  name: string().required('Nombre requerido.')
})
