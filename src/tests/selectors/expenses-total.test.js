import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('Should return 0 for empty expenses array', () => {
    const total = getExpensesTotal([]);
    expect(total).toEqual(0);
});

test('Should return 0 for a falsy expenses array', () => {
    const total = getExpensesTotal(undefined);
    expect(total).toEqual(0);
});

test('Should correctly add up a single expense', () => {
    const exp = expenses[1];
    const total = getExpensesTotal([exp]);
    expect(total).toEqual(exp.amount);
});

test('Should correctly add up multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    let expectedTotal = 0;
    expenses.forEach((exp) => { expectedTotal += exp.amount });
    expect(total).toEqual(expectedTotal);
});
