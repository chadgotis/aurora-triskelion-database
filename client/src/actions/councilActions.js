import {
  GET_COUNCILS_REQUEST,
  GET_COUNCILS_SUCCESS,
  GET_SINGLE_COUNCIL_SUCCESS,
  GET_SINGLE_COUNCIL_REQUEST,
  GET_SINGLE_CHAPTER_SUCCESS,
  GET_SINGLE_CHAPTER_REQUEST,
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
    dispatch({ type: GET_SINGLE_COUNCIL_REQUEST });
    const { data } = await axios.get(`/api/councils/${id}`);
    dispatch({ type: GET_SINGLE_COUNCIL_SUCCESS, payload: data[0] });
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

export const deleteCouncil = (id) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Remove Council?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "REMOVE",
    });
    if (result.isConfirmed) {
      await axios.delete(`/api/councils/delete/${id}`);
      dispatch({ type: CLEAR_ERRORS });
      Swal.fire("Success!", "Removed Successfully", "success");
      dispatch(councilAction());
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

export const createChapter = (formData, handleClose) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Add Chapter?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Create",
    });
    if (result.isConfirmed) {
      await axios.post(`/api/councils/chapter/add/${formData.c_id}`, formData);
      dispatch({ type: CLEAR_ERRORS });
      Swal.fire("Success!", "Added Successfully", "success");
      handleClose();
      dispatch(getSingleCouncil(formData.c_id));
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const deleteChapter = (council_id, chapter_id) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Remove Chapter?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "REMOVE",
    });
    if (result.isConfirmed) {
      await axios.post(
        `/api/councils/chapter/delete/${council_id}/${chapter_id}`
      );
      Swal.fire("Success!", "Removed Successfully", "success");

      dispatch(getSingleCouncil(council_id));
    }
  } catch (error) {
    Swal.fire({
      title: "Ooops!",
      icon: "error",
      text: `Ooops. Something went wrong`,
    });
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const editCouncilOfficers = (formData, handleCloseCouncil) => async (
  dispatch
) => {
  try {
    const officers = {};

    if (formData.position === "Chairman") officers.chairman = formData.name;
    if (formData.position === "Vice Chairman")
      officers.viceChairman = formData.name;
    if (formData.position === "Secretary") officers.secretary = formData.name;
    if (formData.position === "Keeper of the Chest")
      officers.keeperOftheChest = formData.name;
    if (formData.position === "Auditor") officers.auditor = formData.name;
    if (formData.position === "Budget and Finance")
      officers.budgetAndFinance = formData.name;
    if (formData.position === "Membership and Organization")
      officers.membershipAndOrganization = formData.name;
    if (formData.position === "Communication and Information")
      officers.communicationAndInformation = formData.name;
    if (formData.position === "Special Projects")
      officers.specialProjects = formData.name;
    if (formData.position === "Alumni Affairs")
      officers.alumniAffairs = formData.name;
    if (formData.position === "Interior") officers.interior = formData.name;
    if (formData.position === "") {
      return Swal.fire({
        title: "Ooops!",
        icon: "error",
        text: `Ooops. Something went wrong. Make sure to fill up the required fields`,
      });
    }

    await axios.post(
      `/api/councils/officers/edit/${formData.council}`,
      officers
    );

    Swal.fire("Success!", "Success", "success");
    handleCloseCouncil();
  } catch (error) {
    Swal.fire({
      title: "Ooops!",
      icon: "error",
      text: `Ooops. Something went wrong. Make sure to fill up the required fields`,
    });
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const getSingleChapter = (council_id, chapter_id) => async (
  dispatch
) => {
  try {
    dispatch({ type: GET_SINGLE_CHAPTER_REQUEST });
    const { data } = await axios.get(
      `/api/councils/chapter/${council_id}/${chapter_id}`
    );
    dispatch({ type: GET_SINGLE_CHAPTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const editChapterOfficer = (formData, handleCloseChap) => async (
  dispatch
) => {
  try {
    const officer = {};
    if (formData.position === "Grand Triskelion")
      officer.grandTriskelion = formData.name;
    if (formData.position === "Deputy Grand Triskelion")
      officer.deputyGrandTriskelion = formData.name;
    if (formData.position === "Master Wielder of the Whip")
      officer.masterWilderOfTheWhip = formData.name;
    if (formData.position === "") {
      return Swal.fire({
        title: "Ooops!",
        icon: "error",
        text: `Ooops. Something went wrong. Make sure to fill up the required fields`,
      });
    }

    await axios.post(
      `/api/councils/chapter/officers/edit/${formData.council}/${formData.chapter}`,
      officer
    );
    Swal.fire("Success!", "Success", "success");
    handleCloseChap();
  } catch (error) {
    Swal.fire({
      title: "Ooops!",
      icon: "error",
      text: `Ooops. Something went wrong. Make sure to fill up the required fields`,
    });
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};
