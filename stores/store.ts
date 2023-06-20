import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import { ipApi } from "./services/ip";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counterReducer,
    [ipApi.reducerPath]: ipApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipApi.middleware),
});

// useSelector 타입
export type RootState = ReturnType<typeof store.getState>;
// useDispatch 타입
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
