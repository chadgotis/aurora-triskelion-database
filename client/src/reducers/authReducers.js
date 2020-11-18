import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../constants/authConstants";

import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
};

export const authRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, user: action.payload };
    default:
      return state;
  }
};

export const loginUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, user: {} };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
