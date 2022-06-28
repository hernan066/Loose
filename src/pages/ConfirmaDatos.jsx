import { Step2 } from "../components/checkout/step2/Step2";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";

export const ConfirmaDatos = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>
      <Navbar />
      <Step2 />
      <Footer />
    </>
  );
};
