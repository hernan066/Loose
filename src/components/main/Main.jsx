import "./main.css";
import { Banner } from "./seccion1/Banner";
import Seccion2 from "./seccion2/Seccion2";
import { Seccion3 } from "./seccion3/Seccion3";
import Seccion4 from "./seccion4/Seccion4";
import { motion } from "framer-motion";
import { Seccion5 } from "./seccion5/Seccion5";

const Main = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
    >
      <Banner />
      <Seccion4 />
      <Seccion3 />
      <Seccion2 />
      <Seccion5 />
    </motion.main>
  );
};

export default Main;
