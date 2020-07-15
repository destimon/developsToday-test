import { PostActionTypes, SET_POSTS_LOADING, ADD_POST, SET_ADD_POST_LOADING, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../types';

import {
  PostState, GET_POSTS
} from '../types';
import { PostActionSagaTypes } from '../sagas/types.saga';

const postState: PostState = {
  posts: [],
  postsLoading: false,
  addPostLoading: false,
  addPostError: ''
}

const postReducer = (state: PostState = postState, action: PostActionTypes | PostActionSagaTypes) => {
  switch (action.type) {
    // Add new post trough API
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case SET_ADD_POST_LOADING:
      return {
        ...state,
        addPostLoading: true
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostError: ''
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: 'Unable to add new post'
      }
    // Get posts from API
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