import React, { useState, useEffect } from "react";
import { DataApiContext } from "./context/DataApiContext";
import BodyBox from "./components/BodyBox";
import "./App.css";

function App() {
  return (
    <DataApiContext>
      <BodyBox />
    </DataApiContext>
  )
}

export default App;
