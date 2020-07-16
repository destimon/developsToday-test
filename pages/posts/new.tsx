import React, { useCallback, useEffect } from 'react'
import Layout from '../../components/layouts/DefaultLayout'
import { Formik, Form, FormikHelpers, FormikErrors } from 'formik';
import { PostType } from '../../interfaces';
import { FormikTextField } from 'formik-material-fields';
import { Grid, Button, Typography } from '@material-ui/core';
import { addPostAsync, clearAddPostResult } from '../../store/actions/postActions';
import { connect } from 'react-redux';

interface Props {
  addPostAsync: (formData: PostType) => void,
  clearAddPostResult: () => void,
  post: {
    addPostLoading: boolean,
    addPostResult: string
  }
}

const AddNewPost: React.FC<Props> = ({ 
  addPostAsync, clearAddPostResult, post: { addPostLoading, addPostResult }
}) => {
  const initialValues: PostType = {
    title: '',
    body: '',
    author: '',
  }

  useEffect(() => {
    return (() => {
      clearAddPostResult();
    })
  }, [])

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
          <Typography variant="h5">{ addPostResult }</Typography>
        </Grid>
      </Formik>
    </Layout>
  )
}

const mapStateToProps = (state: Props) => {
  return {
    post: state.post
  };
}
 
export default connect(mapStateToProps, { addPostAsync, clearAddPostResult })(AddNewPost);
