import "./step2.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const Step2 = () => {
  const navigate = useNavigate();
  const { products, total, address } = useSelector((state) => state.cart);

  var templateParams = {
    nombre: address.nombre,
    apellido: address.apellido,
    email: address.email,
    telefono: address.telefono,
    direccion: address.direccion,
    provincia: address.provincia,
    ciudad: address.ciudad,
    codigoPostal: address.codigoPostal,
  };

  const sendEmail = () => {
    /* emailjs
      .send(
        "service_i3ypelr",
        "template_gxdfkpe",
        templateParams,
        "HCBCUslzfb40Y-RpR"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      ); */
    navigate("/checkout/finaliza-compra");
  };

  return (
    <motion.main
      className="confirm__container"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="card__nav" style={{ textAlign: "left" }}>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Mi carrito {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Datos de envio {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Resumen compra {">"}{" "}
        </span>
        <span style={{ color: "#aaa" }}>Finaliza compra</span>
      </div>

      <h1>Resumen de compra</h1>

      <div className="confirm__container__flex">
        <div className="confirm__left">
          <h2>Tus datos de envio</h2>

          <div className="confirm__data">
            <h4>
              {" "}
              Nombre:{" "}
              <span>
                {address.nombre} {address.apellido}{" "}
              </span>
            </h4>
            <h4>
              Correo electronico: <span> {address.email}</span>
            </h4>
            <h4>
              Telefono celular: <span>{address.telefono}</span>
            </h4>
            <h4>
              Direccion: <span>{address.direccion}</span>
            </h4>
            <h4>
              Provincia: <span>{address.provincia}</span>
            </h4>
            <h4>
              Ciudad: <span>{address.ciudad}</span>
            </h4>
            <h4>
              Codigo Postal: <span>{address.codigoPostal}</span>
            </h4>

            <button className="confirm__edit" onClick={() => navigate(-1)}>
              <i className="fas fa-arrow-left"></i> Editar datos
            </button>
          </div>
        </div>

        <div className="order__detalle">
          <h3>Resumen de compra</h3>
          {/*------------------ crear componente------------------- */}

          {products.map((producto) => {
            return (
              <div className="order__producto" key={producto.id}>
                <div className="order__img">
                  <img src={producto.imagen} alt="remera" />
                </div>
                <div className="order__title">
                  <h5>{producto.nombre}</h5>
                  <div className="order__price">
                    <p>Cant. {producto.cantidad} </p>
                    <p>${producto.precio}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/*------------------ crear componente------------------- */}

          <div className="order__total">
            <h4>Total</h4>
            <h4>${total}</h4>
          </div>

          <button className="confirm__right_btn" onClick={() => sendEmail()}>
            Confirmar compra
          </button>
        </div>
      </div>
    </motion.main>
  );
};
