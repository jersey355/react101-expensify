import moment from 'moment';
import expenses from '../fixtures/expenses';
import reducer from '../../reducers/expenses';

test('Should set default state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = reducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if ID not found', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1' // fake ID
    };

    const state = reducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {

    const expense = {
        id: '4',
        description: 'Coffee',
        note: '',
        amount: 659,
        createdAt: moment().valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = reducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);

});

test('Should edit expense by ID', () => {

    const note = 'foo';

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { note }
    };

    const state = reducer(expenses, action);
    expect(state[1].note).toBe(note);
});

test('Should not edit expense if ID not found', () => {

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1', // fake ID
        updates: { note: 'foo' }
    };

    const state = reducer(expenses, action);
    expect(state).toEqual(expenses);
});