import React, { useState, useEffect, createContext } from "react";
import { infoData } from "./fetch";
import Loading from "../components/Loading";

const dataApi = createContext(null);
const dateNow = new Date();
const month = dateNow.getMonth();
const year = dateNow.getFullYear();

function getSeason(x) {
    switch (true) {
    case x <= 2:
        return "winter";
    case x <= 5:
        return "spring";
    case x <= 8:
        return "summer";
    case x <= 11:
        return "fall";
    }
}

function DataApiContext({ children }) {
  const [data, setData] = useState([]);
  const link =
    `https://kitsu.io/api/edge/anime?filter[season]=${getSeason(month)}&filter[seasonYear]=${year}&filter[subtype]=TV&sort=popularityRank&page[limit]=20`;

  useEffect(() => {
    (async () => {
      const datos = await infoData(link);
      setData(datos);
    })();
  }, []);

  if (!(data.length > 0)) {
    return <Loading />;
  }

  return <dataApi.Provider value={data}>{children}</dataApi.Provider>;
}

export { DataApiContext, dataApi };
