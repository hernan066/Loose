import "./seccion4.css";
import { scrollAnimateUp } from "../../../utils/animationVariats";
import { motion } from "framer-motion";
import { datosProductos } from "../../../db/datosProductos";
import { Link } from "react-router-dom";

const Seccion4 = () => {
  const filtrados = datosProductos.filter((producto) => producto.destacado);

  return (
    <section className="seccion4__container">
      <motion.h2
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        variants={scrollAnimateUp}
        className="title"
      >
        Productos destacados
      </motion.h2>

      <motion.div
        className="seccion4__card-container"
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        {filtrados.map((producto) => {
          return (
            <motion.div
              className="seccion4__card"
              variants={scrollAnimateUp}
              key={producto.slug}
            >
              <Link to={`/producto/${producto.slug}`}>
                <div className="seccion4__card-image">
                  <img src={producto.img[0]} alt={producto.categoria} />
                </div>
              </Link>
              <h3>{producto.nombre}</h3>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Seccion4;
