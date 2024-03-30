import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiConstant } from "../constants/ApiConstants";
import { TMDB_ACCESS_TOKEN } from "../constants/AppConstants";

export const moviesBaseQuery = fetchBaseQuery({
  baseUrl: ApiConstant.TMDB_BASE_URL,
  prepareHeaders: async (headers, _) => {
    headers.set("Authorization", `Bearer ${TMDB_ACCESS_TOKEN}`);
    return headers;
  },
});
