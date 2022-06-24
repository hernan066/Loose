import React, { useRef, useEffect } from "react";
import "./seccion3.css";
import images from "../../../assets/images";
import hoverEffect from "hover-effect";
import { motion } from "framer-motion";

import { scrollAnimateUp } from "../../../utils/animationVariats";

export const Seccion3 = () => {
  const container = useRef();

  useEffect(() => {
    console.log(container.current);

    new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: images.remera4,
      image2: images.remera3,
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/example/img/displacement/1.jpg",
    });
  }, [container]);

  return (
    <section className="seccion3__container">
      <div className="seccion3__background"></div>

      <motion.div
        className="seccion__text"
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.span style={{ color: "#fff" }} variants={scrollAnimateUp}>
          HOLGADO{" "}
        </motion.span>
        <motion.span style={{ color: "#fff" }} variants={scrollAnimateUp}>
          SUELTO
        </motion.span>
        <motion.span style={{ color: "#ec5928" }} variants={scrollAnimateUp}>
          EN LIBERTAD!
        </motion.span>
        <motion.div className="seccion__text-p" variants={scrollAnimateUp}>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </motion.div>

        <motion.button className="btn" variants={scrollAnimateUp}>
          Leer mas...
        </motion.button>
      </motion.div>
      <motion.div
        className="seccion__image"
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.2 }}
        variants={scrollAnimateUp}
      >
        <div className="seccion__image-container" ref={container}>
          <div className="seccion__image_square-bg"></div>
          <div className="seccion__image_square"></div>
        </div>

        <div className="seccion__image_bg"></div>
      </motion.div>
    </section>
  );
};
