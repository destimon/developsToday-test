import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { State, StoreState } from '../../store/types';
import { getPostsAsync } from '../../store/actions/postActions'
import { Post } from '../../interfaces';

interface Props {
  getPostsAsync: () => void,
  post: {
    posts: Post[]
  }
}

const Posts = (props: Props) => {
  const {
    getPostsAsync,
    post: { posts }
  } = props;

  useEffect(() => {
    getPostsAsync();
  }, [])

  return (
    <div>
      {
        posts.map((post: Post) => <p>{post.title}</p>)
      }
    </div>
  )
}

const mapStateToProps = (state: StoreState) => {
  console.log(state)
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, { getPostsAsync })(Posts)
