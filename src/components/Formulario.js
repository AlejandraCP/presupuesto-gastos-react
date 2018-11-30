import React, { Component } from 'react';

class Formulario extends Component {

    nameSpending = React.createRef();
    quantitySpending = React.createRef();

    createExpense = (e) => {
        e.preventDefault();
        const expense = {
            nameSpending: this.nameSpending.current.value,
            quantitySpending: this.quantitySpending.current.value
        }
        this.props.addExpensesProps(expense)
        e.currentTarget.reset();
    }
    render() {
      return (
        <div>
            <form onSubmit={this.createExpense}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="">
                    <label>Nombre Gasto</label>
                    <input className="" type="text" ref={this.nameSpending} placeholder="Ej. Transporte" />
                </div>

                <div className="">
                    <label>Cantidad</label>
                    <input className="" type="text" ref={this.quantitySpending} placeholder="Ej. 300" />
                </div>

                <input className="" type="submit" value="Agregar" />
            </form>
        </div>
      );
    }
  }
  
  export default Formulario;
