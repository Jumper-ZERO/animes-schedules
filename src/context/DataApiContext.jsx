import React, { useState, useEffect, createContext } from "react";
import { infoData } from "./fetch";

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
    return <h1>Cargando...</h1>;
  }

  return (
    <dataApi.Provider value={data}>
      {children}
    </dataApi.Provider>
  );
}

export { DataApiContext, dataApi };
