// Test away
import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

test("parent snapshot", async () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper).toBeDefined();
  expect(wrapper.asFragment()).toMatchSnapshot();
});

test("display render", async () => {
  const wrapper = rtl.render(<Dashboard />);
  await wrapper.findAllByText(/unlocked/i);
  const lockButton = wrapper.getByText(/lock gate/i);
  const openButton = wrapper.getByText(/close gate/i);
  expect(lockButton.disabled).toBe(true);
  expect(openButton.disabled).toBe(false);
});

//all tests working!!
