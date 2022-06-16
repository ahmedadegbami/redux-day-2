import { GET_JOBS, TOGGLE_ERROR, TOGGLE_SPINNER } from "../actions";

const initialState = {
  list: [],
  isLoading: true,
  isError: false
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        list: action.payload
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        isLoading: false
      };
    case TOGGLE_ERROR:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

export default jobsReducer;
