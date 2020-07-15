import { all } from 'redux-saga/effects'
import { 
  watchGetPostsAsync
} from './postSaga';

// Export root saga
export default function* rootSaga() {
  yield all([
    watchGetPostsAsync()
  ])
}