import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import PageProducto from "../pages/PageProducto";
import { Step1 } from "../components/checkout/step1/Step1";
import { Step3 } from "../components/checkout/step3/Step3";
import { Step2 } from "../components/checkout/step2/Step2";

export const AnimateRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<PageProducto />} />
        <Route path="/checkout/datos-envio" element={<Step1 />} />
        <Route path="/checkout/confirma-datos-envio" element={<Step2 />} />
        <Route path="/checkout/finaliza-compra" element={<Step3 />} />
      </Routes>
    </AnimatePresence>
  );
};
