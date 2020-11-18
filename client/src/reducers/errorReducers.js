import { GET_ERRORS, CLEAR_ERRORS } from "../constants/errorConstants";

const initialState = {};

export const getErrors = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};
