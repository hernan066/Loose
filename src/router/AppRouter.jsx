import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Producto from "../pages/Producto";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto />} /> 
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
