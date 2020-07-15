import React, { useCallback } from 'react'
import { PostType } from '../../interfaces'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

interface Props {
  post: PostType
}

const PostItem: React.FC<Props> = ({ post }) => {
  const selectPost = useCallback(() => {
    Router.push(`/posts/${post.id}`);
  }, [])

  return (
    <ListItem button onClick={selectPost}>
      <Typography variant="h5" component="h2">
        { post.title }
      </Typography>
    </ListItem>
  )
}

export default PostItem
