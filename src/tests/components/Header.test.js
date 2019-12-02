import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('Should render Header correctly', () => {

    // USING enzyme to JSON to avoid enzyme snapshot overhead: 
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // USING enzyme:
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');

    // USING ReactShallowRenderer:
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});