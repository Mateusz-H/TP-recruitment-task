import { configureStore } from "@reduxjs/toolkit";
import therapistsReducer from "../store/therapistsSlice";

export default configureStore({
  reducer: {
    therapists: therapistsReducer,
  },
});
