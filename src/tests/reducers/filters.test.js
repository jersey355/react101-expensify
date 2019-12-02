import moment from 'moment';
import reducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should setup sortBy amount', () => {
    const state = reducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should setup sortBy date', () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE' };
    const state = reducer(currentState, action);
    expect(state.sortBy).toBe('date');

});

test('Should setup text filter', () => {
    const text = 'foo';
    const state = reducer(undefined, { type: 'SET_TEXT_FILTER', text });
    expect(state.text).toBe(text);
});

test('Should setup startDate filter', () => {
    const startDate = moment();
    const state = reducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('Should setup endDate filter', () => {
    const endDate = moment();
    const state = reducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toEqual(endDate);
});


