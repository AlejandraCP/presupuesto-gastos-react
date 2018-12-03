import React, { Component } from 'react';
import Budget from './Budget';
import Residuary from './Residuary';

class BudgetControl extends Component {
    render() {
        return (
            <div>
                <Budget budget={this.props.budget}/>
                <Residuary residuary={this.props.residuary} budget={this.props.budget}/>
            </div>
            );
        }
    }
  
export default BudgetControl;