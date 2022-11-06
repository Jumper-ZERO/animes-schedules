import React, { useState, useEffect, createContext } from "react";
import { infoData } from "./fetch";
import Loading from '../components/Loading';

const dataApi = createContext(null);

function DataApiContext({ children }) {
  const [data, setData] = useState([]);
  const link =
    "https://kitsu.io/api/edge/anime?filter[season]=fall&filter[seasonYear]=2022&filter[subtype]=TV&sort=popularityRank&page[limit]=20";

  useEffect(() => {
    (async () => {
      const datos = await infoData(link);
      setData(datos);
    })();
  }, []);

  if (!(data.length > 0)) {
    return <Loading />
  }

  return (
    <dataApi.Provider value={data}>
      {children}
    </dataApi.Provider>
  );
}

export { DataApiContext, dataApi };
