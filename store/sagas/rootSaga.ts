import { all } from 'redux-saga/effects'
import { 
  watchLoadUserAsync,
  watchSignInUserAsync,
  watchSignUpUserAsync
} from './postSaga';

// Export root saga
export default function* rootSaga() {
  yield all([
    watchLoadUserAsync(),
    watchSignInUserAsync(),
    watchSignUpUserAsync()
  ])
}