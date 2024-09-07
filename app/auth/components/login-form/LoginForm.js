'use client'

import { useFormik } from 'formik'
import { Form, FormButton, FormInput } from 'semantic-ui-react'
import { loginSchema } from '../../schemas'
import { useRouter } from 'next/navigation'
import { Auth } from '@/api'

const LoginForm = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: ''
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      await Auth.login(formValue)
      router.push('/')
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

      <FormButton fluid primary type='submit' loading={formik.isSubmitting}>
        Iniciar sesión
      </FormButton>
    </Form>
  )
}

export default LoginForm
