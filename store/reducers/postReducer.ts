import { PostActionTypes, SET_POSTS_LOADING } from '../types';

import {
  PostState, GET_POSTS
} from '../types';
import { PostActionSagaTypes } from '../sagas/types.saga';

const postState: PostState = {
  posts: [],
  postsLoading: false,
}

const postReducer = (state: PostState = postState, action: PostActionTypes | PostActionSagaTypes) => {
  switch (action.type) {
    case SET_POSTS_LOADING:
      return {
        ...state,
        postsLoading: true
      }
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsLoading: false
      };
    default:
      return state
  }
};

export default postReducer;