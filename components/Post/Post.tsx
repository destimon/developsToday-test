import React from 'react'
import { PostType } from '../../interfaces'
import { Typography } from '@material-ui/core'
import { Content } from './Post.styled'

interface Props {
  post: PostType
}

const Post: React.FC<Props> = ({
  post: {
    id, title, body, author, date
  }
}) => {
  return (
    <Content>
      <Typography variant="h3">
        Post #{id}
      </Typography>
      <Typography variant="h5">
        Title: {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        { body }
      </Typography>
      <Typography variant="body2" gutterBottom>
        Author: { author || 'No author avaliable' }
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        { date || 'No date avalilable'}
      </Typography>
    </Content>
  )
}

export default Post
