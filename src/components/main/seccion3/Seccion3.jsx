import React, { useRef, useEffect } from "react";
import "./seccion3.css";
import images from "../../../assets/images";
import hoverEffect from "hover-effect";

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
      "https://raw.githubusercontent.com/robin-dela/hover-effect/master/example/img/displacement/1.jpg"
    });
  }, [container]);
  
  
  return (
    <section className="seccion3__container">
      <div className="seccion3__background"></div>

      <div className="seccion__text">
        <span style={{ color: "#fff" }}>HOLGADO </span>
        <span style={{ color: "#fff" }}>SUELTO</span>
        <span style={{ color: "#ec5928" }}>EN LIBERTAD!</span>
        <div className="seccion__text-p">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>

        <button className="btn">Leer mas...</button>
      </div>
      <div className="seccion__image">
        
        <div className="seccion__image-container" ref={container}>
         {/*  <img src={images.remera4} alt="" /> */}
         <div className="seccion__image_square-bg"></div>
          <div className="seccion__image_square"></div>  
        </div>

        <div className="seccion__image_bg"></div>
      </div>
    </section>
  );
};
