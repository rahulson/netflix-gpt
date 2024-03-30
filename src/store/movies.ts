import { createApi } from "@reduxjs/toolkit/query/react";
import { ApiConstant } from "../constants/ApiConstants";
import { moviesBaseQuery } from "./baseQuery";
import { Root, SearchParam } from "../types/movies";

export const MOVIES_API_REDUCER_KEY = "moviesApi";

export const moviesApi = createApi({
  reducerPath: MOVIES_API_REDUCER_KEY,
  baseQuery: moviesBaseQuery,
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query<Root, SearchParam>({
      query: (args: SearchParam) => {
        return {
          url: ApiConstant.NOW_PLAYING_MOVIES,
          method: "GET",
          params: args,
        };
      },
    }),
  }),
});

export const { useGetNowPlayingMoviesQuery } = moviesApi;
