// Test away!
import React from "react";
import Display from "./Display";
import { render, fireEvent } from "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

test("display render", async () => {
  const wrapper = rtl.render(<Display />);
  expect(wrapper).toBeDefined();
});

test("red led locked", async () => {
  const wrapper = rtl.render(<Display locked={true} />);
  const lockedDisplay = wrapper.getByText(/locked/i);
  expect(lockedDisplay).toHaveClass("red-led");
  expect(lockedDisplay).toHaveTextContent(/locked/i);
});

test("green led unlocked", async () => {
  const wrapper = rtl.render(<Display locked={false} />);
  const unlockedDisplay = wrapper.getByText(/unlocked/i);
  expect(unlockedDisplay).toHaveClass("green-led");
  expect(unlockedDisplay).toHaveTextContent(/unlocked/i);
});

test("red led closed", async () => {
  const wrapper = rtl.render(<Display closed={true} />);
  const closedDisplay = wrapper.getByText(/closed/i);
  expect(closedDisplay).toHaveClass("red-led");
  expect(closedDisplay).toHaveTextContent(/closed/i);
});

test("green led open", async () => {
  const wrapper = rtl.render(<Display closed={false} />);
  const openDisplay = wrapper.getByText(/open/i);
  expect(openDisplay).toHaveClass("green-led");
  expect(openDisplay).toHaveTextContent(/open/i);
});

//all tests passing!!