import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  post: postReducer
  // Combine reducer created for future
  // reducers if that would be commercical project
})

export default rootReducer;