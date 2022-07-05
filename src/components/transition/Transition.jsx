import "./transition.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const Transition = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div
      className="transition__bg"
      initial={{ top: "0vh", zIndex: 20 }}
      animate={{ top: "-120vh", zIndex: 20, transition: { duration: 1 } }}
      exit={{ opacity: 0, zIndex: -1 }}
    ></motion.div>
  );
};
