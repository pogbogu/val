import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ link }) => {
  const videoId = link;

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
      start: 15,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
