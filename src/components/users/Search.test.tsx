import React from 'react';
import { unmountComponentAtNode, findDOMNode } from 'react-dom';
import { render } from '@testing-library/react';
import renderer from "react-test-renderer";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';


import Search from './Search';

Enzyme.configure({ adapter: new Adapter() })

let wrapper: any = null
let instance: any = null

let props: any = {
    searchUsers: false,
    clearUsers: jest.fn(x => x),
    showClear: jest.fn(x => x),
    setAlert: jest.fn(x => x),
}


beforeAll(() => {
    wrapper = shallow(<Search {...props} />)
    instance = wrapper.instance()
})

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

describe("Search Component", () => {
    test('renders successfully', () => {
        expect(wrapper.exists()).toBe(true)
    });
    test("Has Results", () => {
        wrapper.find('.container', {}, (results: any) => {
            expect(results.length).toBeGreaterThan(0)
        })
    });
    test("Query Should Match Text Input", () => {
        act(() => {
            render(<Search {...props} />, container)
        });

        wrapper.find('#query').simulate('change', {currentTarget: {name: 'query', value: 'dgray0229'}})
        wrapper.find('#query', {}, (result: any) => {
            expect(result[0].value).toEqual(wrapper.state().query)
            expect(result[0].value).toEqual("dgray0229")
            expect(wrapper.state().query).toEqual("dgray0229")
        })

    })
})