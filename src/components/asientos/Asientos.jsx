import React from "react";
import "../asientos/asientos.scss";
import { useNavigate, Link } from "react-router-dom";
import Compraderecha from "../compra/Compraderecha";
import Swal from "sweetalert2";

const Asientos = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const formulario = () => {
    navigate("/formulario");
    
  };

  return (
    <>
      <div className="asientos">
        <div className="izquierda">
          <span>
            <div className="div_superior">
              <p className="fecha_salida2">Vuelo de salida</p>
              <button className="cambiar_vuelo2" onClick={home}>
                cambiar vuelo
              </button>
            </div>

            <p className="fecha_salida">Martes 30 nov 2021</p>
            <p className="info2">Cd.Mex [AICM] a culiacan</p>
            <p className="seleccion2">Selecciona tus asientos</p>
            <div className="contenedor_botones">
              <button className="boton_mid">A</button>
              <button className="boton_mid">B</button>
              <button className="boton_mid">C</button>
              <button className="boton_mid"></button>
              <button className="boton_mid">D</button>
              <button className="boton_mid">E</button>
              <button className="boton_mid">F</button>
            </div>
            <p className="intermedio">salida rapida</p>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton2"></button>
              <button className="boton_mid">1</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton2"></button>
              <button className="boton_mid">2</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton2"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton2"></button>
              <button className="boton_mid">3</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">4</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton2"></button>
              <button className="boton"></button>
              <button className="boton_mid">5</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <p className="intermedio">Estandar</p>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton2"></button>
              <button className="boton"></button>
              <button className="boton_mid">6</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">7</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">8</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">9</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">10</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>

            <p className="fecha_salida2">Vuelo de regreso</p>
            <p className="fecha_salida">Martes 30 nov 2021</p>
            <p className="info2">Cd.Mex [AICM] a culiacan</p>
            <p className="seleccion2">Selecciona tus asientos</p>
            <div className="contenedor_botones">
              <button className="boton_mid">A</button>
              <button className="boton_mid">B</button>
              <button className="boton_mid">C</button>
              <button className="boton_mid2"></button>
              <button className="boton_mid">D</button>
              <button className="boton_mid">E</button>
              <button className="boton_mid">F</button>
            </div>
            <p className="intermedio">salida rapida</p>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">1</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">2</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">3</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">4</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">5</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <p className="intermedio">Estandar</p>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">6</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">7</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">8</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">9</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
            <div className="contenedor_botones">
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton_mid">10</button>
              <button className="boton"></button>
              <button className="boton"></button>
              <button className="boton"></button>
            </div>
          </span>
        </div>
<div><Compraderecha/>
<button className="escoger_asientos1" onClick={formulario}>
                    pagar con paypal
                  </button></div>

      </div>
    </>
  );
};
export default Asientos;
