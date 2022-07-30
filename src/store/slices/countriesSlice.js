import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: {},
});

export const countriesReducer = countriesSlice.reducer;
export const { setData } = countriesSlice.actions;
