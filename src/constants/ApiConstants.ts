export const ApiConstant = {
  TMDB_BASE_URL: "https://api.themoviedb.org",
  NOW_PLAYING_MOVIES: "3/movie/now_playing",
  VIDEOS: (movie_id: number) => `3/movie/${movie_id}/videos`,
};
