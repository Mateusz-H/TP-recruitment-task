import { createSlice } from "@reduxjs/toolkit";

export const therapistsSlice = createSlice({
  name: "therapists",
  initialState: {
    therapists: {},
  },
  reducers: {
    setTherapists: (state, action) => {
      state.therapists = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTherapists } = therapistsSlice.actions;

export default therapistsSlice.reducer;
