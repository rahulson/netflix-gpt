import React from "react";
import MovieList from "./MovieList";
import { useGetNowPlayingMoviesQuery } from "../store/movies";

const SecondaryContainer = () => {
  const { data } = useGetNowPlayingMoviesQuery({ language: "en-US", page: 1 });
  if (!data?.results) return null;
  return (
    <div>
      <MovieList title="Now Playing" movies={data?.results} />
    </div>
  );
};

export default SecondaryContainer;
