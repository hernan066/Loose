import "./banner.css";
import images from "../../../assets/images";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <>
      <section className="seccion1__container">
        <div className="seccion1__left">
          <span className="seccion1__text sentite">SENTITE</span>
          <span className="seccion1__text en">EN</span>
          <span className="seccion1__text libertad">LIBERTAD</span>

          <div className="seccion1__img1_contanier">
            <motion.img 
            src={images.banner1} 
            alt="banner" 
            initial={{ x: 1500 }}
            animate={{ x: 0, transition: { duration: 1, delay:1.2 } }}
            />
          </div>
        </div>
        <div className="seccion1__right">
          <div className="seccion1__img2_contanier">
          <motion.span 
          className="seccion1__text2 iam"
          initial={{ x: 700 }}
          animate={{ x: 0, transition: { duration: 1, delay:1.2 } }}

           /* revisar para cambiar de color */

          >
            I{"`"}m
            </motion.span>
          <motion.span 
          className="seccion1__text2 loose"
          initial={{ x: 700 }}
          animate={{ x: 0, transition: { duration: 1, delay:1.2 } }}
          
          >Loose</motion.span>
            <motion.img 
            src={images.banner2} 
            alt="banner" 
            initial={{ x: -2000 }}
            animate={{ x: 0, transition: { duration: 1, delay:1.2 } }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
