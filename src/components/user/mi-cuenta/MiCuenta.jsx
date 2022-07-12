import "./miCuenta.css";
import { Link } from "react-router-dom";

export const MiCuenta = () => {
  return (
    <article className="user__mi-cuenta__container">
      <div className="user__data__main">
        <div className="user__data__main__mis-datos">
          <h3>Mis datos</h3>
          <div className="user__data__main-container">
            <div className="user__data__main__card">
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
            <div className="user__data__main__card">
              <h4>Newsletters</h4>
              <p className="user__data__text">
                No estás suscrito al newsletter.
              </p>
              <Link to={"/"}>
                <i className="fa-regular fa-pen-to-square"></i>Editar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="user__data__main">
        <div className="user__data__main__mis-datos">
          <h3>Mis direcciones</h3>
          <div className="user__data__main-container">
            <div className="user__data__main__card">
              <h4>Dirección de facturación</h4>
              <p className="user__data__text">
                Aún no guardaste una dirección de facturación.
              </p>

              <Link to={"/"}>
                <i className="fa-regular fa-pen-to-square"></i>Editar
              </Link>
            </div>
            <div className="user__data__main__card">
              <h4>Dirección de envío</h4>
              <p className="user__data__text">
                Aún no guardaste una dirección de envío.
              </p>
              <Link to={"/"}>
                <i className="fa-regular fa-pen-to-square"></i>Editar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
