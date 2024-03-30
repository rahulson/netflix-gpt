import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import { moviesApi } from "./movies";

const rootReducer = combineReducers({
  user: userReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([moviesApi.middleware]),
});

export type IRootState = ReturnType<typeof rootReducer>;

export default store;
