import React, { Component } from 'react';
import Header from './Header';


class App extends Component {
  render() {
    const headerTitle = 'Gasto mensual'
    return (
      <div>
        <Header titulo={headerTitle}/>
      </div>
    );
  }
}

export default App;
