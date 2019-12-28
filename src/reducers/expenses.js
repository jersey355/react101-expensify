const expensesDefaultState = [];

export default (state = expensesDefaultState, action) => {

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
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }

};
