import { configureStore } from "@reduxjs/toolkit";
import { humanSlice } from "./humanslice";
import { taskSlice } from "./taskslice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: humanSlice.reducer,
  }
})