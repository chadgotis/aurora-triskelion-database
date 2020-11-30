import {
  GET_COUNCILS_REQUEST,
  GET_COUNCILS_SUCCESS,
} from "../constants/councilConstants";
import axios from "axios";
import { GET_ERRORS, CLEAR_ERRORS } from "../constants/errorConstants";
import Swal from "sweetalert2";

export const councilAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COUNCILS_REQUEST });
    const { data } = await axios.get("/api/councils/");
    dispatch({ type: GET_COUNCILS_SUCCESS, payload: data });
    dispatch({ type: CLEAR_ERRORS });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getSingleCouncil = (id) => async (dispatch) => {
  try {
    await axios.get(`/api/councils/${id}`);

    Swal.fire({});

    dispatch({ type: CLEAR_ERRORS });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const createCouncil = (data, handleClose) => async (dispatch) => {
  try {
    await axios.post("/api/councils/add", data);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Created new Council",
    });
    handleClose();
    dispatch(councilAction());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
