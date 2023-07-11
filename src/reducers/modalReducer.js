import { OPEN_MODAL, CLOSE_MODAL } from '../redux/actions/modalActions';

const initialState = {
  isOpen: false,
  // any other modal state properties can be added here
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;