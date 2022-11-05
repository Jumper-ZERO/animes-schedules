import React, { useState, useContext } from "react";
import { dataApi } from "../context/DataApiContext";
import DayBox from "./DayBox";

function BodyBox() {
  const data = useContext(dataApi);
  const newData = (weekday) => {
    return data
      .filter(({ attributes }) => {
        let dataDay = new Date(attributes.startDate);
        let localDay = new Intl.DateTimeFormat("es", {
          weekday: "long",
          timeZone: "Asia/Tokyo",
        }).format(dataDay);
        return localDay === weekday;
      })
      .map(({ attributes: datos, id }) => ({ ...datos, id }));
  };
  return (
    <div className="container w-[80vw] mx-auto my-12 flex flex-col justify-center gap-4">
      <dataApi.Provider value={newData("lunes")}>
        <DayBox day="lunes" />
      </dataApi.Provider>
      <dataApi.Provider value={newData("martes")}>
        <DayBox day="martes" />
      </dataApi.Provider>
      <dataApi.Provider value={newData("miércoles")}>
        <DayBox day="miércoles" />
      </dataApi.Provider>
      <dataApi.Provider value={newData("jueves")}>
        <DayBox day="jueves" />
      </dataApi.Provider>
      <dataApi.Provider value={newData("viernes")}>
        <DayBox day="viernes" />
      </dataApi.Provider>
      <dataApi.Provider value={newData("sábado")}>
        <DayBox day="sábado" />
      </dataApi.Provider>
      <dataApi.Provider value={newData("domingo")}>
        <DayBox day="domingo" />
      </dataApi.Provider>
    </div>
  );
}

export default BodyBox;
