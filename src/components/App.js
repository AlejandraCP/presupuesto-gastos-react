import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from '../Helper';
import BudgetControl from './BudgetControl';
class App extends Component {

  state = {
    expenses: {},
    budget: '',
    residuary: ''
  }

  componentDidMount() {
    this.getBudget();
    
  }

  getBudget() {
    let budget = prompt('Ingresar presupuesto');
    let valBudget = validarPresupuesto(budget);
    if(valBudget) {
      this.setState({
        budget: valBudget,
        residuary: valBudget
      })
    } else {
      this.getBudget();
    }
    
  }

  addExpenses = (expensesData) => {
    const expense = {...this.state.expenses};

    expense[`gasto${Date.now()}`] = expensesData;
    this.subtractBudget(expensesData.quantitySpending)

    this.setState({
      expenses: expense
    })

    
  }

  subtractBudget = quantity => {
    let residuary = parseInt(this.state.residuary) - parseInt(quantity);

    this.setState({
      residuary: residuary
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
            <Listado expenses={this.state.expenses}/>
            <BudgetControl 
              budget={this.state.budget}
              residuary={this.state.residuary} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
