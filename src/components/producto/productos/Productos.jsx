import "./productos.css";
import { datosProductos } from "../../../db/datosProductos";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { motion } from "framer-motion";

export const Productos = () => {
  const location = useLocation();

  return (
    <motion.main 
    className="productos__container"
    initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1.2 },
              }}
              exit={{ opacity: 0 }}
    >
      <h1>Productos</h1>

      <div className="productos__cards_container">
        {datosProductos.map((producto) => {
          return (
            <div className="seccion4__card" key={producto.slug}>
              <Link to={`/producto/${producto.slug}`}>
                <div className="seccion4__card-image">
                  <img src={producto.img[0]} alt="remera blanca" />
                </div>
              </Link>

              <h2 style={{ textAlign: "center", textTransform: "capitalize" }}>
                {producto.categoria}
              </h2>
              <h3>{producto.nombre}</h3>
            </div>
          );
        })}
      </div>
    </motion.main>
  );
};
