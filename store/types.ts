import {
  PostType
} from '../interfaces/index';

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS_LOADING = 'SET_POSTS_LOADING';

export interface PostState {
  posts: PostType[],
  postsLoading: boolean
}

export interface StoreState {
  post: {
    posts: PostType[]
  } | {}
}

interface GetPosts {
  type: typeof GET_POSTS,
  payload: PostType[]
}

interface SetPostsLoading {
  type: typeof SET_POSTS_LOADING
}

export type PostActionTypes = GetPosts | SetPostsLoading;