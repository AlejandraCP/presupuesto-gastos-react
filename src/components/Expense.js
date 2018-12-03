import React, {Component} from 'react';

class Expense extends Component {

    render() {
        return (
            <div>
                {console.log(this.props.expense)
                }
                <span>{this.props.expense.nameSpending}</span> <span>{this.props.expense.quantitySpending}</span>
            </div>
        );
    }
}

export default Expense;