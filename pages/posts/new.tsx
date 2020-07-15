import React, { useCallback } from 'react'
import Layout from '../../components/Layout'
import Router from 'next/router';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { PostType } from '../../interfaces';

const AddNewPost: React.FC = () => {
  const initialValues: PostType = {
    id: 0,
    title: '',
    body: '',
    author: '',
    date: new Date()
  }

  const validateForm = useCallback((values: PostType) => {
    const errors = {
      title: '',
      body: ''
    };
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Layout>
  )
}

export default AddNewPost
