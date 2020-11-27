import {
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAIL,
  MEMBER_ADD_REQUEST,
  MEMBER_ADD_SUCCESS,
} from "../constants/memberConstants";

import Swal from "sweetalert2";

import { GET_ERRORS, CLEAR_ERRORS } from "../constants/errorConstants";

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

export const addMember = (memberData, handleClose) => async (dispatch) => {
  try {
    dispatch({ type: MEMBER_ADD_REQUEST });

    const result = await Swal.fire({
      title: "Add member?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Add Member",
    });

    if (result.isConfirmed) {
      const { data } = await axios.post("/api/members/add", memberData);

      dispatch({
        type: MEMBER_ADD_SUCCESS,
        payload: data,
      });

      dispatch({ type: CLEAR_ERRORS });

      Swal.fire("Success!", "Added Member", "success");

      dispatch(listMembers());

      handleClose();
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

export const removeMember = (id) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Remove member?",
      text: "Removing a member leaves a record to the database",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "REMOVE",
    });
    if (result.isConfirmed) {
      const { data } = await axios.delete(`/api/members/delete/${id}`);

      console.log(data);
      dispatch({ type: CLEAR_ERRORS });
      Swal.fire("Success!", "Removed Successfully", "success");
      dispatch(listMembers());
      dispatch({ type: CLEAR_ERRORS });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops!...",
      text: "Something went wrong! Try to Contact the Administrator",
    });
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const updateMember = (memberData, id, handleClose) => async (
  dispatch
) => {
  try {
    await axios.patch(`/api/members/edit/${id}`, memberData);
    Swal.fire({
      icon: "success",
      title: "Updated Successfully",
    });

    dispatch(listMembers());
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops!...",
      text: "Something went wrong! Try to Contact the Administrator",
    });
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
