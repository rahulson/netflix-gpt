import React from "react";
import MovieCard from "./MovieCard";
import { MovieVideo } from "../types/movies";
import { Movie } from "../types/movies";

type MovieListProps = {
  title: string;
  movies: Movie[];
};

const MovieList = ({ title, movies }: MovieListProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieList;
