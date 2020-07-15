import {
  Post
} from '../interfaces/index';

export const GET_POSTS = 'GET_POSTS';

export interface State {
  posts: Post[]
}

export interface StoreState {
  post: {
    posts: Post[]
  } | {}
}

interface GetPosts {
  type: typeof GET_POSTS,
  payload: Post[]
}

export type PostActionTypes = GetPosts;