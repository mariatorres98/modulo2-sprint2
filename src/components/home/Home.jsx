import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./home.scss";
import {Getvuelos} from "../../service/Getvuelos.js"

import { useNavigate, Link } from "react-router-dom";
import Homebutton from "../home/Homebutton.jsx";



const Home = () => {
  
  const [sensillo, setSencillo] = useState(false);

  const filtrado = [];
  const navigate = useNavigate();
  //funcion que se me ejecuta con el click en buscar
  const compra = async(e) => {
    e.preventDefault();
    //obtener los valores de mis botones
    const obtenerValue = {
  
      origen: e.target.origen.value,
      destino: e.target.destino.value,
      fechaSalida: e.target.fechaSalida.value,
      fechaRegreso: e.target.fechaRegreso.value,
      cantidadPasajeros: e.target.cantidadPasajeros.value,
      codigoDescuento: e.target.codigoDescuento.value,
    } 
    console.log(obtenerValue);
    //traer datos filtrados de la api
     const prueba= await Getvuelos(obtenerValue);
     console.log(prueba);
     //guardar datos filtrados y value en local
    const guardarInfo = localStorage.setItem('info', JSON.stringify(prueba));
    const guardarInforegreso = localStorage.setItem('inforegreso', JSON.stringify(prueba));
    const valueInfo = localStorage.setItem('valueInfo', JSON.stringify(obtenerValue));
    localStorage.setItem('valorlocal', JSON.stringify(prueba));

    // console.log(prueba[0].pasajeros)
    console.log(obtenerValue.cantidadPasajeros)
//funcion que me comprueba los pasajeros disponibles
 prueba.forEach(element => {

      console.log(element.pasajeros)

      if(element.pasajeros>=obtenerValue.cantidadPasajeros){
        console.log('si cumple'); 
        
        filtrado.push(element);
        console.log(filtrado);
        funsion();
      }else{

        funsion();
        
      }
    });
 
  };


const funsion =()=>{
if(filtrado.length){
 
  navigate("/compra");
  console.log('nueva pagina');
  
}else{
 
  // Swal.fire('upp no hay vuelos')
  
}

}
const comprasensillo = () => {
  navigate("/sensillo");
  
};

  return (
    <>
      <form className="card__principal" onSubmit={compra} >
        <div>
          <h1 className="card__principal__titulo1">
            Busca un nuevo destino y <br /> comienza la aventura.
          </h1>
          <h2 className="card__principal__titulo2">
            Descubre vuelos al mejor precio y perfectos para cualquier viaje.
          </h2>
          <div className="card__principal__boton">
            <button name="viajeRedondo" onClick={() => setSencillo(!sensillo)} type="submit" className="card__principal__boton__1">
              {" "}
              <p>Viaje redondo </p>{" "}
            </button>
            <button name="viajeSencillo" type="submit" onClick={() => setSencillo(!sensillo)} className="card__principal__boton__2">
              {" "}
              <p>Viaje sencillo </p>{" "}
            </button>
          </div>

          <div className="card__principal__inferior">
            <span className="card__principal__inferior__origen">
              <select
                name="origen"
                className="card__principal__inferior__origen__select"
              >
                <option value="">---</option>
                <option value="otawa"> Otawa</option>
                <option value="alberta"> Alberta</option>
              </select>
              <h6 className="card__principal__inferior__origen__titulo">
                Origen
              </h6>
            </span>
            <span className="card__principal__inferior__salida">
              <h6 className="card__principal__inferior__salida__titulo">
                Salida
              </h6>
              <input
                type="date"
                name="fechaSalida"
                className="main_form_control"
                aria-label="Fecha"
                aria-describedby="date"
                min="2022-10-27"
                max="2022-11-10"
              />
            </span>
            <span className="card__principal__inferior__pasajeros">
              <h6 className="card__principal__inferior__pasajeros__titulo">
                Pasajeros
              </h6>
              <select name="cantidadPasajeros" className="pasajeros">
                <option value="">---</option>
                <option value="1"> 1 Adulto</option>
                <option value="2"> 2 Adulto</option>
                <option value="3"> 3 Adulto</option>
                <option value="4"> 4 Adulto</option>
                <option value="20"> 20 Adulto</option>
              </select>
            </span>
          </div>
        </div>
        <div className="derecha">
          <span className="destino">
            <select name="destino" className="select">
              <option value="">---</option>
              <option value="otawa"> Otawa</option>
              <option value="alberta"> Alberta</option>
            </select>
            <h6 className="titulo">Seleccion un destino</h6>
          </span>

          <span className="regreso">
            <h6 className="regreso_titulo">Regreso</h6>
            <input
              type="date"
              name="fechaRegreso"
              className="main_form_control1"
              aria-label="Fecha"
              aria-describedby="date"
              min="2022-10-27"
              max="2022-11-10"
            />
          </span>

          <span className="codigo">
            {" "}
            <h6 className="codigo_titulo"> ¿Tienes un código de promoción?</h6>
            <input
              type="text"
              name="codigoDescuento"
              style={{ marginLeft: "5px" }}
              placeholder="  -- -- -- --"
              className="codigo_input"
            />
          </span>
          <br />
          <button type="submit" className="buscarVuelos" >
            {" "}
            <p className="tituloVuelos">Buscar vuelos </p>{" "}
          </button>
          
          
          
        </div>
      </form>


      <Homebutton/>
      
      {sensillo ?  <div className="vuelosensillo"></div> : ''}
      
      
    </>
  );
  
};
export const pasarcompra= (a)=>{
      const resultadopeticion= a;
}
export default Home;
