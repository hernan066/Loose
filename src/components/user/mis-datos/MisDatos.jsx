import { useState } from "react";
import { Link } from "react-router-dom";
import { CambiarNombre } from "../cambiarNombre/CambiarNombre";
import { CambiarPass } from "../cambiarPass/CambiarPass";
import "./misDatos.css";

export const MisDatos = () => {
  const [route, setRoute] = useState("index")
  
  return (
    <article className="user__mis-datos__container">
      <div className="user__data__main">
        {
          route === 'index'?(
            <div className="user__data__main__mis-datos">
            <h3>Mis datos</h3>
            <div className="user__data__main-container">
              <div className="user__data__main__card full">
                <h4>Información de Contacto</h4>
                <p className="user__data__text">Hernan Pablo Moneta</p>
                <p className="user__data__text">hernan0066@gmail.com</p>
                <div>
                  <span onClick={()=>setRoute("cambiar-nombre")}>
                    <i className="fa-regular fa-pen-to-square"></i>Editar
                  </span>
                  <span onClick={()=>setRoute("cambiar-pass")}>
                    <i className="fa-regular fa-pen-to-square"></i>Cambiar
                    contraseña
                  </span>
                </div>
              </div>
            </div>
          </div>
          ): null
        }
        {
          route === 'cambiar-nombre'?( <CambiarNombre /> ): null
        }
        {
          route === 'cambiar-pass'?( <CambiarPass /> ): null
        }
        
       
      </div>
    </article>
  );
};
