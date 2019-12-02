import { createStore } from 'redux';

// --------------------------
// ACTIONS: 
// 1. action generators are functions that return action objects
// --------------------------

// here we use destructuring to help with input params
const incrementBy = ({ value = 1 } = {}) => ({
    type: 'INCREMENT',
    value
});

const decrementBy = ({ value = 1 } = {}) => ({
    type: 'DECREMENT',
    value
});

const reset = () => ({
    type: 'RESET'
});

const set = ({ value = 0 } = {}) => ({
    type: 'SET',
    value
});

// --------------------------
// Reducers:
// 1. Pure functions (output is ONLY determined by input and does not interact with the outside)
// 2. Never change state or action
// --------------------------

const countReducer = ((state = { count: 0 }, { type, value }) => {

    switch (type) {
        case 'INCREMENT':
            return { count: state.count + value };
        case 'DECREMENT':
            return { count: state.count - value };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: value };
        default:
            return state;
    }

});

// --------------------------

const store = createStore(countReducer); // not this takes a callback function

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// 'type' property is required by redux, but you can pass any additional custom data such as incrementBy or decrementBy
store.dispatch(incrementBy({ value: 5 }));
//unsubscribe();
store.dispatch(incrementBy());
store.dispatch(reset());
store.dispatch(decrementBy());
store.dispatch(decrementBy({ value: 10 }));
store.dispatch(set({ value: 101 }));
