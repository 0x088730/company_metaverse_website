import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import authorReducer from './authorReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  auth: authorReducer,
  modal: modalReducer,
  homeState: homeReducer,
});