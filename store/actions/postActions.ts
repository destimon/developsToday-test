import { PostActionTypes, GET_POSTS, SET_POSTS_LOADING } from "../types"
import { GET_POSTS_ASYNC, PostActionSagaTypes } from "../sagas/types.saga"
import { Post } from "../../interfaces"

export const getPosts = (posts: Post[]): PostActionTypes => ({ type: GET_POSTS, payload: posts })
export const getPostsAsync = (): PostActionSagaTypes => ({ type: GET_POSTS_ASYNC })
export const setPostsLoading = (): PostActionTypes => ({ type: SET_POSTS_LOADING })