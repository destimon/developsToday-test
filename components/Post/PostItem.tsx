import React from 'react'
import { PostType } from '../../interfaces'
import ListItem from '@material-ui/core/ListItem';

interface Props {
  post: PostType
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <ListItem>
      { post.title }
    </ListItem>
  )
}

export default PostItem
