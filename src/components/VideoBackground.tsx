import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type VideoBackGroundProps = {
  videoKey: string;
};

const opts: YouTubeProps["opts"] = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const VideoBackground = ({ videoKey }: VideoBackGroundProps) => {
  console.log("Video Key", videoKey);
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className="w-screen aspect-video">
      <YouTube className="w-screen aspect-video" iframeClassName="w-screen aspect-video h-full" videoId={videoKey} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default VideoBackground;
