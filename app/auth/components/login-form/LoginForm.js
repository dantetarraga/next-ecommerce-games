'use client'

import { useFormik } from 'formik'
import { Button, Form, FormInput } from 'semantic-ui-react'
import { loginSchema } from '../../schemas'

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: ''
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormInput
        name='identifier'
        type='text'
        placeholder='Correo electronico o nombre de usuario'
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />

      <FormInput
        name='password'
        type='password'
        placeholder='Contraseña'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Button fluid primary type='submit' loading={formik.isSubmitting}>Iniciar sesión</Button>
    </Form>
  )
}

export default LoginForm
