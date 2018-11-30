import React, { Component } from 'react';

class Formulario extends Component {
    render() {
      return (
        <div>
            <form>
                <h2>Agrega tus gastos aqui</h2>
                <div className="">
                    <label>Nombre Gasto</label>
                    <input className="" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="">
                    <label>Cantidad</label>
                    <input className="" type="text" placeholder="Ej. 300" />
                </div>

                <input className="" type="submit" value="Agregar" />
            </form>
        </div>
      );
    }
  }
  
  export default Formulario;
