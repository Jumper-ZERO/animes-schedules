import React from "react";
import gif from "../assets/loading-icons/loading-anime.gif";

const Loading = () => {
  return (
    <img
      className="min-w-[250px] min-h-[250px] fixed bottom-5 right-5"
      src={gif}
      alt="loading-anime"
    />
  );
};

export default Loading;
