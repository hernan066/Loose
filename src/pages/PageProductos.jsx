import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import { Productos } from "../components/producto/productos/Productos"
import { AnimatePresence } from "framer-motion"
import { Transition } from "../components/transition/Transition"



export const PageProductos = () => {
  return (
    <>
        <AnimatePresence exitBeforeEnter>
      <Transition />

      </AnimatePresence>
        
        
        <Navbar />
       <Productos />
       
        <Footer />
    
    </>
  )
}
