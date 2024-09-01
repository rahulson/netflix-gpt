import { createApi } from "@reduxjs/toolkit/query/react";
import { ApiConstant } from "../constants/ApiConstants";
import { moviesBaseQuery } from "./baseQuery";
import { Root, SearchParams, MovieVideo, VideoParams } from "../types/movies";

export const MOVIES_API_REDUCER_KEY = "moviesApi";

export const moviesApi = createApi({
  reducerPath: MOVIES_API_REDUCER_KEY,
  baseQuery: moviesBaseQuery,
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query<Root, SearchParams>({
      query: (args: SearchParams) => {
        return {
          url: ApiConstant.NOW_PLAYING_MOVIES,
          method: "GET",
          params: args,
        };
      },
    }),
    getVideoFromMovieId: builder.query<MovieVideo, VideoParams>({
      query: (args: VideoParams) => {
        const { movieId, language } = args;
        return {
          url: ApiConstant.VIDEOS(movieId),
          method: "GET",
          params: { language: language },
        };
      },
    }),
  }),
});

export const { useGetNowPlayingMoviesQuery, useGetVideoFromMovieIdQuery } =
  moviesApi;
