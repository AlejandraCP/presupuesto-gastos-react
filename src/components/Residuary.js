import React, { Component } from 'react';
import { revisarPresupuesto } from '../Helper';

class Residuary extends Component {
    render() {
        const residuary = this.props.residuary
        const budget = this.props.budget
        return (
            <div className={revisarPresupuesto(budget, residuary)}>
                <p>Restante: S./ {residuary}</p>
            </div>
            );
        }
    }
  
export default Residuary;