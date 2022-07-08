import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import { Login } from "../components/auth/login/Login";
import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";

export const PageLogin = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>

      <Navbar />
      <Login />
      <Footer />
    </>
  );
};
