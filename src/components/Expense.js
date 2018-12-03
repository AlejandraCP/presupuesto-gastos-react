import React, {Component} from 'react';

class Expense extends Component {

    render() {
        return (
            <div>
                <span>{this.props.expense.nameSpending}</span> <span>{this.props.expense.quantitySpending}</span>
            </div>
        );
    }
}

export default Expense;