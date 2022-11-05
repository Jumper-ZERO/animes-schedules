import React, { useContext, useState } from "react";
import { dataApi } from "../context/DataApiContext";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import AnimeBox from "./AnimeBox";

const DayBox = ({ day }) => {
  const [checked, setChecked] = useState(false);
  const data = useContext(dataApi);
  const SIZE_BOTON = 20;

  return (
    <div className="">
      <label
        htmlFor={day}
        className="capitalize text-white text-lg p-5 bg-gray-800 flex justify-between items-center rounded-lg mb-5 cursor-pointer"
      >
        <h1 className="rounded-2xl">{day}</h1>
        <label className="w-1/2 flex justify-end" htmlFor={day}>
          {checked ? <AiOutlineUp size={SIZE_BOTON} /> : <AiOutlineDown size={SIZE_BOTON} />}
          <input
            className="m-5 hidden"
            id={day}
            type="checkbox"
            onChange={(e) => {
              setChecked(e.target.checked);
              globalThis[day] = data;
            }}
          />
        </label>
      </label>
      <div className={checked ? "flex flex-col gap-5" : "hidden"}>
        {data.map(({ canonicalTitle, id, posterImage, status }) => (
          <AnimeBox
            key={id}
            image={posterImage.medium}
            title={canonicalTitle}
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

export default DayBox;
