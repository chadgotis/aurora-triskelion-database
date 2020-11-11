import {
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAIL,
} from "../constants/memberConstants";

export const memberListReducers = (state = { members: [] }, action) => {
  switch (action.type) {
    case MEMBER_LIST_REQUEST:
      return { loading: true, members: [] };
    case MEMBER_LIST_SUCCESS:
      return { loading: false, members: action.payload };
    case MEMBER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
