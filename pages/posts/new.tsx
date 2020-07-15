import React, { useCallback } from 'react'
import Layout from '../../components/Layout'
import { Formik, Form, FormikHelpers, FormikErrors } from 'formik';
import { PostType } from '../../interfaces';
import { FormikTextField } from 'formik-material-fields';
import { Grid, Button } from '@material-ui/core';
import { addPostAsync } from '../../store/actions/postActions';
import { connect } from 'react-redux';

interface Props {
  addPostAsync: (formData: PostType) => void
}

const AddNewPost: React.FC<Props> = ({ addPostAsync }) => {
  const initialValues: PostType = {
    title: '',
    body: '',
    author: '',
  }

  const validateForm = useCallback((values: PostType) => {
    const errors: FormikErrors<{ title: string, body: string}>  = {};
    if (!values.title) {
      errors.title = '* Title is required!'
    }
    if (!values.body) {
      errors.body = '* Body is required!';
    }
    return errors;
  }, [])

  return (
    <Layout>
      <h1>Add new post</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={(
          values: PostType,
          { setSubmitting }: FormikHelpers<PostType>
        ) => {
          addPostAsync(values);
          setSubmitting(false);
        }}
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
        </Grid>
      </Formik>
    </Layout>
  )
}

export default connect(null, { addPostAsync })(AddNewPost);
