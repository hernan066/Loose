import { useState } from "react";
import { CambiarDireccion } from "../cambiarDireccion/CambiarDireccion";

import "./misDirecciones.css";

export const MisDirecciones = () => {
  const [route, setRoute] = useState("index");

  return (
    <article className="user__mis-direcciones__container">
      <div className="user__data__main">
        {route === "index" ? (
          <div className="user__data__main__mis-datos">
            <h3>Mi direccion</h3>
            <div className="user__direction__main-container center">
              <div className="user__direccion__data">
                <h4>Dirección de envío</h4>
                <p>Hernan Pablo Moneta</p>
                <p>Documento: 29481148</p>
                <p>Tel: 03412728539</p>
                <p>Medrano, 2636</p>
                <p>Rosario, Santa Fe, 2000</p>

                <span onClick={() => setRoute("cambiar-direccion")}>
                  <i className="fa-regular fa-pen-to-square"></i>Editar
                </span>
              </div>
            </div>
          </div>
        ) : null}
        {route === "cambiar-direccion" ? <CambiarDireccion /> : null}
      </div>
    </article>
  );
};
