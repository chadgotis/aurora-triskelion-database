import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
} from "../constants/eventConstants";

const initialState = {
  loading: false,
  eventList: [],
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state, loading: true };
    case GET_EVENTS_SUCCESS:
      return { ...state, loading: false, eventList: action.payload };
    default:
      return initialState;
  }
};
