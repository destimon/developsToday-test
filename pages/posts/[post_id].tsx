import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'

interface Props {
  post_id: string
}

const post_id: React.FC<Props> = ({ post_id }) => {
  useEffect(() => {
    console.log(post_id)
  }, [])

  return (
    <div>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params) {
    return {
      props: { post_id: context.params.post_id }, // will be passed to the page component as props
    }
  }
  return {
    props: {}
  }
}

export default post_id
