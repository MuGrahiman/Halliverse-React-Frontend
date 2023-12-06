import { combineReducers } from "redux";
import {
  userReducer,
  teamReducer,
  searchReducer,
  paginationReducer,
  filterReducer,
} from "./Reducers";

export default combineReducers({
  userReducer,
  searchReducer,
  teamReducer,
  paginationReducer,
  filterReducer,
});
