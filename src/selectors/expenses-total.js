export default (expenses) => {
    return expenses
        ? expenses
            .map(exp => exp.amount)
            .reduce((total, value) => total + value, 0)
        : 0;
};