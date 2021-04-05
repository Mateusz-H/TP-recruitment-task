import { createSlice } from "@reduxjs/toolkit";

export const therapistsSlice = createSlice({
  name: "therapists",
  initialState: {
    therapistsList: [],
    therapistsListSize:11,
  },
  reducers: {
    setTherapists: (state, action) => {
      return { ...state, therapistsList: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTherapists } = therapistsSlice.actions;

export default therapistsSlice.reducer;
