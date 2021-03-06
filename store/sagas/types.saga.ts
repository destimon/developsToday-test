import { PostType } from "../../interfaces";

// Variables ---

export const GET_POSTS_ASYNC = "GET_POSTS_ASYNC";
export const ADD_POST_ASYNC = "ADD_POST_ASYNC";

// Actions ---

export interface AddPostAsync {
  type: typeof ADD_POST_ASYNC;
  payload: PostType;
}

interface GetPostsAsync {
  type: typeof GET_POSTS_ASYNC;
}

export type PostActionSagaTypes = GetPostsAsync | AddPostAsync;
