import { PostActionTypes, GET_POSTS, SET_POSTS_LOADING, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE, SET_ADD_POST_LOADING } from "../types"
import { GET_POSTS_ASYNC, PostActionSagaTypes, ADD_POST_ASYNC } from "../sagas/types.saga"
import { PostType } from "../../interfaces"

export const getPosts = (posts: PostType[]): PostActionTypes => ({ type: GET_POSTS, payload: posts })
export const getPostsAsync = (): PostActionSagaTypes => ({ type: GET_POSTS_ASYNC })
export const setPostsLoading = (): PostActionTypes => ({ type: SET_POSTS_LOADING })

export const addPost = (post: PostType): PostActionTypes => ({ type: ADD_POST, payload: post });
export const addPostAsync = (post: PostType): PostActionSagaTypes => ({ type: ADD_POST_ASYNC, payload: post });
export const setAddPostLoading = (): PostActionTypes => ({ type: SET_ADD_POST_LOADING })
export const addPostSuccess = (): PostActionTypes => ({ type: ADD_POST_SUCCESS });
export const addPostFailure = (): PostActionTypes => ({ type: ADD_POST_FAILURE });