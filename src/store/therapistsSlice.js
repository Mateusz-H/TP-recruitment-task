import { createSlice } from "@reduxjs/toolkit";

export const therapistsSlice = createSlice({
  name: "therapists",
  initialState: {
    therapistsList: {},
    therapistsDetailedList: {},
    selectedTherapist: null,
    therapistsListSize: 11,
    currentPage: 1,
    sideBarVisible: false,
  },
  reducers: {
    setTherapists: (state, action) => {
      return { ...state, therapistsList: action.payload };
    },
    addTherapist: (state, action) => {
      const id = action.payload.therapistId;
      return {
        ...state,
        therapistsList: { ...state.therapistsList, [id]: action.payload },
      };
    },
    addTherapistToDetailedList: (state, action) => {
      const id = action.payload.therapistId;
      return {
        ...state,
        therapistsDetailedList: {
          ...state.therapistsDetailedList,
          [id]: action.payload,
        },
      };
    },
    removeTherapist: (state, action) => {
      const tmpDetailedList = { ...state.therapistsDetailedList };
      const tmpList = { ...state.therapistsList };
      delete tmpDetailedList[action.payload];
      delete tmpList[action.payload];
      return {
        ...state,
        therapistsDetailedList: { ...tmpDetailedList },
        therapistsList: { ...tmpList },
        selectedTherapist: null,
        sideBarVisible: false,
      };
    },
    setSelectedTherapist: (state, action) => {
      return { ...state, selectedTherapist: action.payload };
    },
    setPage: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
    setSideBarStatus: (state, action) => {
      return { ...state, sideBarVisible: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTherapists,
  setPage,
  addTherapistToDetailedList,
  setSelectedTherapist,
  addTherapist,
} = therapistsSlice.actions;

export default therapistsSlice.reducer;
