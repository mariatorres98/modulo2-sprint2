import React from "react";
import "../compra/compra.scss";
import maleta from "../images/briefcase.svg";
import { useNavigate, Link } from "react-router-dom";
import Compraderecha from "./Compraderecha";
import Compraregreso from "./Compraregreso";

const Compra = () => {
  const getInfo = JSON.parse(localStorage.getItem('info'));

  console.log(getInfo);
  const navigate = useNavigate();

  const home =()=>{
    navigate('/');
    localStorage.clear();
  }
  const asientos = () => {
    navigate("/asientos");
  };

const valor =(e)=>{
  localStorage.setItem('valorlocal', JSON.stringify(e));
console.log(e);

  }


  return (

    <>
    <div className="pruebita">
    <div className="pagina_compra">
    <div>{
      getInfo.map((element, index)=>{
        return(
          <div key={index}>
           
        <form className="vuelos_ida" onClick={()=>valor(element)}>
        <p className="fecha_salida2">Vuelo de salida</p>
        <p className="fecha_salida">{element.fechasalida}</p>
        <p className="info">{element.dedonde}</p>
        <p className="seleccion">Seleccion de horarios y equipajes</p>

        <div className="card_seleccion">
          <div className="hora_salida">{element.horasalida}</div>
          <div className="contenido_escalas">
            <p className="duracion_vuelo">{element.duracion}</p>
            <p className="linea">-----------</p>
            <p className="escalas">{element.escalas}</p>
          </div>
          <div className="hora_llegada">{element.horallegada}</div>
          <button className="boton_maleta">
            <img src={maleta} alt="" className="maleta" />
            <p className="objeto">1 objeto personal</p>
            <p className="precio">${element.matela1}</p>
          </button>
          <button className="boton_maleta">
            <img src={maleta} alt="" className="maleta" />
            <p className="objeto">Equipaje de mano</p>
            <p className="precio">${element.matela2}</p>
          </button>
          <button className="boton_maleta">
            <img src={maleta} alt="" className="maleta" />
            <p className="objeto">Equipaje de 25kg</p>
            <p className="precio">${element.matela3}</p>
          </button>
          <button className="guardar"><div></div></button>
        </div>
        
        <button className="cambiar_vuelo" onClick={home}>cambiar vuelo</button>  
         
      </form>
      
          </div>
          

        )
      })
      }</div>
<Compraregreso/>




      



     
    </div>
    <div>   <Compraderecha />
    <button className="escoger_asientos" onClick={asientos}>
                    Escoger asientos
                  </button>
                  </div>
 
    </div>

   
    </>
  );
};
export default Compra;
