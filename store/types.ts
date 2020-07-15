import {
  Post
} from '../interfaces/index';

export const GET_POSTS = 'GET_POSTS';

export interface State {
  posts: Post[]
}

interface GetPosts {
  type: typeof GET_POSTS
}

export type PostActionTypes = GetPosts;