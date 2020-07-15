import { all } from 'redux-saga/effects'
import { 
  watchGetPostsAsync,
  watchAddPostAsync
} from './postSaga';

// Export root saga
export default function* rootSaga() {
  yield all([
    watchGetPostsAsync(),
    watchAddPostAsync()
  ])
}