import React from "react";
import {
  AiFillPlayCircle as Current,
  AiFillCheckCircle as Finished,
  AiFillClockCircle as Upcoming,
  AiFillMinusCircle as Unreleased,
  AiFillCloseCircle as Tba,
} from "react-icons/ai"; // Ant Design Icons
import whichStatus from "../data/status.data";

export default function AnimeBoxBoton({ status }) {
  function getBoton(botonStatus, size = 15) {
    switch (botonStatus) {
      case "current":
        return <Current color="rgb(21, 128, 61)" size={15} />;
      case "unreleased":
        return <Unreleased color="gray" size={15} />;
      case "Upcoming":
        return <Upcoming color="yellow" size={15} />;
      case "finished":
        return <Finished color="red" size={15} />;
      default:
        return <Tba />;
    }
  }
  return (
    <div className="absolute bg-gradient-to-t from-black h-10 w-full bottom-0 opacity-80 flex justify-end items-end">
      <div className="flex justify-end items-center gap-1 mr-2 mb-2">
        {getBoton(status)}
        <h1 className="opacity-100 text-slate-300 text-xs">
          {whichStatus(status)}
        </h1>
      </div>
    </div>
  );
}
