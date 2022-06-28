import { Step3 } from "../components/checkout/step3/Step3";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";

export const FinalizaCompra = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>
      <Navbar />
      <Step3 />
      <Footer />
    </>
  );
};
