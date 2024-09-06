'use client'

import { Form, FormButton, FormGroup, FormInput } from 'semantic-ui-react'

const RegisterForm = () => {
  return (
    <Form>
      <FormGroup widths='equal'>
        <FormInput fluid name='email' type='text' placeholder='Correo electronico' />
        <FormInput fluid name='username' type='text' placeholder='Nombre de usuario' />
      </FormGroup>

      <FormGroup widths='equal'>
        <FormInput fluid name='name' type='text' placeholder='Nombre y apellidos' />
        <FormInput fluid name='password' type='password' placeholder='Contraseña' />
      </FormGroup>

      <FormButton fluid primary type='submit'>Registrarse</FormButton>
    </Form>
  )
}

export default RegisterForm
