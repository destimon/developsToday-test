import React from 'react'
import { PostType } from '../../interfaces'
import ListItem from '@material-ui/core/ListItem';
import { Divider } from '@material-ui/core';

interface Props {
  post: PostType
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <ListItem button >
      { post.title }
    </ListItem>
  )
}

export default PostItem
