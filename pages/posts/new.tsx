import React from 'react'
import Layout from '../../components/layouts/DefaultLayout'
import AddPostFromContainer from '../../containers/AddPostFormContainer'

const AddNewPost: React.FC = () => {
  return (
    <Layout>
      <AddPostFromContainer />
    </Layout>
  )
}

export default AddNewPost;
