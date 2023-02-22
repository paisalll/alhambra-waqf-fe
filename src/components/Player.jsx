import React from "react";
import ReactPlayer from "react-player/youtube";
const Player = () => {
  return (
    <div className="player-wrapper ">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/KIwgfJF_gEk"
        width="100%"
        height="80%"
        controls
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onStart callback")}
        onPause={() => console.log("onPause callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onError callback")}
      />
    </div>
  );
};

export default Player;
