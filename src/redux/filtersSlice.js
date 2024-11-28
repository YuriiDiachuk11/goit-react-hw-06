import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChange: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filterReducer = slice.actions;
