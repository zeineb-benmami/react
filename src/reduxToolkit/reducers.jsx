import { combineReducers } from "redux";
import eventSlice from "./Slices/eventSlice";

const reducers = combineReducers({
  event: eventSlice,
});

export default reducers;
