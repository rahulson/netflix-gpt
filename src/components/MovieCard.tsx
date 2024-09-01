import React from "react";
import { IMG_CDN_URL } from "../constants/AppConstants";

type MovieCardProps = {
  poster_path: string;
};

const MovieCard = ({ poster_path }: MovieCardProps) => {
  return (
    <div>
      <img src={`${IMG_CDN_URL}/${poster_path}`} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
