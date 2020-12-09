import axios from "axios";
import { GET_ERRORS, CLEAR_ERRORS } from "../constants/errorConstants";
import {
  GET_APC_OFFICERS_REQUEST,
  GET_APC_OFFICERS_SUCCESS,
  CREATE_APC_OFFICERS_SUCCESS,
  GET_SINGLE_APC_OFFICERS_REQUESTS,
  GET_SINGLE_APC_OFFICERS_SUCCESS,
  GET_SINGLE_APC_OFFICERS_FAIL,
  GET_LATEST_SET_OF_OFFICERS_SUCCESS,
  GET_LATEST_SET_OF_OFFICERS_REQUEST,
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

export const createNewOfficers = (userData, handleClose, account) => async (
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
    const newEvent = {
      user: `${account.firstName} ${account.lastName}`,
      activity: `Created APC set of Officers year: '${userData.year}' `,
    };
    await axios.post(`/api/events/create`, newEvent);
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const deleteOfficers = (id, name, account) => async (dispatch) => {
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
      const newEvent = {
        user: `${account.firstName} ${account.lastName}`,
        activity: `Removed Set of Officers year: '${name}' `,
      };
      await axios.post(`/api/events/create`, newEvent);
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

export const getSingleSet = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_APC_OFFICERS_REQUESTS });
    const { data } = await axios.get(`/api/officers/${id}`);
    dispatch({ type: GET_SINGLE_APC_OFFICERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_APC_OFFICERS_FAIL });
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const updateSetOfOfficers = (
  formData,
  handleCloseSet,
  account
) => async (dispatch) => {
  try {
    const officers = {};
    if (formData.position === "") {
      return Swal.fire({
        title: "Ooops!",
        icon: "error",
        text: `Make sure the fields are properly field`,
      });
    }

    if (formData.position === "Governor General")
      officers.governorGeneral_name = formData.name;
    if (formData.position === "Vice Governor General - District")
      officers.districtViceGovernorGeneral_name = formData.name;
    if (formData.position === "Vice Governor General - Executive")
      officers.executiveViceGovernorGeneral_name = formData.name;
    if (formData.position === "Provincial Executive Secretary")
      officers.provExecutiveSecretary_name = formData.name;
    if (formData.position === "Provincial Keeper of the Chest")
      officers.provKeeperOfTheChest_name = formData.name;
    if (formData.position === "Provincial Auditor")
      officers.provAuditor_name = formData.name;
    if (formData.position === "Regent for Information and Communications")
      officers.regentInformationAndCommunication_name = formData.name;
    if (formData.position === "Regent for Membership and Organization")
      officers.regentMembershipAndOrganization_name = formData.name;
    if (formData.position === "Regent for Budget and Finance")
      officers.regentBudgetAndFinance_name = formData.name;
    if (formData.position === "Regent Interior")
      officers.regentInterior_name = formData.name;
    if (formData.position === "Regent for Special Projects")
      officers.regentSpecialProjects_name = formData.name;
    if (formData.position === "Regent for Alumni Affairs")
      officers.regentAlumniAffairs_name = formData.name;

    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Set as Officer",
    });

    if (result.isConfirmed) {
      await axios.post(`/api/officers/edit/${formData.year}`, officers);
      Swal.fire("Success!", "Set as Officer Successfully", "success");
      handleCloseSet();
      const newEvent = {
        user: `${account.firstName} ${account.lastName}`,
        activity: `Set APC Officer named: '${formData.name}' as '${formData.position}' `,
      };
      await axios.post(`/api/events/create`, newEvent);
    }
  } catch (error) {
    Swal.fire({
      title: "Ooops!",
      icon: "error",
      text: `Make sure the fields are properly field`,
    });
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const getLatestSetOfOfficers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LATEST_SET_OF_OFFICERS_REQUEST });
    const { data } = await axios.get(`/api/officers/latest`);
    dispatch({ type: GET_LATEST_SET_OF_OFFICERS_SUCCESS, payload: data[0] });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};
