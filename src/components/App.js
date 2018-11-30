import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {

  state = {
    expenses: {},
    budget: '',
    residuary: ''
  }

  addExpenses = (expensesData) => {
    const expense = {...this.state.expenses};

    expense[`gasto${Date.now()}`] = expensesData;

    this.setState({
      expenses: expense
    })
  }

  render() {
    const headerTitle = 'Gasto mensual'
    return (
      <div>
        <div>
          <Header titulo={headerTitle}/>
        </div>
        <div className='d-flex just-content-start'>
          <div className='w-50 bg-white p-1 border-blue'>
            <Formulario addExpensesProps={this.addExpenses}/>
          </div>
          <div className='w-50 bg-white p-1 border-blue'>
            <p>ipsum</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
