import "./seccion4.css";
import images from "../../../assets/images";
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
      >
        productos
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
            <img src={images.remeraNegra} alt="remera negra" />
          </div>
          <h3>One Black</h3>
        </motion.div>
        <motion.div className="seccion4__card" variants={scrollAnimateUp}>
          <div className="seccion4__card-image">
            <img
              src="http://vision.centroculturadigital.mx/media/done/1550616316563-QR-GlosarioCCD-cont.png"
              alt="logo qr"
            />
          </div>
          <h3>Codigo QR</h3>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Seccion4;
