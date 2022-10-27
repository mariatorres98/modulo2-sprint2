import React from "react";
import fondo from "../images/ala1.PNG";
import izquierda from "../images/izquierda.PNG";
import derecha from "../images/derecha.PNG";
import vuelos from "../images/vuelos.PNG";
import trasporte from "../images/trasporte.PNG";
import hoteles from "../images/hoteles.PNG";
import grupos from "../images/grupos.PNG";
import carga from "../images/carga.PNG";

const Homebutton = () => {
  return (
    <>
      <img src={fondo} alt="" className="header__fondo" />
      <p className="pago">Pago seguro</p>
      <div className="contenedorIconos">
        <div className="iconos_izquierda">
          <p className="titulo_icono_izquierda">
            Tarjeta de credito, tarjeta de debito y pago electronico
          </p>
          <img src={izquierda} alt="" className="icono_izquierda" />
        </div>
        <div className="iconos_derecha">
          <p className="titulo_icono_derecha">
            Efectivo en cualquiera de las sucursales participantes
          </p>
          <img src={derecha} alt="" className="icono_derecha" />
        </div>
      </div>
      <p className="pago">Servicios disponibles</p>
      <div className="contenedorCards">
        <div className="iconos_cards">
          <img src={trasporte} alt="" className="iconosCards" />
          <p className="titulo_cards">Trasporte</p>
          <p className="titulo_cards1">
            Renta un auto o reserva <br /> un shuttle
          </p>
        </div>
        <div className="iconos_cards2">
          <img src={vuelos} alt="" className="iconosCards" />
          <p className="titulo_cards">Vuelos + Hoteles</p>
          <p className="titulo_cards1">
            Encuentra las mejores <br /> ofertas para tu viaje
          </p>
        </div>
        <div className="iconos_cards2">
          <img src={grupos} alt="" className="iconosCards" />
          <p className="titulo_cards">Grupos</p>
          <p className="titulo_cards1">
            Obten una cotizacion <br />
            para grupos de mas de <br />9 personas{" "}
          </p>
        </div>
        <div className="iconos_cards2">
          <img src={hoteles} alt="" className="iconosCards" />
          <p className="titulo_cards">Hoteles</p>
          <p className="titulo_cards1">
            Reserva cualquier
            <br /> habitacion en <br />
            cualquier parte del <br />
            mundo.
          </p>
        </div>
        <div className="iconos_cards2">
          <img src={carga} alt="" className="iconosCards" />
          <p className="titulo_cards">Carga</p>
          <p className="titulo_cards1">
            Contamos con servicio <br /> de carga y mensajeria.
          </p>
        </div>
      </div>
    </>
  );
};
export default Homebutton;
