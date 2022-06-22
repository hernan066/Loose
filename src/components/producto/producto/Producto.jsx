import { useState } from "react";
import { datosProductos } from "../../../db/datosProductos";
import { ProductSlideshow } from "../slider/ProductSlideshow";
import { useLocation } from "react-router";
import { motion } from "framer-motion";

import "./producto.css";

const Producto = () => {
  const [seletSize, setSeletSize] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [error, setError] = useState(false);

  const location = useLocation();

  const slug = location.pathname.split("/")[2];

  const productoFiltrado = datosProductos.filter((dato) => dato.slug === slug);
  
  const producto = productoFiltrado[0];

  const imagenes = producto?.img

  const agregar = () => {
    setCantidad(cantidad + 1);
  };
  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const comprar = () => {
    if (!seletSize) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <motion.section 
    className="producto__container"
    initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1.2 },
              }}
              exit={{ opacity: 0 }}
    
    >
      <div className="producto__slider_container">
        <ProductSlideshow imagenes={imagenes} />
      </div>

      <div className="producto__detalle">
        <h1>{producto?.categoria}</h1>
        <h2>{producto?.nombre}</h2>
        <h3>${producto?.precio}</h3>
        <p>{producto?.confeccion}</p>
        <p>{producto?.diseño}</p>
        <p>{producto?.consideraciones}</p>
        <div className="producto__talle">
          <p>ELIJA SU TALLE</p>
          <div className="producto__talle_letras">
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "S" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("S")}
            >
              S
            </div>
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "M" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("M")}
            >
              M
            </div>
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "L" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("L")}
            >
              L
            </div>
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "XL" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("XL")}
            >
              XL
            </div>
          </div>
        </div>
        <div className="producto__comprar">
          <div className="producto__cantidad">
            <div className="producto__cantidad_squat cursor" onClick={quitar}>
              -
            </div>
            <div className="producto__cantidad_squat">{cantidad}</div>
            <div className="producto__cantidad_squat cursor " onClick={agregar}>
              +
            </div>
          </div>
          <button className="producto__comprar_btn" onClick={comprar}>
            Comprar
          </button>
          {error && <p className="error">Error: Debe seleccionar un talle</p>}
        </div>
      </div>
    </motion.section>
  );
};

export default Producto;
