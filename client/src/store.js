import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { memberListReducers } from "./reducers/memberReducers";
import { loginUserReducers } from "./reducers/authReducers";
import { getErrors } from "./reducers/errorReducers";
import { councilReducer } from "./reducers/councilReducers";

const reducer = combineReducers({
  memberList: memberListReducers,
  auth: loginUserReducers,
  errors: getErrors,
  councilList: councilReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
