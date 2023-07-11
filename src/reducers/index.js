import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
// Reducers
// import authorReducer from './authorReducer';
// import errorReducer from './errorReducer';
import homeReducer from './homeReducer';
// import reposReducer from './reposReducer';

export default combineReducers({
  // authorState: authorReducer,
  // errors: errorReducer,
  modal: modalReducer,
  homeState: homeReducer,
  // reposState: reposReducer,
});