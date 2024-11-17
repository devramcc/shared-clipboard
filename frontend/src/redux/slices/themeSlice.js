import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  initialState: {
    theme: "light",
  },
  name: "theme",
  reducers: {
    updateTheme(state, { payload }) {
      state.theme = payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
