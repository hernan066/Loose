import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"

import { AnimatePresence } from "framer-motion"
import { Transition } from "../components/transition/Transition"
import Producto from "../components/producto/producto/Producto"


const PageProducto = () => {
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Transition />

      </AnimatePresence>
      
      <Navbar />
      <Producto />
      <Footer />



    </>
  )
}

export default PageProducto