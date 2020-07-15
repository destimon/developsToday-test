import { PostsActionTypes } from '../types';

import {
  State, GET_POSTS
} from '../types';

export const postsState: State = {
  posts: []
}

const postsReducer = (state: State = postsState, action: PostsActionTypes) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state
      };
    default:
      return state
  }
};

export default postsReducer;