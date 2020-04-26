import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import renderer from "react-test-renderer";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import About from './About';

Enzyme.configure({ adapter: new Adapter() })


describe("About Page", () => {
    test('renders successfully', () => {
        const wrapper = shallow(<About />)
        expect(wrapper.exists()).toBe(true)
      });  
});