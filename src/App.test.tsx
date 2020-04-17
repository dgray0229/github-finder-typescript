import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import renderer from "react-test-renderer";


import App from './App';

test("Sample test", () => {
  expect(true).toBeTruthy()
})

// test('renders successfully', () => {
//   const { getByTestId } = render(<App />);
//   const appId = getByTestId(/app/i);
//   expect(appId).toBeInTheDocument();
// });




describe("Main App", () => {
  test("Matches the snapshot", () => {
    const testApp = renderer.create(<App />);
    expect(testApp.toJSON()).toMatchSnapshot();
  });
});

// Sample Test
let container: Element | DocumentFragment | any = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
