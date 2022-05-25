import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageProducto from "../pages/PageProducto";


const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/producto" element={<PageProducto />} /> 
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
