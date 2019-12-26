import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render expense summary with 1 expense', () => {
    const expense = [expenses[0]];
    const wrapper = shallow(<ExpensesSummary expenses={expense} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense summary with many expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});