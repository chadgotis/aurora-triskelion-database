import {
  GET_APC_OFFICERS_REQUEST,
  GET_APC_OFFICERS_SUCCESS,
  CREATE_APC_OFFICERS_REQUEST,
  CREATE_APC_OFFICERS_SUCCESS,
  CREATE_APC_OFFICERS_FAIL,
  GET_SINGLE_APC_OFFICERS_REQUESTS,
  GET_SINGLE_APC_OFFICERS_SUCCESS,
  GET_SINGLE_APC_OFFICERS_FAIL,
} from "../constants/officerConstants";

const initialState = {
  loading: false,
  errors: {},
  officerSet: [],
  officers: {
    loading: false,
    set: {},
  },
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
    case GET_SINGLE_APC_OFFICERS_REQUESTS:
      return { ...state, officers: { loading: true, set: {} } };
    case GET_SINGLE_APC_OFFICERS_SUCCESS:
      return { ...state, officers: { loading: false, set: action.payload } };
    case GET_SINGLE_APC_OFFICERS_FAIL:
      return { ...state, officers: { loading: false, set: {} } };
    default:
      return state;
  }
};
