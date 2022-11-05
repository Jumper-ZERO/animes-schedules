import React, { useContext, useState } from "react";
import { dataApi } from "../context/DataApiContext";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import AnimeBox from "./AnimeBox";

const DayBox = ({ day }) => {
  const [checked, setChecked] = useState(false);
  const data = useContext(dataApi);

  return (
    <div className="">
      <div className="capitalize text-white text-3xl p-5 bg-gray-800 flex justify-between items-center rounded-lg mb-5">
        <h1 className="rounded-2xl">{day}</h1>
        <label className="w-1/2 flex justify-end" htmlFor={day}>
          {checked ? <AiOutlineUp size={30} /> : <AiOutlineDown size={30} />}
          <input
            className="m-5 hidden"
            id={day}
            type="checkbox"
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
        </label>
      </div>
      <div className={checked ? "flex flex-col gap-5" : "hidden"}>
        {data.map(({ canonicalTitle, id, posterImage }) => (
          <AnimeBox
            key={id}
            image={posterImage.medium}
            title={canonicalTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default DayBox;
