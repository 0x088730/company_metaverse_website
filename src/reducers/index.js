import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import authorReducer from './authorReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  isAuthenticated: authReducer,
  auth: authorReducer,
  modal: modalReducer,
  homeState: homeReducer,
});