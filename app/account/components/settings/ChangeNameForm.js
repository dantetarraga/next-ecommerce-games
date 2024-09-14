import { Form, FormButton, FormInput } from 'semantic-ui-react'
import styles from './ChangeNameForm.module.scss'
import { changeNameSchema } from '../../schemas/changeNameSchema'
import { useFormik } from 'formik'

const ChangeNameForm = () => {
  const formik = useFormik({
    initialValues: {
      name: ''
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
          name='name'
          placeholder='Nombre y apellidos'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <FormButton type='submit' loading={formik.isSubmitting}>Guardar</FormButton>
      </div>
    </Form>
  )
}

export default ChangeNameForm
