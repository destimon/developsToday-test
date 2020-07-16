import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux';
import { getPostsAsync } from '../../store/actions/postActions'
import { PostType } from '../../interfaces';
import PostItem from './PostItem';
import { List } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { takeRight, reverse } from 'lodash/fp';

interface Props {
  getPostsAsync: () => void,
  post: {
    posts: PostType[],
    postsLoading: boolean
  }
}

const Posts: React.FC<Props> = ({
  getPostsAsync,
  post: { posts, postsLoading }
}) => {


  useEffect(() => {
    getPostsAsync();
  }, [])

  const takeLatest = useMemo(() => {
    return reverse(takeRight(8, posts));
  }, [posts])

  if (postsLoading) return <CircularProgress />

  return (
    <Grid item md={8}>
      <List>
        {
          takeLatest.map((post: PostType) => <PostItem key={post.id} post={post} />)
        }
      </List>
    </Grid>
  )
}

const mapStateToProps = (state: Props) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, { getPostsAsync })(Posts)
