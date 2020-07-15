import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { StoreState } from '../../store/types';
import { getPostsAsync } from '../../store/actions/postActions'
import { PostType } from '../../interfaces';
import PostItem from './PostItem';
import { List } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

interface Props {
  getPostsAsync: () => void,
  post: {
    posts: PostType[],
    postsLoading: boolean
  }
}

const Posts: React.FC<Props> = (props) => {
  const {
    getPostsAsync,
    post: { posts, postsLoading }
  } = props;

  useEffect(() => {
    getPostsAsync();
  }, [])

  if (postsLoading) return <p>Loading...</p>

  return (
    <Grid item md={4}>
      <List>
        {
          posts.map((post: PostType, index: number) => <PostItem key={index} post={post} />)
        }
      </List>
    </Grid>
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, { getPostsAsync })(Posts)
