import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countriesApi } from "./countriesApi";
import { countriesReducer } from "./slices/countriesSlice";
export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

setupListeners(store.dispatch);
