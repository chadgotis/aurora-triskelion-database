import {
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAIL,
  MEMBER_ADD_REQUEST,
  MEMBER_ADD_FAIL,
  MEMBER_ADD_SUCCESS,
  GET_LATEST_ADDED_REQUEST,
  GET_LATEST_ADDED_SUCCESS,
} from "../constants/memberConstants";

export const memberListReducers = (
  state = { members: [], latest: [] },
  action
) => {
  switch (action.type) {
    case MEMBER_LIST_REQUEST:
      return { ...state, loading: true, members: [] };
    case MEMBER_LIST_SUCCESS:
      return { ...state, loading: false, members: action.payload };
    case MEMBER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case GET_LATEST_ADDED_REQUEST:
      return { ...state, loading: true };
    case GET_LATEST_ADDED_SUCCESS:
      return { ...state, loading: false, latest: action.payload };
    default:
      return state;
  }
};

export const memberAdd = (state = {}, action) => {
  switch (action.type) {
    case MEMBER_ADD_REQUEST:
      return { ...state, loading: true, member: {} };
    case MEMBER_ADD_SUCCESS:
      return { ...state, loading: false, member: action.payload };
    case MEMBER_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
