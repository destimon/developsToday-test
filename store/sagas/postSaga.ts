import { put, takeEvery, call } from 'redux-saga/effects'
import { getPosts, setPostsLoading, setAddPostLoading, addPostFailure, addPostSuccess, addPost } from '../actions/postActions';

import { GET_POSTS_ASYNC, ADD_POST_ASYNC } from './types.saga';

import axios from 'axios';

// SAGA WORKERS ---

// Get posts from API
function* getPostsAsync() {
  try {
    yield put(setPostsLoading());
    const { data } = yield call(() => (axios.get('https://simple-blog-api.crew.red/posts')))
    
    yield put(getPosts(data));
  } catch (err) {

  }
}

function *addPostAsync({payload}) {
  console.log(payload)
  try {
    yield put(setAddPostLoading());
    const { data } = yield call(() => (axios.post('https://simple-blog-api.crew.red/posts', payload)))
    
    yield put(addPost(data));
    yield put(addPostSuccess())
  } catch (err) {
    yield put(addPostFailure())
  }
}

// SAGA WATCHERS ---

export function* watchAddPostAsync() { yield takeEvery(ADD_POST_ASYNC, addPostAsync) }
export function* watchGetPostsAsync() { yield takeEvery(GET_POSTS_ASYNC, getPostsAsync) };