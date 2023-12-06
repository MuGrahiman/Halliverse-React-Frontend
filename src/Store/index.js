import { combineReducers } from "redux";
import {
  userReducer,
  teamReducer,
  searchReducer,
  paginationReducer,
  filterReducer,
} from "./Reducers";
// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({ reducer:  })

// console.log(store.getState())
// {value: 0}
export default combineReducers({
  userReducer,
  searchReducer,
  teamReducer,
  paginationReducer,
  filterReducer,
});
