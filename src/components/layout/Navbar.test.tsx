import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './Navbar';

Enzyme.configure({ adapter: new Adapter() })

describe("Navbar Component", () => {
  test("renders main component", () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot();

  })
})
