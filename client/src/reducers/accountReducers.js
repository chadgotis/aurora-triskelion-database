import {
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ADD_ACCOUNT_FAIL,
  ADD_ACCOUNT_REQUEST,
  ADD_ACCOUNT_SUCCESS,
} from "../constants/accountConstants";

const initialState = {
  loading: false,
  errors: {},
  accountList: [],
};

export const getAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_REQUEST:
      return { ...state, loading: true };
    case ACCOUNT_SUCCESS:
      return { ...state, loading: false, accountList: action.payload };
    case ADD_ACCOUNT_REQUEST:
      return { ...state, loading: true };
    case ADD_ACCOUNT_SUCCESS:
      return { ...state, loading: false };
    case ADD_ACCOUNT_FAIL:
      return { ...state, loading: false, errors: action.payload };
    default:
      return initialState;
  }
};
