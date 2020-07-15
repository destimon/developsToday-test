import { PostActionTypes } from '../types';

import {
  State, GET_POSTS
} from '../types';
import { PostActionSagaTypes } from '../sagas/types.saga';

const postState: State = {
  posts: []
}

const postReducer = (state: State = postState, action: PostActionTypes | PostActionSagaTypes) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [ { id: 1, title: 'sad', body: 'sadsad'}]
      };
    default:
      return state
  }
};

export default postReducer;