import React, { useEffect, useMemo } from 'react'
import { takeRight, reverse } from 'lodash/fp'
import Posts from '../components/Post/Posts'
import { PostType } from '../interfaces'
import { connect } from 'react-redux'
import { getPostsAsync } from '../store/actions/postActions'

interface Props {
  getPostsAsync: () => void,
  post: {
    posts: PostType[],
    postsLoading: boolean
  }
}

const PostsContainer: React.FC<Props> = ({
  getPostsAsync, post: { posts, postsLoading }
}) => {
  useEffect(() => {
    getPostsAsync()
  }, [])

  const takeLatestPosts = useMemo(() => {
    return reverse(takeRight(8, posts))
  }, [posts])

  return (
    <Posts
      postsLoading={postsLoading}
      takeLatestPosts={takeLatestPosts}
    />
  )
}

const mapStateToProps = (state: Props) => ({ post: state.post })

export default connect(mapStateToProps, { getPostsAsync })(PostsContainer)
