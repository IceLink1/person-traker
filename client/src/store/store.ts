import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./person/personSlice";

export const store = configureStore({
  reducer: {
    person: personSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
