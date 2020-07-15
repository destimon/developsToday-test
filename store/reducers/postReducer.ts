import { PostActionTypes } from '../types';

import {
  State, GET_POSTS
} from '../types';

const postState: State = {
  posts: []
}

const postReducer = (state: State = postState, action: PostActionTypes) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state
      };
    default:
      return state
  }
};

export default postReducer;