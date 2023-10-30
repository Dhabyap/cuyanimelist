"use client";

import { XCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "300",
  };
  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button onClick={handleVideoPlayer} className="text-color-primary float-right">
          {" "}
          <XCircle size={32} />{" "}
        </button>
        <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo} opts={option} />
      </div>
    );
  };

  const OpenTrailerButton = () => {
    return (
      <button onClick={handleVideoPlayer} className="rounded fixed bottom-5 right-5 w-35 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <OpenTrailerButton />;
};

export default VideoPlayer;
