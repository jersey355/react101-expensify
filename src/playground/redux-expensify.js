import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({ type: 'REMOVE_EXPENSE', id });

// EDIT_EXPENSE
const editExpense = (id, updates) => ({ type: 'EDIT_EXPENSE', id, updates });

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({ type: 'SET_TEXT_FILTER', text });

// SORT_BY_DATE
const sortByDate = () => ({ type: 'SORT_BY_DATE' });

// SORT_BY_AMOUNT
const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });

// SET_START_DATE
const setStartDate = (startDate) => ({ type: 'SET_START_DATE', startDate });

// SET_END_DATE
const setEndDate = (endDate) => ({ type: 'SET_END_DATE', endDate });

// --------------------
// Expenses Reducer
// --------------------
const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            // note: we use map to update only the target expense, then 
            // we use the spread operator to first copy original expense, then override
            // with updates
            return state.map((exp) => {
                if (exp.id !== action.id) return exp;
                return { ...exp, ...action.updates };
            });
        default:
            return state;
    }

};

// --------------------
// Filters Reducer
// --------------------
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' };
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }

};

// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((exp) => {
        const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || exp.createdAt >= endDate;
        const textMatch = exp.description && exp.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } else {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
    });
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000 }));
const exp2 = store.dispatch(addExpense({ description: 'Coffee', amount: 5, createdAt: -21000 }));
const exp3 = store.dispatch(addExpense({ description: 'Rolex', amount: 10000, createdAt: 99 }));
const exp4 = store.dispatch(addExpense({ description: 'Tea', amount: 5, createdAt: -201000 }));
// store.dispatch(removeExpense({ id: exp1.expense.id }));
// store.dispatch(editExpense(exp2.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'flajfalfjaf',
        description: 'January Rent',
        note: 'This is the final payment for this address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};



