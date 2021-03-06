import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });
jest.mock("axios");

// Unit Tests with Jest
let container: Element | DocumentFragment | any
let wrapper: Partial<React.Component<{}, {}, any>> | any

beforeAll(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  wrapper = shallow(<App />, { disableLifecycleMethods: true });
  // Use the instance when methods are stored as function expressions
});

afterAll(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

describe("Main App", () => {
  test("renders without crashing", () => {
    const div = document.body.appendChild(container);
    ReactDOM.render(<App />, div);
    unmountComponentAtNode(div);
  });

  test("renders successfully", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("Has Results", () => {
    wrapper.find("#users", {}, (results: Array<{}>) => {
      expect(results.length).toBeGreaterThan(0);
    });
  });
});
