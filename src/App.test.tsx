import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";

import App from "./App";
let [reposPerPage, sortBy, direction]: Array<string> = ["5", "created", "asc"];
let query = `dgray0229`;
let login = `dgray0229`;
const getData = `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`;
const searchData = `https://api.github.com/search/users?q=${query}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`;
const getRepos = `https://api.github.com/users/${login}/repos?per_page=${reposPerPage}&sort=${sortBy}:${direction}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`;

Enzyme.configure({ adapter: new Adapter() });
jest.mock("axios");

// Unit Tests with Jest
let container: any = null;
let wrapper: any = null;
let instance: any = null;
let getUsersSpy: any = null;

beforeAll(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  App.prototype.getUsers = jest.fn();
  wrapper = shallow(<App />, { disableLifecycleMethods: true });
  instance = wrapper.instance();
  // Use the instance when methods are stored as function expressions
  getUsersSpy = jest.spyOn(instance, "getUsers");
  // for declared functions using function() {}, run .spyOn on the component prototype
  // getUsersSpy = jest.spyOn(App.prototype, "getUsers")
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

  test("shallow rendering", () => {
    expect(wrapper.state("users")).toEqual(expect.any(Array));
  });

  test("getUsers runs on componentDidMount", () => {
    instance.componentDidMount();
    expect(getUsersSpy).toHaveBeenCalled();
  });

  test("Has Results", () => {
    wrapper.find("#users", {}, (results: Array<{}>) => {
      expect(results.length).toBeGreaterThan(0);
    });
  });
});
