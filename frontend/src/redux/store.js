import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice.js";

const store = configureStore({
  reducer: {
    themes: themeReducer,
  },
});

export default store;
