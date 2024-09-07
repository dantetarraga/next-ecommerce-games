'use client'

import { Form, FormButton, FormGroup, FormInput } from 'semantic-ui-react'
import { useFormik } from 'formik'
import registerSchema from '../../schemas/registerSchema'

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      name: '',
      password: ''
    },
    validationSchema: registerSchema,
    validateOnChange: false,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup widths='equal'>
        <FormInput
          fluid
          name='email'
          type='text'
          placeholder='Correo electronico'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <FormInput
          fluid
          name='username'
          type='text'
          placeholder='Nombre de usuario'
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
      </FormGroup>

      <FormGroup widths='equal'>
        <FormInput
          fluid
          name='name'
          type='text'
          placeholder='Nombre y apellidos'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <FormInput
          fluid
          name='password'
          type='password'
          placeholder='Contraseña'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </FormGroup>

      <FormButton fluid primary type='submit' loading={formik.isSubmitting}>
        Registrarse
      </FormButton>
    </Form>
  )
}

export default RegisterForm
