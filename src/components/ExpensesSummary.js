import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export class ExpensesSummary extends React.Component {

    getTotal = (expenses) => {
        const total = this.props.getTotal(expenses);
        this.props.history.push('/');
        return total;
    }

    render() {
        const expCount = this.props.expenses ? this.props.expenses.length : 0;
        const expTotal = numeral(getTotal(this.props.expenses) / 100).format('$0,0.00');
        return (
            <div>
                <p>{`Viewing ${expCount} totalling ${expTotal}`}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

const mapDispatchToProps = (dispatch) => ({
    getTotal: (expenses) => dispatch(getTotal(expenses))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesSummary);