import React from 'react'


 const Compraderecha = () => {
  const getValorLocal = JSON.parse(localStorage.getItem('valorlocal'));

  const getValorLocalregreso = JSON.parse(sessionStorage.getItem('valorlocalregresosession'));

console.log(getValorLocal)


const suma = ((getValorLocal.precio) - (getValorLocal.descuento))+(getValorLocal.iva);
const resta= ((getValorLocal.precio) - (getValorLocal.descuento))

  return (
    <>
    <span className="contenedor_derecha">
                  <div className="card_derecha">
                    <p className="card_1">Tu reservacion</p>
                    <p className="card_1">pasajeros {getValorLocal.pasajeros}</p>
                    <div className="card_1">vuelo de salida</div>
                    <div className="card_2">{getValorLocal.dedonde}</div>
                    <div className="card_3">{getValorLocal.horasalida} {getValorLocal.horallegada}</div>
                    <div className="card_4">
                      {getValorLocal.fechasalida}
                    </div>
                  </div>
                  <div className="card_derecha">
                    <div className="card_1">vuelo de regreso</div>
                    <div className="card_2">{getValorLocalregreso.dedonderegreso}</div>
                    <div className="card_3">{getValorLocalregreso.horasalidaregreso} {getValorLocalregreso.horallegadaregreso}</div>
                    <div className="card_4">{getValorLocalregreso.fecharegreso}</div>
                  </div>
                  <p className="card_derecha_abajo">Costo de vuelo</p>
                  <div className="contenedor_card_derecha">
                    <div className="tarifa">
                      <p>Tarifa base</p>
                      <p>${getValorLocal.precio}</p>
                    </div>
                    <div className="descuento">
                      <p>Descuento promocional</p>
                      <p>${getValorLocal.descuento}</p>
                    </div>
                    <div className="base">
                      <p>Tarifa base con descuento</p>
                      <p>${resta}</p>
                    </div>
                    <div className="iva">
                      <p>IVA Tarifa</p>
                      <p>${getValorLocal.iva}</p>
                    </div>
                    <div className="total">
                      <p>Total</p>
                      <p>${suma}</p>
                    </div>
                  </div>
                  

                </span>
    </>
  )
}
export default Compraderecha;