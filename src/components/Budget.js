import React, { Component } from 'react';

class Budget extends Component {
    render() {
        return (
            <div>
                <p>Presupuesto: S./ {this.props.budget}</p>
            </div>
            );
        }
    }
  
export default Budget;