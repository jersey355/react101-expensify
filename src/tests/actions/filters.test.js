import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('Should generate start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate text filter action object', () => {
    const text = 'foo';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate text filter action object with defaults', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('Should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});