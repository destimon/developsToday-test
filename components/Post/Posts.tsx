import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { StoreState } from '../../store/types';
import { getPostsAsync } from '../../store/actions/postActions'
import { PostType } from '../../interfaces';
import PostItem from './PostItem';
import { List } from '@material-ui/core';

interface Props {
  getPostsAsync: () => void,
  post: {
    posts: PostType[],
    postsLoading: boolean
  }
}

const Posts = (props: Props) => {
  const {
    getPostsAsync,
    post: { posts, postsLoading }
  } = props;

  useEffect(() => {
    getPostsAsync();
    console.log(postsLoading)
  }, [])

  if (postsLoading) return <p>Loading...</p>

  return (
    <List>
      {
        posts.map((post: PostType, index: number) => <PostItem key={index} post={post} />)
      }
    </List>
  )
}

const mapStateToProps = (state: StoreState) => {
  console.log(state)
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, { getPostsAsync })(Posts)
