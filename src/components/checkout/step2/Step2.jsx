import "./step2.css";
import image from "../../../assets/images";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Step2 = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  
  return (
    <main className="confirm__container">
      <div className="confirm__left">
        <h2>Tus datos de envio</h2>

        <div className="confirm__data">
          <h4> Nombre: <span>{cart.address.nombre} {cart.address.apellido} </span> 
          </h4>
          <h4>Correo electronico: <span> {cart.address.email}</span></h4>
          <h4>Telefono celular: <span>{cart.address.telefono}</span></h4>
          <h4>Direccion: <span>{cart.address.direccion}</span></h4>
          <h4>Provincia: <span>{cart.address.provincia}</span></h4>
          <h4>Ciudad: <span>{cart.address.ciudad}</span></h4>
          <h4>Codigo Postal: <span>{cart.address.codigoPostal}</span></h4>
          <button className="confirm__right_btn">Confirmar compra</button>
        </div>
      </div>

      <div className="order__detalle">
        <h3>Resumen de compra</h3>
        {/*------------------ crear componente------------------- */}

        <div className="order__producto">
          <div className="order__img">
            <img src={image.remeraNegra} alt="remera" />
          </div>
          <div className="order__title">
            <h4>Remera negra</h4>
            <div className="order__price">
              <p>Cant: 1 </p>
              <p>$2000</p>
            </div>
          </div>
        </div>

        {/*------------------ crear componente------------------- */}

        <div className="order__total">
          <h4>Total</h4>
          <h4>total</h4>
        </div>

        <button
          className="order__seguir_comprando"
          onClick={() => navigate(-1)}
        >
          <i className="fas fa-arrow-left"></i> Editar datos
        </button>
      </div>
    </main>
  );
};
