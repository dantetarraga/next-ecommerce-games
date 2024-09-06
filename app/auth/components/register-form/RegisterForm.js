'use client'

import { Form, FormButton, FormGroup, FormInput } from 'semantic-ui-react'
import { initialValues, validationSchema } from '../../lib'
import { useFormik } from 'formik'

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (values) => {
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
        />
        <FormInput
          fluid
          name='username'
          type='text'
          placeholder='Nombre de usuario'
          value={formik.values.username}
        />
      </FormGroup>

      <FormGroup widths='equal'>
        <FormInput
          fluid
          name='name'
          type='text'
          placeholder='Nombre y apellidos'
          value={formik.values.name}
        />
        <FormInput
          fluid
          name='password'
          type='password'
          placeholder='Contraseña'
          value={formik.values.password}
        />
      </FormGroup>

      <FormButton fluid primary type='submit'>
        Registrarse
      </FormButton>
    </Form>
  )
}

export default RegisterForm
