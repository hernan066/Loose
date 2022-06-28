import { Step1 } from "../components/checkout/step1/Step1";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";

export const DatosEnvio = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>

      <Navbar />
      <Step1 />
      <Footer />
    </>
  );
};
