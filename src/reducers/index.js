import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import authorReducer from './authorReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  dashboard: dashboardReducer,
  isAuthenticated: authReducer,
  auth: authorReducer,
  modal: modalReducer,
  homeState: homeReducer,
});