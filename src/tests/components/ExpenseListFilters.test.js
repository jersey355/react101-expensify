import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

// executes before each test case
beforeEach(() => {

    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );

});

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alternate data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = 'foo';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', { target: { value: 'date' } });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(2, 'days');
    wrapper.find('DateRangePicker').simulate('datesChange', { startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes', () => {
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').simulate('focusChange', calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});