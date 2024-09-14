import { Form, FormButton, FormInput } from 'semantic-ui-react'
import styles from './ChangeNameForm.module.scss'
import { changeNameSchema } from '../../schemas/changeNameSchema'
import { useFormik } from 'formik'
import { useAuthStore } from '@/store'

const ChangeNameForm = () => {
  const onUpdateUser = useAuthStore((state) => state.updateUserInfo)
  const user = useAuthStore((state) => state.user)

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName
    },
    validationSchema: changeNameSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    }
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>

      <div className={styles.content}>
        <FormInput
          name='firstName'
          placeholder='Nombre y apellidos'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <FormInput
          name='lastName'
          placeholder='Apellidos'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.errors.lastName}
        />
        <FormButton type='submit' loading={formik.isSubmitting}>Guardar</FormButton>
      </div>
    </Form>
  )
}

export default ChangeNameForm
