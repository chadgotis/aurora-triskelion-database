import {
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAIL,
} from "../constants/memberConstants";

import axios from "axios";

export const listMembers = () => async (dispatch) => {
  try {
    dispatch({ type: MEMBER_LIST_REQUEST });

    const { data } = await axios.get("/api/members");

    dispatch({
      type: MEMBER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEMBER_LIST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};
