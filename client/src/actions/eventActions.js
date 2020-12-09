import axios from "axios";
import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
} from "../constants/eventConstants";
import { GET_ERRORS } from "../constants/errorConstants";

export const getEvents = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENTS_REQUEST });
    const { data } = await axios.get("/api/events");
    dispatch({ type: GET_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};
