import {
  GET_APC_OFFICERS_REQUEST,
  GET_APC_OFFICERS_SUCCESS,
  CREATE_APC_OFFICERS_REQUEST,
  CREATE_APC_OFFICERS_SUCCESS,
  CREATE_APC_OFFICERS_FAIL,
} from "../constants/officerConstants";

const initialState = {
  loading: false,
  errors: {},
  officerSet: [],
};

export const setOfOfficersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APC_OFFICERS_REQUEST:
      return { ...state, loading: true };
    case GET_APC_OFFICERS_SUCCESS:
      return { ...state, loading: false, officerSet: action.payload };
    case CREATE_APC_OFFICERS_REQUEST:
      return { ...state, loading: true };
    case CREATE_APC_OFFICERS_SUCCESS:
      return { ...state, loading: false };
    case CREATE_APC_OFFICERS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
