import React from 'react';
import { revisarPresupuesto } from '../Helper';

const Residuary = props => {
    const residuary = props.residuary
    const budget = props.budget
    return (
        <div className={revisarPresupuesto(budget, residuary)}>
                <p>Restante: S./ {residuary}</p>
            </div>
    )
}

export default Residuary;