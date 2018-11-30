import React, {Component} from 'react';

class Listado extends Component {

    render() {
        return (
            <div>
                <h2>Listado de Gastos</h2>
                {console.log(this.props.expenses)}
            </div>
        );
    }
}

export default Listado;