import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios';
import { PostType } from '../../interfaces';

interface Props {
  post: PostType
}

const post_id: React.FC<Props> = ({ post }) => {
  useEffect(() => {
    console.log(post)
  }, [])

  if (!post) {
    return <p>Post doesn't exist</p>
  }

  return (
    <div>
      <h2>[{post.id}] {post.title}</h2>
    </div>
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
