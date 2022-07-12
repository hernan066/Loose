import { Link } from "react-router-dom";
import "./misDatos.css";

export const MisDatos = () => {
  return (
    <article className="user__mis-datos__container">
      <div className="user__data__main">
        <div className="user__data__main__mis-datos">
          <h3>Mis datos</h3>
          <div className="user__data__main-container">
            <div className="user__data__main__card full">
              <h4>Información de Contacto</h4>
              <p className="user__data__text">Hernan Pablo Moneta</p>
              <p className="user__data__text">hernan0066@gmail.com</p>
              <div>
                <Link to={"/"}>
                  <i className="fa-regular fa-pen-to-square"></i>Editar
                </Link>
                <Link to={"/"}>
                  <i className="fa-regular fa-pen-to-square"></i>Cambiar
                  contraseña
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
