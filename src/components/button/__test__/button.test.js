import React from "react";
import ReactDOM from "react-dom"; //to render components in test
import Button from "../button";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from 'react-test-renderer';

describe("Button", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
  });

  it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="Click Here!!"></Button>);
    expect(getByTestId("button")).toHaveTextContent("Click Here!!");
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>)
    expect(tree).toMatchSnapshot();
  })
});

// Snapshot testing
