// src/App.js

import React from "react";
import "./App.css";
import EventList from "./event-list";
import CitySearch from "./city-search";
import NumberOfEvents from "./number-of-events";
import { mockData } from "./mock-data";

function App() {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList events={mockData} />
    </div>
  );
}

export default App;
