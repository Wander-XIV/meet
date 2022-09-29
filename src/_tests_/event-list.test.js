import React from "react";
import { shallow } from "enzyme";
import EventList from "../event-list";
import Event from "../event";
import { mockData } from "../mock-data";

describe("<EventList /> component", () => {
  test("render correct number of events", () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});
