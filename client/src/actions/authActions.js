import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../constants/authConstants";
import { GET_ERRORS, CLEAR_ERRORS } from "../constants/errorConstants";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import axios from "axios";

// export const registerAccount = () = async (dispatch) => {
//     console.log('yeah');
// }

export const loginUser = (userData, history) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post("/api/accounts/login", userData);

    //Save to local Storage
    localStorage.setItem("jwtToken", data.token);
    //Set token to Auth Header
    setAuthToken(data.token);
    //Decode token
    const decoded = jwt_decode(data.token);

    dispatch(setCurrentUser(decoded));
    dispatch({ type: CLEAR_ERRORS });
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: LOGIN_SUCCESS,
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  // Remove from localStorage
  localStorage.removeItem("jwtToken");

  //Remove Auth header
  setAuthToken(false);

  //set current user to empty object
  dispatch(setCurrentUser({}));
};
