import React from 'react'
import maleta from "../images/briefcase.svg";
import { useNavigate, Link } from "react-router-dom";




const Compraregreso = () => {
    const getInforegreso = JSON.parse(localStorage.getItem('inforegreso'))
    const navigate = useNavigate();

    const home =()=>{
      navigate('/');
      localStorage.clear();
    }

    const valorregreso =(e)=>{
      localStorage.setItem('valorlocalregreso', JSON.stringify(e));
      sessionStorage.setItem('valorlocalregresosession', JSON.stringify(e));
    console.log(e);
    
      }
  return (
    <>
    
    <div>{
      getInforegreso.map((element, index)=>{
        return(
          <div key={index}>
           
           <form className="vuelos_ida" onClick={()=>valorregreso(element)} >
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
         
      </form>



      

          </div>



        )
      })
      }</div>
































                  {/* <div>{
      getInforegreso.map((element, index)=>{
        return(
          <div key={index}>
           
           <form className="vuelos_ida" onClick={()=>valor(element)}>
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
         
      </form>



      

          </div>



        )
      })
      }</div>
       */}
                  
                  
                  
                  
                      </>
  )
}
export default Compraregreso;