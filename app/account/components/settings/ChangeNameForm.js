import { Form, FormButton, FormInput } from 'semantic-ui-react'
import styles from './ChangeNameForm.module.scss'
import { changeNameSchema } from '../../schemas/changeNameSchema'
import { useFormik } from 'formik'
import { useAuthStore } from '@/store'
import { User } from '@/app/api'

const ChangeNameForm = () => {
  // const onUpdateUser = useAuthStore((state) => state.updateUserInfo)
  const user = useAuthStore((state) => state.user)
  const formik = useFormik({
    initialValues: {
      firstname: user.firstname,
      lastname: user.lastname
    },
    validationSchema: changeNameSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const result = await User.updateMe(user.id, formValue)
        console.log(result)
      } catch (error) {
        console.error('Error during update user:', error)
      }
    }
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>

      <div className={styles.content}>
        <FormInput
          name='firstname'
          placeholder='Nombre y apellidos'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />
        <FormInput
          name='lastname'
          placeholder='Apellidos'
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />
        <FormButton type='submit' loading={formik.isSubmitting}>Guardar</FormButton>
      </div>
    </Form>
  )
}

export default ChangeNameForm
