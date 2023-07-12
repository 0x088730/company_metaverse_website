import { AUTH, AUTHLOGOUT } from '../redux/actions/userActions';

const initialState = {
  auth: {},
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case AUTHLOGOUT:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export default authorReducer;