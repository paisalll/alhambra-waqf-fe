import React, { useState } from "react";
import clsx from "clsx";
import "./Player.scss";
const Player = () => {
  return (
    <div className="videoContainer">
      <div className="videoThumbnail">
        <iframe
          className="w-full h-[25rem] rounded-2xl"
          src="https://www.youtube.com/embed/vksn-w3fCvY"
          title="YouTube video player"
          frameBorder="0"
          border="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
