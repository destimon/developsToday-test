import { put, takeEvery, call } from 'redux-saga/effects'
import { 
  getPosts, 
  setPostsLoading, 
  setAddPostLoading, 
  addPostFailure, 
  addPostSuccess, 
  addPost, 
  getPostsFailure, 
  getPostsSuccess
} from '../actions/postActions';

import { GET_POSTS_ASYNC, ADD_POST_ASYNC, AddPostAsync } from './types.saga';
import axios from '../../api/api';

// SAGA WORKERS ---

// Get posts from API
function* getPostsAsync() {
  try {
    yield put(setPostsLoading());
    const { data } = yield call(() => (axios.get('/posts')))
    
    yield put(getPosts(data));
    yield put(getPostsSuccess());
  } catch (err) {
    yield put(getPostsFailure());
  }
}

// Add post trough API
function *addPostAsync(action: AddPostAsync) {
  try {
    const { payload } = action;
    yield put(setAddPostLoading());
    const { data } = yield call(() => (axios.post('/posts', payload)))
    
    yield put(addPost(data));
    yield put(addPostSuccess())
  } catch (err) {
    yield put(addPostFailure())
  }
}

// SAGA WATCHERS ---

export function* watchAddPostAsync() { yield takeEvery(ADD_POST_ASYNC, addPostAsync) }
export function* watchGetPostsAsync() { yield takeEvery(GET_POSTS_ASYNC, getPostsAsync) };