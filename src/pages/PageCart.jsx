import { Cart } from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { AnimatePresence } from "framer-motion"
import { Transition } from "../components/transition/Transition"

export const PageCart = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>

      <Navbar />
      <Cart />
      <Footer />
    </>
  );
};
