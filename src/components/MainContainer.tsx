import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import {
  useGetNowPlayingMoviesQuery,
  useGetVideoFromMovieIdQuery,
} from "../store/movies";

const MainContainer = () => {
  const { data } = useGetNowPlayingMoviesQuery({
    language: "en-US",
    page: 1,
  });
  const video =
    data?.results &&
    data.results[Math.floor(Math.random() * data.results.length)];

  const { data: videoData } = useGetVideoFromMovieIdQuery(
    { movieId: video?.id ?? 0, language: "en-US" },
    { skip: !video?.id }
  );
  if (!data?.results) return null;

  const arrFilteredVid =
    videoData?.results &&
    videoData.results.filter((item) => item.type === "Trailer");

  console.log("Arr Filtered Vids", arrFilteredVid);

  const videoInfo = arrFilteredVid?.length
    ? arrFilteredVid[0]
    : videoData?.results &&
      videoData?.results[Math.floor(Math.random() * videoData.results.length)];

  console.log("VideoIfno", videoInfo);

  const mainMovie = data?.results[0];
  const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      {videoInfo?.key && <VideoBackground videoKey={videoInfo.key} />}
    </div>
  );
};

export default MainContainer;
