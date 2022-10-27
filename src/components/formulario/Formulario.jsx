import React, { useState } from "react";
import "../formulario/formulario.scss";
import Swal from "sweetalert2";

const Formulario = () => {
  const [tiquet, setTiquet] = useState(false);

  const getValorLocal = JSON.parse(localStorage.getItem("valorlocal"));


  const alert = (e) => {
    e.preventDefault();

    const obtenerValue = {
      nombrePasajero: e.target.nombre.value,
      edadPasajero: e.target.edad.value,
      celularPasajero: e.target.celular.value,
      targetaPasajero: e.target.targeta.value,
      fechapasajero: e.target.fecha.value,
    };
    console.log(obtenerValue);
    Swal.fire("Felicitaciones!", "Su pago ha sido procesado!", "success");
  
  };

  return (
    <>
      <div className="todo">
        <div className="bodyy">
          <div className="containerformulario" id="container">
            <div className="form-container sign-in-container">
              <form onSubmit={alert} className="formulario1">
                <h2>Confirmar compra</h2>
                <span>Complete los siguientes datos</span>
                <input
                  className="imput"
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                />
                <input
                  className="imput"
                  type="number"
                  name="edad"
                  placeholder="Edad"
                />
                <input
                  className="imput"
                  type="number"
                  name="celular"
                  placeholder="Celular"
                />
                <input
                  className="imput"
                  type="number"
                  name="targeta"
                  placeholder="# targeta"
                />
                <input
                  className="imput"
                  type="number"
                  name="fecha"
                  placeholder="Fecha de vencimiento"
                />
                <button
                  type="submit"
                  className="botonform"
                  onClick={() => setTiquet(!tiquet)}
                >
                  Comprar
                </button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left"></div>
                <div className="overlay-panel overlay-right">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/984/984284.png"
                    alt=""
                    className="avion"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       {tiquet ?  <div className="tiquete">
          <p className="letraform">Tiquete de compra</p>
          <div className="letraform">codigo de vuelo: 0814582</div>
          <div className="letraform">Numero de reserva: 01</div>
          <div className="letraform">
            Dia del vuelo:{getValorLocal.fechasalida}{" "}
          </div>
          <img
                    src="https://cdn-icons-png.flaticon.com/512/984/984284.png"
                    alt=""
                    className="avion2"
                  />
          <div className="letraform">De: {getValorLocal.dedonde}</div>
        </div> : ''}
      </div>
    </>
  );
};
export default Formulario;
