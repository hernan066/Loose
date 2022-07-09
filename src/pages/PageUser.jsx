import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";
import { User } from "../components/user/User";


export const PageUser = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>

      <Navbar />
      <User />
      <Footer />
    </>
  );
};
