import { put, takeEvery, call } from 'redux-saga/effects'
import { getPosts } from '../actions/postActions';

import { GET_POSTS_ASYNC } from './types.saga';

import axios from 'axios';

// SAGA WORKERS ---

// Get posts from API
function* getPostsAsync() {
  try {
    const { data } = yield call(() => (axios.get('https://simple-blog-api.crew.red/posts')))
    
    yield put(getPosts(data));
  } catch (err) {

  }
}

// SAGA WATCHERS ---

export function* watchGetPostsAsync() { yield takeEvery(GET_POSTS_ASYNC, getPostsAsync) };