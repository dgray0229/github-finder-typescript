import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RepoItem from "./RepoItem";

Enzyme.configure({ adapter: new Adapter() });

let wrapper: any

let props: any = {
  repo: {
    id: 156953038,
    name: "docz-website",
    html_url: "https://github.com/mojombo/docz-website",
  },
  key: 156953038
};

beforeAll(() => {
  wrapper = shallow(<RepoItem {...props} />);
});

let container: any;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("RepoItem Component", () => {
  test("renders successfully", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("displays name from prop", () => {
    expect(wrapper.find('.card a').props()).toEqual({
        children: props.repo.name,
        href: props.repo.html_url,
        rel: "noopener noreferrer",
        target: "_blank"
      });
  
    expect(wrapper.text()).toEqual("docz-website");
  });
});
