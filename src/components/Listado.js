import React, {Component} from 'react';
import Expense from './Expense';


class Listado extends Component {

    render() {
        return (
            <div>
                <h2>Listado de Gastos</h2>
                {Object.keys(this.props.expenses).map(key => (
                    <Expense key={key} expense={this.props.expenses[key]}/>

                ))}
            </div>
        );
    }
}

export default Listado;