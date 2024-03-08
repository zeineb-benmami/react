import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import logger from "redux-logger";
export default configureStore({
  reducer: reducers,
  middleware: () => {
    [logger];
  },
});
