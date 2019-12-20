import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render expense summary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense summary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
});