import React from "react";
import ReactDOM from "react-dom"; //to render components in test

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from 'react-test-renderer'; // for snapshot testing

import Button from "../button";
describe("Button", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
  });

  it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="Click Here!!"></Button>);
    expect(getByTestId("button")).toHaveTextContent("Click Here!!");
  });

  // Snapshot testing
  it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>)
    expect(tree).toMatchSnapshot();
  })
});



