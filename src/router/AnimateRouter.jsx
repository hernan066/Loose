import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import PageProducto from "../pages/PageProducto";
import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";


export const AnimateRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<PageProducto />} />
      </Routes>
    </AnimatePresence>
  );
};
