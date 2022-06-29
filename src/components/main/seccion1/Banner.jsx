import "./banner.css";
import images from "../../../assets/images";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

export const Banner = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <section className="seccion1__container">
        <div className="seccion1__left">
          <span className="seccion1__text sentite">SENTITE</span>
          <span className="seccion1__text en">EN</span>
          <span className="seccion1__text libertad">LIBERTAD</span>

          <div className="seccion1__img1_contanier">
            {matches && (
              <motion.img
                src='https://ik.imagekit.io/mrprwema7/loose/banners/banner1_desktop_UawGsibYJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656447644985'
                alt="banner desktop"
                initial={{ x: 1500 }}
                animate={{ x: 0, transition: { duration: 1, delay: 1.2 } }}
              />
            )}
            {!matches && (
              <motion.img
                src="https://ik.imagekit.io/mrprwema7/loose/banners/banner1_mobile_ARRCpy262.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656448439501"
                alt="banner mobile"
                initial={{ x: 700 }}
                animate={{ x: 0, transition: { duration: 1, delay: 1.2 } }}
              />
            )}
          </div>
        </div>
        <div className="seccion1__right">
          <motion.div
            className="seccion1__img2_contanier"
            initial={{ x: -2000 }}
            animate={{ x: 0, transition: { duration: 1, delay: 1.2 } }}
          >
            <span className="seccion1__text2 iam">I{"`"}m</span>

            <span className="seccion1__text2 loose">Loose</span>

            <img src="https://ik.imagekit.io/mrprwema7/loose/banners/banner2_desktop_NOjQCmPLW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656447644676" alt="banner derecha" />

            <motion.div 
            className="seccion1__img2_squat"
            initial={{ x: 3000 }}
            animate={{ x: 0, transition: { duration: 1, delay: 1.2 } }}
            
            ></motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
