import React, { useEffect } from 'react'

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

export async function getServerSideProps({ params: { post_id } }) {
  return {
    props: { post_id }, // will be passed to the page component as props
  }
}

export default post_id
