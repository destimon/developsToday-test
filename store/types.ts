import {
  PostType
} from '../interfaces/index';

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS_LOADING = 'SET_POSTS_LOADING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const ADD_POST = 'ADD_POST';
export const SET_ADD_POST_LOADING = 'SET_ADD_POST_LOADING';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const CLEAR_ADD_POST_RESULT = 'CLEAR_ADD_POST_RESULT';

export interface PostState {
  posts: PostType[],
  postsLoading: boolean,
  addPostLoading: boolean,
  addPostResult: string
}

export interface StoreState {
  post: {
    posts: PostType[]
  } | {}
}

interface ClearAddPostResult {
  type: typeof CLEAR_ADD_POST_RESULT
}

interface AddPost {
  type: typeof ADD_POST,
  payload: PostType
}

interface SetAddPostLoading {
  type: typeof SET_ADD_POST_LOADING
}

interface AddPostSuccess {
  type: typeof ADD_POST_SUCCESS
}

interface AddPostFailure {
  type: typeof ADD_POST_FAILURE
}

interface GetPosts {
  type: typeof GET_POSTS,
  payload: PostType[]
}

interface SetPostsLoading {
  type: typeof SET_POSTS_LOADING
}

export type PostActionTypes = 
GetPosts 
| SetPostsLoading 
| AddPost
| AddPostSuccess
| AddPostFailure
| SetAddPostLoading
| ClearAddPostResult;