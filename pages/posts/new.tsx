import React, { useCallback } from 'react'
import Layout from '../../components/Layout'
import { Formik, Form, FormikHelpers, FormikErrors } from 'formik';
import { PostType } from '../../interfaces';
import { FormikTextField } from 'formik-material-fields';
import { Grid, Button, Typography } from '@material-ui/core';
import { addPostAsync } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import { PostState } from '../../store/types';

interface Props {
  addPostAsync: (formData: PostType) => void,
  post: {
    postAddLoading: boolean,
    postAddError: string
  }
}

const AddNewPost: React.FC<Props> = ({ 
  addPostAsync, post: { postAddLoading, postAddError }
}) => {
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
      <Typography variant="h5" component="h2">Add new post</Typography>
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

const mapStateToProps = (state: PostState) => {
  return {
    post: {
      addPostLoading: state.addPostLoading,
      addPostError: state.addPostError
    }
  }
}

export default connect(mapStateToProps, { addPostAsync })(AddNewPost);
