import { combineReducers } from "redux";

import { contactListReducer } from "./contactListReducer";

export const rootReducer = combineReducers({
  contact: contactListReducer,
});
