import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios';
import { PostType } from '../../interfaces';
import Layout from '../../components/layouts/DefaultLayout';
import { Typography } from '@material-ui/core';
import Post from '../../components/Post/Post';

interface Props {
  post: PostType
}

const post_id: React.FC<Props> = ({ post }) => {
  return (
    (post) ? 
    (
      <Layout>
        <Post post={post} />
      </Layout>
    )
    :
    (<Typography>Post doesn't exist</Typography>)
  )
}

// As example I've decided to make request from server side w/o redux
// insted of client-side redux
// Not sure is this required
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    if (!context.params) return { props: { post: null }}
    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${context.params.post_id}?_embed=comments`)

    return {
      props: {
        post: res.data
      }
    }
  } catch {
    return { props: { post: null }}
  }
}

export default post_id
