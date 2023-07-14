import { DASHBOARDACTION } from '../redux/actions/dashboardActions';

const initialState = {
  dashboardStatus: "",
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARDACTION:
      return {
        ...state,
        dashboardStatus: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
