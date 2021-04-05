import { createSlice } from "@reduxjs/toolkit";

export const therapistsSlice = createSlice({
  name: "therapists",
  initialState: {
    therapistsList: [],
    therapistsListSize:11,
    currentPage:1,
  },
  reducers: {
    setTherapists: (state, action) => {
      return { ...state, therapistsList: action.payload };
    },
    setPage:(state,action)=>{
      return {...state,currentPage: action.payload}
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTherapists,setPage } = therapistsSlice.actions;

export default therapistsSlice.reducer;
