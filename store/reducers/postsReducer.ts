import { PostsActionTypes } from '../types';

import {
  State, GET_POSTS
} from '../types';

const postState: State = {
  posts: []
}

const postsReducer = (state: State = postState, action: PostsActionTypes) => {
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