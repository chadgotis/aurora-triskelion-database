import axios from "axios";
import { GET_ERRORS, CLEAR_ERRORS } from "../constants/errorConstants";
import {
  GET_APC_OFFICERS_REQUEST,
  GET_APC_OFFICERS_SUCCESS,
  CREATE_APC_OFFICERS_SUCCESS,
} from "../constants/officerConstants";

import Swal from "sweetalert2";

export const getSetOfOfficers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_APC_OFFICERS_REQUEST });
    const { data } = await axios.get("/api/officers");
    dispatch({ type: GET_APC_OFFICERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const createNewOfficers = (userData, handleClose) => async (
  dispatch
) => {
  try {
    await axios.post("/api/officers/create", userData);
    dispatch({ type: CREATE_APC_OFFICERS_SUCCESS });
    Swal.fire({
      title: "Success",
      icon: "success",
      text: `Created ${userData.year} set of Officers successfully`,
    });
    handleClose();
    dispatch(getSetOfOfficers());

    dispatch({ type: CLEAR_ERRORS });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const deleteOfficers = (id) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Remove set of Officers?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "REMOVE",
    });
    if (result.isConfirmed) {
      await axios.delete(`/api/officers/delete/${id}`);
      dispatch({ type: CLEAR_ERRORS });
      Swal.fire("Success!", "Removed Successfully", "success");
      dispatch(getSetOfOfficers());
    }
  } catch (error) {
    Swal.fire({
      title: "Ooops!",
      icon: "Error",
      text: `Ooops. Something went wrong`,
    });
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};
