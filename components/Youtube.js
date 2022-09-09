import React from "react";
import YouTube from "react-youtube";

const Youtube = ({ videoId, description }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
    },
  };
  return (
    <div className='w-full p-1 rounded-md m-4 bg-gradient-to-br from-primary to-transparent'>
      <YouTube videoId={videoId} opts={opts} />
      <p className='py-2 text-left ml-3'>{description}</p>
    </div>
  );
};

export default Youtube;
