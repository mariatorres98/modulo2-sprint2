import React, { useState } from "react";
import "../asientos/asientos.scss";
import { useNavigate, Link } from "react-router-dom";
import Compraderecha from "../compra/Compraderecha";
import Swal from "sweetalert2";

const Asientos = () => {
  const [pagar, setPagar] = useState(false);
  const [asientos, setAsientos] = useState(true);
  const [asientos1, setAsientos1] = useState(true);
  const [asientos2, setAsientos2] = useState(true);
  const [asientos3, setAsientos3] = useState(true);
  const [asientos4, setAsientos4] = useState(true);
  const [asientos5, setAsientos5] = useState(true);
  const [asientos6, setAsientos6] = useState(true);
  const [asientos7, setAsientos7] = useState(true);
  const [asientos8, setAsientos8] = useState(true);
  const [asientos9, setAsientos9] = useState(true);

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
            <p className="intermedio">salida rapida</p><br />
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn" ></button></div>
            <div className="boton"><button className="botonn" ></button></div>
            <div className="boton"><button className="botonn" ></button></div>
              <button className="boton_mid">1</button>
              <div className="boton">{asientos ? <button className="boton2" onClick={() => (setAsientos(!asientos),setPagar(!pagar))}></button>  : ''}</div>
              <div className="boton">{asientos1 ? <button className="boton2" onClick={() => setAsientos1(!asientos1)}></button>  : ''}</div>
              <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            </div>
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
              <button className="boton_mid">2</button>
              <div className="boton">{asientos2 ? <button className="boton2" onClick={() => setAsientos2(!asientos2)}></button>  : ''}</div>
              <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
              <div className="boton">{asientos3 ? <button className="boton2" onClick={() => setAsientos3(!asientos3)}></button>  : ''}</div>
            </div>
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            <div className="boton">{asientos4 ? <button className="boton2" onClick={() => setAsientos4(!asientos4)}></button>  : ''}</div>
            <div className="boton"><button className="botonn"></button></div>
              <button className="boton_mid">3</button>
              <div className="boton"><button className="botonn"></button></div>
              <div className="boton">{asientos5 ? <button className="boton2" onClick={() => setAsientos5(!asientos5)}></button>  : ''}</div>
              <div className="boton">{asientos6 ? <button className="boton2" onClick={() => setAsientos6(!asientos6)}></button>  : ''}</div>
            </div>
            
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn"></button></div>
            <div className="boton">{asientos7 ? <button className="botonn" onClick={() => setAsientos7(!asientos7)}></button>  : ''}</div>
            <div className="boton"><button className="botonn"></button></div>
              <button className="boton_mid">4</button>
              <div className="boton"><button className="botonn"></button></div>
              <div className="boton">{asientos8 ? <button className="boton2" onClick={() => setAsientos8(!asientos8)}></button>  : ''}</div>
              <div className="boton"><button className="botonn"></button></div>
            </div>
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn"></button></div>
            <div className="boton"><button className="botonn"></button></div>
            <div className="boton"><button className="botonn"></button></div>
              <button className="boton_mid">5</button>
              <div className="boton">{asientos9 ? <button className="boton2" onClick={() => setAsientos9(!asientos9)}></button>  : ''}</div>
              <div className="boton"><button className="botonn"></button></div>
              <div className="boton"><button className="botonn"></button></div>
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
            <p className="intermedio">salida rapida</p><br />
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn" ></button></div>
            <div className="boton"><button className="botonn" ></button></div>
            <div className="boton"><button className="botonn" ></button></div>
              <button className="boton_mid">1</button>
              <div className="boton">{asientos ? <button className="boton2" onClick={() => setAsientos(!asientos)}></button>  : ''}</div>
              <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
              <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            </div>
            <div className="contenedor_botones">
            <div className="boton">{asientos1 ? <button className="boton2" onClick={() => setAsientos1(!asientos1)}></button>  : ''}</div>
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
              <button className="boton_mid">2</button>
              <div className="boton">{asientos2 ? <button className="boton2" onClick={() => setAsientos2(!asientos2)}></button>  : ''}</div>
              <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
              <div className="boton">{asientos3 ? <button className="boton2" onClick={() => setAsientos3(!asientos3)}></button>  : ''}</div>
            </div>
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            <div className="boton"><button className="botonn" onClick={() => setAsientos(!asientos)}></button></div>
            <div className="boton"><button className="botonn"></button></div>
              <button className="boton_mid">3</button>
              <div className="boton">{asientos4 ? <button className="boton2" onClick={() => setAsientos4(!asientos4)}></button>  : ''}</div>
              <div className="boton">{asientos5 ? <button className="boton2" onClick={() => setAsientos5(!asientos5)}></button>  : ''}</div>
              <div className="boton">{asientos6 ? <button className="boton2" onClick={() => setAsientos6(!asientos6)}></button>  : ''}</div>
            </div>
            
            <div className="contenedor_botones">
            <div className="boton">{asientos8 ? <button className="boton2" onClick={() => setAsientos8(!asientos8)}></button>  : ''}</div>
            <div className="boton"><button className="botonn"></button></div>
            <div className="boton">{asientos7 ? <button className="botonn" onClick={() => setAsientos7(!asientos7)}></button>  : ''}</div>
            
              <button className="boton_mid">4</button>
              <div className="boton"><button className="botonn"></button></div>
              <div className="boton"><button className="botonn"></button></div>
              <div className="boton"><button className="botonn"></button></div>
            </div>
            <div className="contenedor_botones">
            <div className="boton"><button className="botonn"></button></div>
            <div className="boton">{asientos9 ? <button className="boton2" onClick={() => setAsientos9(!asientos9)}></button>  : ''}</div>
            <div className="boton"><button className="botonn"></button></div>
              <button className="boton_mid">5</button>
              <div className="boton"><button className="botonn"></button></div>
              <div className="boton"><button className="botonn"></button></div>
              <div className="boton"><button className="botonn"></button></div>
            </div>
           
          </span>
        </div>
<div><Compraderecha/>
{pagar ? <button className="escoger_asientos1" onClick={formulario}>
                    pagar con paypal
                  </button>  : ''}
</div>

      </div>
    </>
  );
};
export default Asientos;
