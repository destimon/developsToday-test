import React from 'react'
import { FormikTextField } from 'formik-material-fields'
import { Grid, Button, Typography } from '@material-ui/core'
import { Formik, Form, FormikHelpers, FormikErrors } from 'formik'
import { PostType } from '../../interfaces'
import { FormStyle } from './AddPostForm.styled'

interface Props {
  initialValues: PostType,
  validateForm: (values: PostType) => FormikErrors<{
    title: string;
    body: string;
  }>,
  formSubmit: (values: PostType, { setSubmitting }: FormikHelpers<PostType>) => void,
  addPostLoading: boolean,
  addPostResult: string
}

const AddPostForm: React.FC<Props> = ({
  initialValues, validateForm, addPostLoading,
  addPostResult, formSubmit
}) => {
  return (
    <FormStyle>
      <Typography variant="h5" component="h2">Add new post</Typography>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={formSubmit}
      >
        <Grid item md={4}>
          <Form>
            <FormikTextField
              name="title"
              label="Title"
              margin="normal"
              fullWidth
            />
            <FormikTextField
              name="body"
              label="Body"
              margin="normal"
              fullWidth
            />
            <FormikTextField
              name="author"
              label="Author"
              margin="normal"
              fullWidth
            />

            <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
          </Form>
          <Typography variant="h5">
            { (addPostLoading) ? ('Processing') : (addPostResult) }
          </Typography>
        </Grid>
      </Formik>
    </FormStyle>
  )
}

export default (AddPostForm)
