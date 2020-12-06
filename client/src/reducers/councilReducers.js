import {
  GET_COUNCILS_REQUEST,
  GET_COUNCILS_SUCCESS,
  GET_SINGLE_COUNCIL_SUCCESS,
  GET_SINGLE_COUNCIL_REQUEST,
  GET_SINGLE_CHAPTER_REQUEST,
  GET_SINGLE_CHAPTER_SUCCESS,
} from "../constants/councilConstants";

const initialState = {
  loading: false,
  councils: [],
  singleCouncil: {},
  singleChapter: {},
};

export const councilReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNCILS_REQUEST:
      return { ...state, loading: true, councils: [] };
    case GET_COUNCILS_SUCCESS:
      return { ...state, loading: false, councils: action.payload };
    case GET_SINGLE_COUNCIL_REQUEST:
      return { ...state, loading: true };
    case GET_SINGLE_COUNCIL_SUCCESS:
      return { ...state, loading: false, singleCouncil: action.payload };
    case GET_SINGLE_CHAPTER_SUCCESS:
      return { ...state, loading: false, singleChapter: action.payload };
    case GET_SINGLE_CHAPTER_REQUEST:
      return { ...state, loading: true };
    default:
      return state;
  }
};
