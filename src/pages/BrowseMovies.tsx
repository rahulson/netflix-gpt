import React, { useState } from "react";
import { useGetNowPlayingMoviesQuery } from "../store/movies";

const BrowseMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useGetNowPlayingMoviesQuery({
    language: "en-US",
    page: page,
  });
  return <div>This is browse movies</div>;
};

export default BrowseMovies;
