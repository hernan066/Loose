import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import PageProducto from "../pages/PageProducto";
import { AnimateRouter } from "./AnimateRouter";


const AppRouter = () => {
  
  
  
  return (
    <HashRouter>
        <AnimateRouter />
    </HashRouter>
  );
};

export default AppRouter;
