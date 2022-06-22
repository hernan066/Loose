import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import PageProducto from "../pages/PageProducto";
import { DatosEnvio } from "../pages/DatosEnvio";
import { FinalizaCompra } from "../pages/FinalizaCompra";
import { ConfirmaDatos } from "../pages/ConfirmaDatos";
import { PageQr } from "../pages/PageQr";
import { PageContacto } from "../pages/PageContacto";
import { TablaTalles } from "../pages/TablaTalles";
import { PageProductos } from "../pages/PageProductos";

export const AnimateRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
       <Route path="/producto/:slug" element={<PageProducto />} />
        <Route path="/productos" element={<PageProductos />} />
        <Route path="/checkout/datos-envio" element={<DatosEnvio />} />
        <Route
          path="/checkout/confirma-datos-envio"
          element={<ConfirmaDatos />}
        />
        <Route path="/checkout/finaliza-compra" element={<FinalizaCompra />} />
        <Route path="/qr" element={<PageQr />} />
        <Route path="/contacto" element={<PageContacto />} />
        <Route path="/tabla-talles" element={<TablaTalles />} />
      </Routes>
    </AnimatePresence>
  );
};
