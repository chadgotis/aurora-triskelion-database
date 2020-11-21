import {
  GET_COUNCILS_REQUEST,
  GET_COUNCILS_SUCCESS,
} from "../constants/councilConstants";

const initialState = {
  loading: false,
  councils: [],
};

export const councilReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNCILS_REQUEST:
      return { ...state, loading: true, councils: [] };
    case GET_COUNCILS_SUCCESS:
      return { ...state, loading: false, councils: action.payload };
    default:
      return state;
  }
};
