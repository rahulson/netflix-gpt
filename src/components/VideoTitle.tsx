import React from "react";

type TitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = (props: TitleProps) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex py-4 gap-3">
        <button className=" text-white text-xl p-4 px-16 rounded-lg bg-gray-500 bg-opacity-50 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white text-xl p-4 px-12 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
