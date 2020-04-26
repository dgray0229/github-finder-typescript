import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from './Spinner';

Enzyme.configure({ adapter: new Adapter() })

describe("Spinner Component", () => {
  test("renders main component", () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot();

  })
})
