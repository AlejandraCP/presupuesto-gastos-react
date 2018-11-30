import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';



class App extends Component {
  render() {
    const headerTitle = 'Gasto mensual'
    return (
      <div>
        <div>
          <Header titulo={headerTitle}/>
        </div>
        <div className='d-flex just-content-start'>
          <div className='w-50 bg-white p-1 border-blue'>
            <Formulario/>
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
