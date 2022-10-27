import React, { useState } from "react";
import "../compra/compra.scss";
import maleta from "../images/briefcase.svg";
import { useNavigate, Link } from "react-router-dom";
import Compraderecha from "./Compraderecha";
import Compraregreso from "./Compraregreso";

const Compra = () => {
  const [derecha, setDerecha] = useState(false);

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
  const getInforegreso = JSON.parse(localStorage.getItem('info'))


  const valorregreso =(a)=>{
    localStorage.setItem('valorlocalregreso', JSON.stringify(a));
    sessionStorage.setItem('valorlocalregresosession', JSON.stringify(a));
  console.log(a);
  
    }

  return (

    <>
    
    <div className="pruebita">
    <div className="pagina_compra">
      
    <div>{
      getInfo.map((element, index)=>{
        return(
          <div key={index}>
           {/* (valor(element),setDerecha(!derecha)) */}
        <div className="vuelos_ida" onClick={()=>valor(element)}>
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
         
      </div>
      
          </div>
          

        )
      })
      }</div>
      
{/* <Compraregreso/> */}
<div className='resultadoDerecha'>
         
                  
    <div>{
      getInforegreso.map((element, index)=>{
        return(
          <div key={index}>
           <div className="vuelos_ida" onClick={()=>(valorregreso(element),setDerecha(!derecha))} >
        <p className="fecha_salida2">Vuelo de regreso</p>
        <p className="fecha_salida">{element.fecharegreso}</p>
        <p className="info">{element.dedonderegreso}</p>
        <p className="seleccion">Seleccion de horarios y equipajes</p>

        <div className="card_seleccion">
          <div className="hora_salida">{element.horasalidaregreso}</div>
          <div className="contenido_escalas">
            <p className="duracion_vuelo">{element.duracionregreso}</p>
            <p className="linea">-----------</p>
            <p className="escalas">{element.escalasregreso}</p>
          </div>
          <div className="hora_llegada">{element.horallegadaregreso}</div>
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
         
      </div>

          </div>

        )
      })
      }</div>

                  </div>
    
    </div>
    <div> 
        
        {derecha ? <Compraderecha />  : ''}
        {derecha ? <button className="escoger_asientos" onClick={asientos}>
                    Escoger asientos
                  </button>  : ''}
    
                  </div>
 
    </div>

   
    </>
  );
};
export default Compra;
