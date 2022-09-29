// src/__tests__/App.test.js

import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from "../event-list";
import CitySearch from "../city-search";
import NumberOfEvents from "../number-of-events";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});
