import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";
import { Register } from "../components/auth/register/Register";

export const PageRegister = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>

      <Navbar />
      <Register />
      <Footer />
    </>
  );
};
