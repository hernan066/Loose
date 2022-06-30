import "./seccion2.css";
import images from "../../../assets/images";
import { scrollAnimateUp } from "../../../utils/animationVariats";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Seccion2 = () => {
  //console.log(import.meta.env.VITE_TOKEN_INSTAGRAM)
  const token = import.meta.env.VITE_TOKEN_INSTAGRAM;

  const [imgInstagram, setImgInstagram] = useState([]);

  const getImgInstagram = async () => {
    try {
      const resp = await axios.get(
        `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=10&access_token=${token}`
      );
      console.log(resp.data.data);
      setImgInstagram(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImgInstagram();
  }, []);

  return (
    <section className="seccion2__container">
      <motion.div
        className="seccion2__title__container"
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.2 }}
        variants={scrollAnimateUp}
      >
        <h2 className="seccion2__title">
          Seguinos en{" "}
          <a href="https://www.instagram.com/looseqr" target="blank">
            {" "}
            Instagram
            <div className="seccion2__logo__container">
              <img
                src="https://ik.imagekit.io/mrprwema7/loose/productos/giphy_I152ORXtR.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656608339945"
                alt="logo instagram"
              />
            </div>
          </a>
        </h2>
      </motion.div>

      <div className="container__slider">
        <motion.div
          className="section2__slider"
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.2 }}
          variants={scrollAnimateUp}
        >
          <input type="radio" name="slider" id="item-1" defaultChecked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />
          <div className="cards">
            <label
              className="section2__slider_card"
              htmlFor="item-1"
              id="selector-1"
            >
              <img src={imgInstagram[0]?.media_url} alt="remera1" />
              <img src={images.logo} alt="logo" id="image-logo" />
            </label>
            <label
              className="section2__slider_card"
              htmlFor="item-2"
              id="selector-2"
            >
              <img src={imgInstagram[1]?.media_url} alt="remera2" />
              <img src={images.logo} alt="logo" id="image-logo" />
            </label>

            <label
              className="section2__slider_card"
              htmlFor="item-3"
              id="selector-3"
            >
              <img src={imgInstagram[2]?.media_url} alt="remera3" />
              <img src={images.logo} alt="logo" id="image-logo" />
            </label>
          </div>
        </motion.div>
      </div>

      {/* ----------Smart Screen---------- */}

      <div className="container__img-smart-screen">
        <motion.div
          className="container__img-smart-screen-card"
          initial={"initial"}
          whileInView={"animate"}
          variants={scrollAnimateUp}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={imgInstagram[0]?.media_url} alt="remera1" />
        </motion.div>
        <motion.div
          className="container__img-smart-screen-card"
          initial={"initial"}
          whileInView={"animate"}
          variants={scrollAnimateUp}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={imgInstagram[1]?.media_url} alt="remera2" />
        </motion.div>
        <motion.div
          className="container__img-smart-screen-card"
          initial={"initial"}
          whileInView={"animate"}
          variants={scrollAnimateUp}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={imgInstagram[2]?.media_url} alt="remera3" />
        </motion.div>
      </div>
    </section>
  );
};

export default Seccion2;
