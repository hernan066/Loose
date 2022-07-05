import "./seccion4.css";
import { scrollAnimateUp } from "../../../utils/animationVariats";
import { motion } from "framer-motion";

const Seccion4 = () => {
  return (
    <section className="seccion4__container">
      <motion.h2
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        variants={scrollAnimateUp}
        className='title'
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
        <motion.div className="seccion4__card" variants={scrollAnimateUp}>
          <div className="seccion4__card-image">
            <img src='https://ik.imagekit.io/mrprwema7/loose/productos/one_white_N_PnRIkxf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656450120986' alt="remera blanca" />
          </div>
          <h3>One White</h3>
        </motion.div>
        <motion.div className="seccion4__card" variants={scrollAnimateUp}>
          <div className="seccion4__card-image">
            <img src='https://ik.imagekit.io/mrprwema7/loose/productos/one_black_AGmguoYEi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656554427362' alt="remera negra" />
          </div>
          <h3>One Black</h3>
        </motion.div>
        <motion.div className="seccion4__card " variants={scrollAnimateUp}>
          <div className="seccion4__card-image">
            <img
              src="https://ik.imagekit.io/mrprwema7/loose/productos/RemeraEze_2QO3tpIeK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656543654549"
              alt="Buzo salmon"
            />
          </div>
          <h3>One salmon</h3>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Seccion4;
