import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});

// useSelector 타입
export type RootState = ReturnType<typeof store.getState>;
// useDispatch 타입
export type AppDispatch = typeof store.dispatch;
