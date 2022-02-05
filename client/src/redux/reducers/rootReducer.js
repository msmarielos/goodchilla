import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { friendsReducer } from "./friendsReducer";



export const rootReducer = combineReducers({
  userReducer,
  friendsReducer
})
