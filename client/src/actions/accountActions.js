import {
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ADD_ACCOUNT_FAIL,
  ADD_ACCOUNT_SUCCESS,
} from "../constants/accountConstants";
import Swal from "sweetalert2";
import axios from "axios";
import { GET_ERRORS, CLEAR_ERRORS } from "../constants/errorConstants";

export const getUserAccounts = (role) => async (dispatch) => {
  try {
    if (role === "admin") {
      dispatch({ type: ACCOUNT_REQUEST });
      const { data } = await axios.get("/api/accounts/users");
      return dispatch({ type: ACCOUNT_SUCCESS, payload: data });
    }
    dispatch({ type: ACCOUNT_REQUEST });
    const { data } = await axios.get("/api/accounts");
    dispatch({ type: ACCOUNT_SUCCESS, payload: data });

    //! clear errors deletes the account state
    // dispatch({ type: CLEAR_ERRORS });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const createUserAccount = (
  userData,
  handleClose,
  role,
  account
) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_ACCOUNT_REQUEST });
    await axios.post("/api/accounts/register", userData);
    dispatch({ type: ADD_ACCOUNT_SUCCESS });
    Swal.fire({
      title: "Account Created Successfully",
      icon: "success",
      html: `<p>Remember these credentials. Password can be ONLY viewed ONCE.</p><h3>Username: ${userData.username}</h3><h3>Password: ${userData.password}</h3>`,
    });
    const newEvent = {
      user: `${account.firstName} ${account.lastName}`,
      activity: `Added new '${userData.type}' account with username of: ${userData.username} `,
    };
    await axios.post(`/api/logs/create`, newEvent);
    handleClose();
    dispatch(getUserAccounts(role));
  } catch (error) {
    dispatch({ type: ADD_ACCOUNT_FAIL, payload: error.response.data });
  }
};

export const deleteUserAccount = (id, role) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Remove Account?",
      text: "Removing an Account leaves a record to the database",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "REMOVE",
    });
    if (result.isConfirmed) {
      await axios.delete(`/api/accounts/delete/${id}`);
      Swal.fire("Success!", "Removed Successfully", "success");
      dispatch(getUserAccounts(role));
      dispatch({ type: CLEAR_ERRORS });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops!...",
      text: "Something went wrong! Please try again",
    });
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
