import React from "react";
import "./banner.css";
import images from "../../../assets/images";

export const Banner = () => {
  return (
    <>
      <section className="seccion1__container">
        <img src={images.banner} alt="banner" />
      </section>
    </>
  );
};
