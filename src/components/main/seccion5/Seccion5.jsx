import "./seccion5.css";
import { TikTok } from "react-tiktok";
import { scrollAnimateUp, scrollFadeIn } from "../../../utils/animationVariats";
import { motion } from "framer-motion";

export const Seccion5 = () => {
  return (
    <section className="seccion5__container">
      <motion.div 
      className="seccion5__title"
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.2 }}
      variants={scrollFadeIn}
      >
        <h2>Nuestro</h2>
        <div className="seccion5__logo__container">
            <img src="https://ik.imagekit.io/mrprwema7/loose/productos/tiktok_P7fzVivsJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656607069274" alt="logo tiktok" />
        </div>
      </motion.div>

      <motion.div 
      className="seccion5__tiktok__container"
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.1 }}
      variants={scrollAnimateUp}
      >
        <TikTok url="https://www.tiktok.com/@looseqr/video/7115046961404808454" />

        <TikTok url="https://www.tiktok.com/@looseqr/video/7115045678903987461" />

        <TikTok url="https://www.tiktok.com/@looseqr/video/7115039684488613125" />
      </motion.div>
    </section>
  );
};
