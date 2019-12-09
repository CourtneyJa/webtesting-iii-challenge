// Test away!
import React from "react";
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

test("renders Controls.js", () => {
  const wrapper = rtl.render(<Controls />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});

test("renders lock and open", () => {
  const wrapper = rtl.render(<Controls />);
  const locked = wrapper.getByText(/lock gate/i);
  const opened = wrapper.getByText(/close gate/i);
  expect(locked).toBeDefined();
  expect(opened).toBeDefined();
});

test("state changes on open/close once", () => {
  const toggleClosed = jest.fn();
  const wrapper = rtl.render(<Controls toggleClosed={toggleClosed} />);
  const button = wrapper.getByText(/close gate/i);
  rtl.act(() => {
    rtl.fireEvent.click(button);
  });
  expect(toggleClosed).toHaveBeenCalledTimes(1);
});

test("lock button render", () => {
  const mock = jest.fn();
  const wrapper = rtl.render(<Controls toggleClosed={mock} />);
  const button = wrapper.getByText(/lock gate/i);
  rtl.act(() => {
    rtl.fireEvent.click(button);
  });
  expect(mock).toHaveBeenCalledTimes(0);
});

//all tests working!!
